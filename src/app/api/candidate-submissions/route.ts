import { NextRequest, NextResponse } from 'next/server';
import { candidateSubmissionSchema } from '@/lib/validation/schemas';
import { checkRateLimit, getClientIdentifier, isSpamBot } from '@/lib/rate-limit/rateLimiter';
import { saveCandidateSubmissionToFirestore } from '@/lib/firebase/enquiries';

export async function POST(req: NextRequest) {
  try {
    const clientId = getClientIdentifier(req);

    // 1. Rate Limiting Check
    const rateCheck = checkRateLimit(clientId, 5, 60000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many submissions. Please wait ${rateCheck.retryAfterSeconds} seconds before trying again.`
        },
        { status: 429, headers: { 'Retry-After': String(rateCheck.retryAfterSeconds) } }
      );
    }

    const body = await req.json().catch(() => ({}));

    // 2. Honeypot Bot Trap Check
    if (isSpamBot(body)) {
      return NextResponse.json({ success: true, message: 'Candidate profile received.' }, { status: 200 });
    }

    // 3. Validation
    const parsed = candidateSubmissionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, errors: parsed.error.format() }, { status: 400 });
    }

    // 4. Persistence to Firestore
    const id = await saveCandidateSubmissionToFirestore({
      name: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      professionalCategory: parsed.data.primaryPillar,
      targetRole: parsed.data.targetRole,
      yearsExperience: parsed.data.yearsExperience,
      portfolioOrLinkedIn: parsed.data.portfolioOrLinkedIn,
      summaryNotes: parsed.data.summaryNotes,
      resumeStoragePath: parsed.data.resumeFileName ? `candidate-resumes/pending/${parsed.data.resumeFileName}` : undefined
    });

    return NextResponse.json({
      success: true,
      submissionId: id,
      message: 'Candidate profile received. Our recruitment panel reviews all submissions for matching roles.',
      receivedAt: new Date().toISOString()
    }, { status: 201 });

  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Internal server error processing candidate submission' },
      { status: 500 }
    );
  }
}
