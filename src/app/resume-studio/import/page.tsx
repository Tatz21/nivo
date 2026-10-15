import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ResumeImporter from '@/components/resume/ResumeImporter';

export const metadata: Metadata = {
  title: 'Import Resume — Nivó Resume Studio',
  description: 'Upload your existing PDF or DOCX resume to extract and review structured information before customization.',
  robots: {
    index: false,
    follow: false
  }
};

export default function ImportPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Link
          href="/resume-studio"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Resume Studio</span>
        </Link>
      </div>

      <ResumeImporter />
    </div>
  );
}
