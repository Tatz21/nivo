'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'next/navigation';
import { ResumeData } from '@/lib/types/resume';
import { getLocalResume, createNewResume } from '@/lib/resume/storage';
import ResumeEditor from '@/components/resume/ResumeEditor';
import { Loader2 } from 'lucide-react';


function EditorInner() {
  const params = useParams();
  const resumeId = params?.resumeId as string;
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    if (!resumeId) return;

    // Check localStorage first
    const existing = getLocalResume(resumeId);
    if (existing) {
      setResumeData(existing);
    } else {
      // If not yet saved locally, initialize with sample data
      const created = createNewResume('My Resume', true);
      created.id = resumeId;
      setResumeData(created);
    }
  }, [resumeId]);

  if (!resumeData) {
    return (
      <div className="min-h-screen bg-[#0d0c15] flex items-center justify-center text-white">
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <Loader2 className="w-5 h-5 animate-spin text-lime-300" />
          <span>Initializing secure resume workspace...</span>
        </div>
      </div>
    );
  }

  return <ResumeEditor initialData={resumeData} />;
}

export default function ResumeEditorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0d0c15] flex items-center justify-center text-white">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <Loader2 className="w-5 h-5 animate-spin text-lime-300" />
            <span>Loading workspace...</span>
          </div>
        </div>
      }
    >
      <EditorInner />
    </Suspense>
  );
}
