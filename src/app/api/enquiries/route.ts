import { NextRequest, NextResponse } from 'next/server';
import { educationEnquirySchema, courseEnquirySchema, generalContactSchema } from '@/lib/validation/schemas';
import { checkRateLimit, getClientIdentifier, isSpamBot } from '@/lib/rate-limit/rateLimiter';
import { saveEnquiryToFirestore } from '@/lib/firebase/enquiries';

export async function POST(req: NextRequest) {
  try {
    const clientId = getClientIdentifier(req);

    // 1. Rate Limiting Check (max 5 submissions per minute per IP)
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

    // 2. Anti-Abuse Bot Honeypot Check
    if (isSpamBot(body)) {
      // Silently accept without processing to fool bot scrapers
      return NextResponse.json({ success: true, message: 'Enquiry received.' }, { status: 200 });
    }

    // 3. Validation & Persistence per Type
    if (body.type === 'course') {
      const parsed = courseEnquirySchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ success: false, errors: parsed.error.format() }, { status: 400 });
      }

      const id = await saveEnquiryToFirestore({
        type: 'course',
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        service: parsed.data.courseId,
        message: parsed.data.notes
      });

      return NextResponse.json({
        success: true,
        enquiryId: id,
        message: 'Course application received. Our cohort coordinator will contact you shortly.',
        receivedAt: new Date().toISOString()
      }, { status: 201 });
    }

    if (body.type === 'general') {
      const parsed = generalContactSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ success: false, errors: parsed.error.format() }, { status: 400 });
      }

      const id = await saveEnquiryToFirestore({
        type: 'general',
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        service: parsed.data.subject,
        message: parsed.data.message
      });

      return NextResponse.json({
        success: true,
        enquiryId: id,
        message: 'Message received. We will respond promptly.',
        receivedAt: new Date().toISOString()
      }, { status: 201 });
    }

    // Default: Education Enquiry
    const parsed = educationEnquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, errors: parsed.error.format() }, { status: 400 });
    }

    const id = await saveEnquiryToFirestore({
      type: 'education',
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      service: `${parsed.data.educationLevel} — ${parsed.data.subjectOrArea} (${parsed.data.deliveryMode})`,
      message: parsed.data.notes,
      location: parsed.data.locationCity
    });

    return NextResponse.json({
      success: true,
      enquiryId: id,
      message: 'Education enquiry received. We will connect you with a specialized mentor.',
      receivedAt: new Date().toISOString()
    }, { status: 201 });

  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Internal server error processing enquiry.' },
      { status: 500 }
    );
  }
}
