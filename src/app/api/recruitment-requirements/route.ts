import { NextRequest, NextResponse } from 'next/server';
import { staffingRequirementSchema } from '@/lib/validation/schemas';
import { checkRateLimit, getClientIdentifier, isSpamBot } from '@/lib/rate-limit/rateLimiter';
import { saveStaffingRequirementToFirestore } from '@/lib/firebase/enquiries';

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
      return NextResponse.json({ success: true, message: 'Staffing requirement submitted.' }, { status: 200 });
    }

    // 3. Validation
    const parsed = staffingRequirementSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, errors: parsed.error.format() }, { status: 400 });
    }

    // 4. Persistence to Firestore
    const id = await saveStaffingRequirementToFirestore({
      organisationName: parsed.data.organizationName,
      contactName: parsed.data.contactPerson,
      businessEmail: parsed.data.email,
      phone: parsed.data.phone,
      organisationType: parsed.data.organizationType,
      roleCategory: parsed.data.roleCategory,
      vacancyCount: parsed.data.positionsCount,
      location: parsed.data.location,
      details: parsed.data.jobDescriptionNotes
    });

    return NextResponse.json({
      success: true,
      requirementId: id,
      message: 'Staffing requirement submitted successfully. Our talent recruitment team has received your brief.',
      receivedAt: new Date().toISOString()
    }, { status: 201 });

  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Internal server error processing staffing requirement' },
      { status: 500 }
    );
  }
}
