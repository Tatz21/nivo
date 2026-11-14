'use client';

import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Code2, 
  ShieldCheck, 
  Sparkles,
  Terminal,
  FileCheck2,
  Clock
} from 'lucide-react';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function AudiencePathwaySection() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">
              <Compass className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              <span>Tailored Pathways</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Built For Learners, Engineers, <br />
              <span className="text-red-600 dark:text-red-500">and Academic Institutions.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Every learner and partner has distinct goals. We tailored each pathway with its own specialized faculty, instruction style, and delivery tools.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Distinctly Designed Pathway Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* ======================================================== */}
          {/* BOX 1: THE ACADEMIC SYLLABUS DOSSIER (FOR STUDENTS)     */}
          {/* Style: Clean light/dark academic paper, syllabus chips   */}
          {/* ======================================================== */}
          <ScrollReveal delay={80}>
            <div className="group relative flex flex-col justify-between h-full rounded-3xl p-6 sm:p-8 bg-white dark:bg-zinc-950/90 border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-red-500/40 transition-all duration-300">
              
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />

              <div className="space-y-6">
                {/* Header: Icon & Board Badges */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-red-600/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold border border-red-500/20 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-red-600 dark:text-red-400 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40">
                    Dedicated 1-on-1 Teaching
                  </span>
                </div>

                {/* Title & Target Syllabus */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                    One-to-One Student Tutoring
                  </h3>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-1">
                    Private instruction for Cambridge, IB, CBSE, and University STEM
                  </p>
                </div>

                {/* Micro-UI: Interactive Syllabus Tag Cloud */}
                <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block">
                    Curricula & Disciplines
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Pure Math', 'Mechanics', 'Physics', 'Organic Chem', 'Computer Science'].map((tag) => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white dark:bg-black/40 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  One verified educator dedicated to one student. We identify conceptual roadblocks, break down complex derivations step by step, and tailor session pacing entirely to how the student learns best. Zero crowd distractions.
                </p>

                {/* Key Points */}
                <div className="pt-3 border-t border-zinc-100 dark:border-white/10 space-y-2">
                  {[
                    'One teacher to one student pairing with undivided attention',
                    'Personalized diagnostic roadmap targeting individual concept gaps',
                    'Direct, unhurried past-paper problem sets and exam strategy'
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-8">
                <Link
                  href="/education"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all border border-zinc-200 dark:border-white/10"
                >
                  <span>Explore 1-on-1 Student Tutoring</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </ScrollReveal>

          {/* ======================================================== */}
          {/* BOX 2: THE DARK TERMINAL WORKSPACE (FOR ENGINEERS)       */}
          {/* Style: Dark Monospace IDE, code diff, tech stack chips   */}
          {/* ======================================================== */}
          <ScrollReveal delay={160}>
            <div className="group relative flex flex-col justify-between h-full rounded-3xl p-6 sm:p-8 bg-[#0C0D12] border border-zinc-800 shadow-2xl hover:border-red-500/50 transition-all duration-300 text-left">
              
              {/* Mac Terminal Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-zinc-400">
                  nivo-cohorts --track=ai-systems
                </span>
              </div>

              <div className="space-y-5 pt-5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-red-400 uppercase tracking-widest">
                      // Professional Cohorts
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                    Modern Software & AI Systems
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1">
                    Production Fullstack, Cloud Architecture, and Practical LLM Pipelines
                  </p>
                </div>

                {/* Simulated Code Review Diff Box */}
                <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 font-mono text-[11px] space-y-1 text-zinc-300">
                  <div className="text-zinc-500 text-[10px]">// Mentor PR feedback on vector search service:</div>
                  <div className="text-red-400 line-through text-[10px]">{'- const results = await db.query(rawVector);'}</div>
                  <div className="text-emerald-400 font-semibold text-[10px]">{'+ const results = await vectorIndex.query({ topK: 5, minScore: 0.88 });'}</div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Next.js 16', 'Python', 'Rust', 'PostgreSQL', 'Vector Search', 'Redis'].map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  Engineered for developers who want to master real production systems. Build scalable microservices and get line-by-line pull request reviews from staff engineers.
                </p>

                {/* Key Points */}
                <div className="pt-3 border-t border-zinc-800/80 space-y-2">
                  {[
                    'Live mentor code reviews on real GitHub repositories',
                    'Realistic system design simulations modeled on senior rounds',
                    'Integrated Resume Studio tooling to showcase verified projects'
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-mono">
                      <span className="text-red-400 text-xs font-bold mt-0.5">&gt;</span>
                      <span className="text-[11px] leading-tight font-normal">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-8">
                <Link
                  href="/professional-courses"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono font-semibold text-white bg-red-600 hover:bg-red-700 transition-all shadow-md"
                >
                  <span>View Cohort Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </ScrollReveal>

          {/* ======================================================== */}
          {/* BOX 3: THE INSTITUTIONAL DOSSIER & PASSPORT (SCHOOLS)     */}
          {/* Style: Official SLA seal, verification scorecard, badge  */}
          {/* ======================================================== */}
          <ScrollReveal delay={240}>
            <div className="group relative flex flex-col justify-between h-full rounded-3xl p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/15 shadow-sm hover:shadow-2xl hover:border-red-500/40 transition-all duration-300 text-left">
              
              {/* Background Watermark Crest */}
              <div className="absolute top-4 right-4 text-zinc-200 dark:text-zinc-800/40 pointer-events-none select-none">
                <ShieldCheck className="w-16 h-16 opacity-30" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Header: Seal & Badge */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center font-bold border border-zinc-300 dark:border-white/10 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-900/40 block">
                      SLA Guaranteed
                    </span>
                    <span className="text-[9px] text-zinc-500 font-mono block mt-0.5">
                      48-Hour Response
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                    Verified Faculty Staffing & Audits
                  </h3>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-1">
                    Educator Recruitment, Micro-Teaching Trials, and Subject Testing
                  </p>
                </div>

                {/* Micro-UI: Candidate Vetting Audit Passport Card */}
                <div className="p-3.5 rounded-2xl bg-white dark:bg-black/50 border border-zinc-200 dark:border-white/10 space-y-2 text-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center justify-between">
                    <span>Audit Scorecard</span>
                    <span className="text-red-600 dark:text-red-400 font-mono">Top 2% Pass</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
                      <span>Live 45-Min Teaching Demo</span>
                      <span className="font-mono font-bold text-emerald-600">9.8 / 10</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
                      <span>Subject Competency Exam</span>
                      <span className="font-mono font-bold text-emerald-600">Passed</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
                      <span>Degree & Reference Audit</span>
                      <span className="font-mono font-bold text-emerald-600">Verified</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  Hiring outstanding teachers who combine subject mastery with classroom command is hard. We pre-vet every educator through live demonstration trials before introducing them to your committee.
                </p>

                {/* Key Points */}
                <div className="pt-3 border-t border-zinc-200 dark:border-white/10 space-y-2">
                  {[
                    'Pre-vetted faculty available for primary, secondary, and college terms',
                    'Demonstration scorecards provided prior to candidate interviews',
                    'Replacement guarantees if an educator match is not ideal'
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <FileCheck2 className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-8 relative z-10">
                <Link
                  href="/hr-and-recruitment"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-zinc-900 dark:text-white bg-white dark:bg-zinc-900 hover:bg-zinc-900 hover:text-white dark:hover:bg-red-600 transition-all border border-zinc-300 dark:border-white/15 shadow-xs"
                >
                  <span>Institutional Staffing Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
