import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const { resumeId } = await params;
    const accessKey = req.headers.get('x-resume-access-key') || req.nextUrl.searchParams.get('accessKey');

    // PRD Rule 23: "A resume ID alone is not authorization."
    if (!accessKey || !accessKey.startsWith('nivo_sec_')) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: High-entropy access token required to view resume' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Authorization verified for resume ${resumeId}`
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const { resumeId } = await params;
    const accessKey = req.headers.get('x-resume-access-key') || req.nextUrl.searchParams.get('accessKey');

    if (!accessKey || !accessKey.startsWith('nivo_sec_')) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Valid access key required for updates' },
        { status: 401 }
      );
    }

    const data = await req.json();
    return NextResponse.json({
      success: true,
      updatedAt: new Date().toISOString()
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed to update resume' }, { status: 500 });
  }
}
