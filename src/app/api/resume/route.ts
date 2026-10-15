import { NextRequest, NextResponse } from 'next/server';
import { generateResumeId, generateSecureAccessKey } from '@/lib/resume/storage';
import { SAMPLE_RESUME_DATA } from '@/lib/data/sampleResume';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const newId = generateResumeId();
    const accessKey = generateSecureAccessKey();

    const created = {
      ...SAMPLE_RESUME_DATA,
      id: newId,
      accessKey,
      title: body.title || 'New Resume',
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      resume: created
    }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed to create resume' }, { status: 500 });
  }
}
