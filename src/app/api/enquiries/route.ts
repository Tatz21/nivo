import { NextRequest, NextResponse } from 'next/server';
import { educationEnquirySchema, courseEnquirySchema } from '@/lib/validation/schemas';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.type === 'course') {
      const parsed = courseEnquirySchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ success: false, errors: parsed.error.format() }, { status: 400 });
      }
      return NextResponse.json({
        success: true,
        message: 'Course enquiry received. Our academic coordinator will contact you shortly.',
        receivedAt: new Date().toISOString()
      });
    }

    // Default: education enquiry
    const parsed = educationEnquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, errors: parsed.error.format() }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Education enquiry received. We will connect you with a specialist mentor.',
      receivedAt: new Date().toISOString()
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Internal server error processing enquiry' }, { status: 500 });
  }
}
