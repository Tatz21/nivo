'use client';

import React from 'react';
import { 
  ClipboardCheck, 
  UserCheck, 
  Cpu, 
  LineChart, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Clock,
  Award,
  Zap,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function HowItWorksSection() {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              <span>Step-by-Step Methodology</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Four Practical Steps. <br />
              <span className="text-red-600 dark:text-red-500">From Diagnostic Assessment to Mastery.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Real learning does not happen through pre-recorded playlists. We build a personalized learning roadmap around your syllabus, current strengths, and target outcomes.
            </p>
          </div>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* CONNECTED ROADMAP PIPELINE (4 DIFFERENT STEP DESIGNS)   */}
        {/* ======================================================== */}
        <div className="relative">
          
          {/* Connecting Conduit Line Behind Cards (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-red-600/20 via-red-600/40 to-red-600/20 -translate-y-12 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            
            {/* ---------------------------------------------------- */}
            {/* STEP 1: THE RADAR ASSESSMENT BOX                    */}
            {/* Distinct style: Radial diagnostic clock pill, left red bar */}
            {/* ---------------------------------------------------- */}
            <ScrollReveal delay={80}>
              <div className="group relative flex flex-col justify-between h-full rounded-3xl p-7 bg-white dark:bg-zinc-950/90 border-l-4 border-l-red-600 border-t border-r border-b border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  {/* Step Header with 45-Min Timer Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40">
                      01 / DIAGNOSTIC
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                      <Clock className="w-3 h-3 text-red-600" />
                      <span>45 Minutes</span>
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-2xl bg-red-600/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold border border-red-500/20 group-hover:scale-110 transition-transform">
                    <ClipboardCheck className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                    Root-Cause Diagnostic
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    We sit down with the learner or parent to review current conceptual grasp, exam targets, and specific stumbling blocks.
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-zinc-100 dark:border-white/10 space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                    <span className="text-[11px]">Pinpoints foundational gaps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                    <span className="text-[11px]">Tests problem-solving speed</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ---------------------------------------------------- */}
            {/* STEP 2: THE FACULTY MATCH MATRIX BOX                */}
            {/* Distinct style: Elevated dark glass, top glowing arch */}
            {/* ---------------------------------------------------- */}
            <ScrollReveal delay={160}>
              <div className="group relative flex flex-col justify-between h-full rounded-3xl p-7 bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/15 shadow-md hover:shadow-2xl hover:border-red-500/40 transition-all duration-300 lg:-translate-y-2">
                
                {/* Top Subtle Crimson Glow */}
                <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-red-600 rounded-full" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-white/10">
                      02 / PAIRING
                    </span>
                    <span className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                      Top 2% Vetted
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-zinc-200 dark:bg-zinc-800 text-red-600 dark:text-red-400 flex items-center justify-center font-bold border border-zinc-300 dark:border-white/10 group-hover:scale-110 transition-transform">
                    <UserCheck className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                    Matched Faculty Pairing
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    We pair each student with an educator whose subject depth matches how they learn best. You speak with them before confirming.
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-zinc-200 dark:border-white/10 space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                    <span className="text-[11px]">Academic credential verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                    <span className="text-[11px]">Personal fit consultation</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ---------------------------------------------------- */}
            {/* STEP 3: THE LIVE WORKSPACE & CODE REVIEW BOX        */}
            {/* Distinct style: Technical dot grid, formula chip      */}
            {/* ---------------------------------------------------- */}
            <ScrollReveal delay={240}>
              <div className="group relative flex flex-col justify-between h-full rounded-3xl p-7 bg-white dark:bg-zinc-950/90 border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300">
                
                {/* Subtle Technical Dot Grid */}
                <div 
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, #dc2626 1px, transparent 1px)`,
                    backgroundSize: '14px 14px',
                  }}
                />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40">
                      03 / ACTIVE PRACTICE
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10">
                      <Zap className="w-3 h-3 text-amber-500" />
                      <span>Live Math</span>
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-red-600/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold border border-red-500/20 group-hover:scale-110 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                    Active Problem Solving
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    No passive video watching. Sessions prioritize first-principles derivations, line-by-line pull request reviews, and immediate correction.
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-zinc-100 dark:border-white/10 space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                    <span className="text-[11px]">Real-time feedback loops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                    <span className="text-[11px]">Guided derivations & exercises</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ---------------------------------------------------- */}
            {/* STEP 4: THE MEASURED BENCHMARK SCORECARD BOX        */}
            {/* Distinct style: Dark card with milestone pill & badge */}
            {/* ---------------------------------------------------- */}
            <ScrollReveal delay={320}>
              <div className="group relative flex flex-col justify-between h-full rounded-3xl p-7 bg-zinc-950 text-white border border-zinc-800 shadow-2xl hover:border-red-500/50 transition-all duration-300 lg:-translate-y-2">
                
                {/* Red Corner Status Pill */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/15 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-900/50">
                      04 / MILESTONE
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      Monthly Report
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-zinc-900 text-red-400 flex items-center justify-center font-bold border border-zinc-800 group-hover:scale-110 transition-transform">
                    <LineChart className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                    Transparent Progress
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    Parents, students, and cohort members receive monthly diagnostic progress reports with measurable concept mastery benchmarks.
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-zinc-800 space-y-1.5 text-xs text-zinc-300 relative z-10 font-mono">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">Concept Mastery</span>
                    <span className="text-emerald-400 font-bold">Audited</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">Next Target Exam</span>
                    <span className="text-white font-bold">Planned</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Bottom Link */}
        <ScrollReveal delay={360}>
          <div className="mt-12 text-center">
            <Link
              href="/education"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
            >
              <span>Read more about our diagnostic assessment methods</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
