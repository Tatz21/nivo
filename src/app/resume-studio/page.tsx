'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, FileText, UploadCloud, Layout, ArrowRight, ShieldCheck, Download, Trash2, Clock, CheckCircle2 } from 'lucide-react';
import { listLocalResumes, deleteLocalResume, createNewResume } from '@/lib/resume/storage';
import { useRouter } from 'next/navigation';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function ResumeStudioLandingPage() {
  const router = useRouter();
  const [savedList, setSavedList] = useState<{ id: string; title: string; updatedAt: string; accessKey: string }[]>([]);

  useEffect(() => {
    setSavedList(listLocalResumes());
  }, []);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    deleteLocalResume(id);
    setSavedList(listLocalResumes());
  };

  const handleStartScratch = () => {
    const resume = createNewResume('My New Resume', false);
    router.push(`/resume-studio/editor/${resume.id}`);
  };

  const handleStartSample = () => {
    const resume = createNewResume('Professional Resume', true);
    router.push(`/resume-studio/editor/${resume.id}`);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-semibold">Nivó Resume Studio</span>
            <span className="text-zinc-500">•</span>
            <span>ATS-Ready Text-Based Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Craft an ATS-Proof Resume. <br />
            <span className="cosmic-gradient-text">Zero Account Friction.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            A high-performance resume builder engineered to pass Applicant Tracking Systems. Export true selectable vector text PDFs, import existing documents, and secure your work with cryptographic access tokens.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleStartSample}
              className="px-6 py-3.5 rounded-xl cosmic-glow-btn text-white font-semibold text-sm shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-lime-300" />
              <span>Start with Pro Template</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/resume-studio/import"
              className="px-6 py-3.5 rounded-xl glass-panel text-white font-medium text-xs hover:bg-white/10 transition-colors flex items-center gap-2 border border-white/10"
            >
              <UploadCloud className="w-4 h-4 text-violet-400" />
              <span>Import Existing PDF / DOCX</span>
            </Link>

            <Link
              href="/resume-studio/templates"
              className="px-5 py-3.5 text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Explore 4 Templates</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Saved Resumes on this Device */}
      {savedList.length > 0 && (
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-lime-400" />
              <h2 className="text-base font-bold text-white">Your Saved Resumes on this Browser</h2>
            </div>
            <span className="text-xs text-zinc-500 font-mono">{savedList.length} Saved</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedList.map((item) => (
              <div
                key={item.id}
                onClick={() => router.push(`/resume-studio/editor/${item.id}`)}
                className="p-4 rounded-xl bg-[#161526] hover:bg-[#1f1d36] border border-white/5 hover:border-violet-500/40 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-sm text-white group-hover:text-violet-300 transition-colors">
                      {item.title}
                    </span>
                    <button
                      onClick={(e) => handleDelete(item.id, e)}
                      className="text-zinc-500 hover:text-rose-400 p-1 transition-colors"
                      title="Delete resume"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-1">
                    Last modified {new Date(item.updatedAt).toLocaleDateString()}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-zinc-500 font-mono">{item.id}</span>
                  <span className="text-lime-400 font-semibold flex items-center gap-1">
                    <span>Edit</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Core Advantages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-violet-600/20 text-violet-300 flex items-center justify-center">
            <Download className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Real Vector Text PDF</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Never screenshot your resume. Resume Studio outputs a crisp, high-resolution vector PDF with selectable text, valid fonts, and correct pagination that ATS parsers extract effortlessly.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-lime-400/20 text-lime-300 flex items-center justify-center">
            <UploadCloud className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Smart PDF / DOCX Ingestion</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Don’t start from scratch. Upload your old resume to automatically parse your contact details, jobs, education, and skills into our structured schema.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Cryptographic Access Keys</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Your data is never publicly searchable or scraped. Each resume is assigned a private high-entropy access secret that lets you reopen and update your document safely.
          </p>
        </div>
      </div>

    </div>
  );
}
