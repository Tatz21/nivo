'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, FileText, UploadCloud, CheckCircle2, ShieldCheck, Download, ArrowRight, Eye, Layout } from 'lucide-react';
import ScrollReveal from '@/components/motion/ScrollReveal';
import MagneticButton from '@/components/motion/MagneticButton';

export default function ResumeStudioFeature() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-violet-500/20 relative bg-gradient-to-br from-[#161526]/90 via-[#19172B]/80 to-[#11111B]/95 shadow-2xl">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-violet/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Feature Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-900/50 border border-violet-400/30 text-xs text-lime-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-semibold">First-Party Application</span>
                <span className="text-zinc-500">•</span>
                <span>Zero Account Friction</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Resume Studio. <br />
                <span className="cosmic-gradient-text">Engineered for ATS & Recruiter Eyes.</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                Build an ATS-optimized, beautifully typeset resume in minutes. Import existing PDF/DOCX files, customize clean typography, switch between 4 curated templates without data loss, and export selectable vector PDFs.
              </p>

              {/* Grid of Advantages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <UploadCloud className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white">Smart PDF / DOCX Import</h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Extract and review your existing profile before finalizing content.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Download className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white">Real Vector PDF Export</h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Selectable text, clean typography, not a fragile image capture.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Layout className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white">4 Distinct Design Templates</h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Cosmic Modern, Executive Clean, Creative Minimal, and Tech Monospace.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white">High-Entropy Privacy</h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Protected access tokens; never indexed by search engines or public by default.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <Link
                    href="/resume-studio/create"
                    className="flex items-center gap-2 px-6 py-3.5 rounded-xl cosmic-glow-btn text-white font-semibold text-sm shadow-xl"
                  >
                    <FileText className="w-4 h-4 text-lime-300" />
                    <span>Create New Resume</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>

                <Link
                  href="/resume-studio/import"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel text-white font-medium text-xs hover:bg-white/10 transition-colors border border-white/10"
                >
                  <UploadCloud className="w-4 h-4 text-violet-400" />
                  <span>Import Existing CV</span>
                </Link>

                <Link
                  href="/resume-studio/templates"
                  className="flex items-center gap-1.5 px-3 py-3.5 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Templates</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Live Mockup Sheet */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-2xl bg-white text-zinc-900 p-6 shadow-2xl border border-zinc-200 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Header preview */}
                <div className="border-b border-zinc-200 pb-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-extrabold text-zinc-900 tracking-tight">Alex Vance</h4>
                      <div className="text-xs font-semibold text-violet-600">Senior Software Engineer</div>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-semibold">
                      ATS 98/100
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-1 flex flex-wrap gap-2">
                    <span>San Francisco, CA</span>
                    <span>•</span>
                    <span>alex.vance@example.com</span>
                    <span>•</span>
                    <span>alexvance.dev</span>
                  </div>
                </div>

                {/* Body skeleton preview */}
                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] font-bold text-violet-700 uppercase tracking-wider mb-1">
                      Experience
                    </div>
                    <div className="text-[11px] font-bold text-zinc-800 flex justify-between">
                      <span>Staff Frontend Architect</span>
                      <span className="text-[9px] font-normal text-zinc-400">2023 - Present</span>
                    </div>
                    <div className="text-[10px] text-zinc-500">Aether Cloud Systems</div>
                    <ul className="text-[9px] text-zinc-600 list-disc list-inside mt-1 space-y-0.5">
                      <li>Architected multi-tenant dashboard serving 120k+ MAU with &lt;100ms latency.</li>
                      <li>Transitioned frontend to Next.js App Router, slashing bundle by 38%.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-violet-700 uppercase tracking-wider mb-1">
                      Core Competencies
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['TypeScript', 'React 19', 'Next.js', 'PostgreSQL', 'Docker', 'AI Engineering'].map((s) => (
                        <span key={s} className="text-[8px] bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-[10px] font-medium shadow-xl flex items-center gap-1.5 border border-white/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                  <span>Real Vector PDF Ready</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
