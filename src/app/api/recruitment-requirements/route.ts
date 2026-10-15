import { NextRequest, NextResponse } from 'next/server';
import { staffingRequirementSchema } from '@/lib/validation/schemas';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = staffingRequirementSchema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json({ success: false, errors: parsed.error.format() }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Staffing requirement submitted successfully. Our talent recruitment team has received your brief.',
      receivedAt: new Date().toISOString()
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Internal server error processing staffing requirement' }, { status: 500 });
  }
}
