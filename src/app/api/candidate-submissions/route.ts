import { NextRequest, NextResponse } from 'next/server';
import { candidateSubmissionSchema } from '@/lib/validation/schemas';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = candidateSubmissionSchema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json({ success: false, errors: parsed.error.format() }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Candidate profile received. Our recruitment panel reviews all submissions for matching roles.',
      receivedAt: new Date().toISOString()
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Internal server error processing candidate submission' }, { status: 500 });
  }
}
