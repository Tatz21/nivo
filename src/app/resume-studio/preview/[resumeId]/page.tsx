'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ResumeData } from '@/lib/types/resume';
import { getLocalResume } from '@/lib/resume/storage';
import { exportResumeToPDF } from '@/lib/resume/pdfExport';
import ResumePreview from '@/components/resume/ResumePreview';
import { ArrowLeft, Download, Printer, Loader2 } from 'lucide-react';

function PreviewInner() {
  const params = useParams();
  const router = useRouter();
  const resumeId = params?.resumeId as string;
  const [resume, setResume] = useState<ResumeData | null>(null);

  useEffect(() => {
    if (!resumeId) return;
    const data = getLocalResume(resumeId);
    if (data) {
      setResume(data);
    }
  }, [resumeId]);

  if (!resume) {
    return (
      <div className="min-h-screen bg-[#0d0c15] flex flex-col items-center justify-center text-white space-y-4">
        <p className="text-xs text-zinc-400">Resume not found locally on this browser.</p>
        <Link href="/resume-studio" className="text-xs text-lime-400 underline">
          Return to Resume Studio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0c15] text-white pt-24 pb-16 flex flex-col items-center">
      
      {/* Top action bar */}
      <div className="w-full max-w-4xl px-4 mb-6 flex items-center justify-between">
        <Link
          href={`/resume-studio/editor/${resume.id}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Editor</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-200 border border-white/10 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Browser Print</span>
          </button>

          <button
            onClick={() => exportResumeToPDF(resume)}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg cosmic-glow-btn text-xs font-semibold text-white shadow-lg cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-lime-300" />
            <span>Export Vector PDF</span>
          </button>
        </div>
      </div>

      {/* Sheet preview */}
      <div className="w-full flex justify-center overflow-auto px-4">
        <ResumePreview resume={resume} scale={1} />
      </div>

    </div>
  );
}

export default function ResumePreviewPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0d0c15] flex items-center justify-center text-white">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <Loader2 className="w-5 h-5 animate-spin text-lime-300" />
            <span>Loading preview...</span>
          </div>
        </div>
      }
    >
      <PreviewInner />
    </Suspense>
  );
}
