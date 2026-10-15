'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FileText, PlusCircle, UploadCloud, ArrowRight, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import { createNewResume } from '@/lib/resume/storage';

export default function CreateResumePage() {
  const router = useRouter();

  const handleCreate = (fromSample: boolean) => {
    const resume = createNewResume(fromSample ? 'My Professional Resume' : 'Untitled Resume', fromSample);
    router.push(`/resume-studio/editor/${resume.id}`);
  };

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back button */}
      <div>
        <Link href="/resume-studio" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Resume Studio</span>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quick Launch</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          How Would You Like to Start?
        </h1>

        <p className="text-xs sm:text-sm text-zinc-400">
          Choose a path below. You can customize fields, rearrange sections, and export at any time.
        </p>
      </div>

      {/* 3 Pathway Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Pathway 1: Pro Sample */}
        <div 
          onClick={() => handleCreate(true)}
          className="glass-panel rounded-3xl p-6 border border-violet-500/40 hover:border-violet-500/70 transition-all flex flex-col justify-between cursor-pointer group bg-gradient-to-b from-[#19172B] to-[#141322]"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-600/30 text-lime-300 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-lime-300 uppercase tracking-widest">Recommended</span>
              <h2 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                Pre-Filled Professional Template
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Loads industry-standard structure, action-oriented bullet examples, and optimal skill categorization. Simply swap in your details.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-white group-hover:text-violet-300">
            <span>Launch with Sample</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Pathway 2: Import */}
        <Link
          href="/resume-studio/import"
          className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-lime-500/40 transition-all flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-lime-400/20 text-lime-300 flex items-center justify-center">
              <UploadCloud className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Fast Migration</span>
              <h2 className="text-lg font-bold text-white group-hover:text-lime-300 transition-colors">
                Import Existing Document
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Upload a PDF or DOCX file to extract your contact details, jobs, and education automatically before editing.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-white group-hover:text-lime-300">
            <span>Upload File</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        {/* Pathway 3: Blank Canvas */}
        <div 
          onClick={() => handleCreate(false)}
          className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between cursor-pointer group"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-300 flex items-center justify-center">
              <PlusCircle className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Blank State</span>
              <h2 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                Start from Scratch
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Begin with clean, empty fields and assemble your resume step-by-step using our section wizards.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-white group-hover:text-purple-300">
            <span>Blank Canvas</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

      </div>

    </div>
  );
}
