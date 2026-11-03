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
      <div className="min-h-screen bg-zinc-50 dark:bg-[#09090B] flex flex-col items-center justify-center text-zinc-950 dark:text-white space-y-4">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Resume not found locally on this browser.</p>
        <Link href="/resume-studio" className="text-xs text-red-600 dark:text-red-500 underline font-medium">
          Return to Resume Studio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-[#09090B] text-zinc-950 dark:text-white pt-24 pb-16 flex flex-col items-center">
      
      {/* Top action bar */}
      <div className="w-full max-w-4xl px-4 mb-6 flex items-center justify-between">
        <Link
          href={`/resume-studio/editor/${resume.id}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Editor</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="brand-secondary-btn !py-1.5 !px-3.5 !text-xs inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Browser Print</span>
          </button>

          <button
            onClick={() => exportResumeToPDF(resume)}
            className="brand-primary-btn !py-1.5 !px-4 !text-xs inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-white" />
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
        <div className="min-h-screen bg-zinc-50 dark:bg-[#09090B] flex items-center justify-center text-zinc-950 dark:text-white">
          <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
            <Loader2 className="w-5 h-5 animate-spin text-red-600 dark:text-red-500" />
            <span>Loading preview...</span>
          </div>
        </div>
      }
    >
      <PreviewInner />
    </Suspense>
  );
}
