'use client';

import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Code2, 
  Users, 
  FileText, 
  CheckCircle2, 
  Award, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Bar */}
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs font-semibold text-zinc-700 dark:text-zinc-300 tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
            <span>Nivó Service Architecture</span>
          </div>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl text-zinc-950 dark:text-white">
            Four Core Pillars of{' '}
            <span className="text-red-600 dark:text-red-500">
              Excellence & Growth
            </span>
          </h2>
        </div>
        <Link href="/contact">
          <button className="brand-primary-btn px-6 py-3 rounded-xl text-sm font-semibold shadow-md gap-2">
            <span>Direct Advisory Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>

      {/* 4 Pillars Grid (2x2 on desktop, clean architectural layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Pillar I: Academic Education */}
        <div className="card-surface rounded-3xl p-8 flex flex-col justify-between group hover:border-red-500/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 flex items-center justify-center text-red-600 dark:text-red-400 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                Pillar I
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                Academic Education & Mentorship
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Personalized 1-on-1 tuition from primary grades through university. Tailored instruction for Cambridge, IB, CBSE, ICSE, and competitive examinations.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Concept-first diagnostic loops and customized problem sets</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Available via global interactive online classrooms & select home tuition</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-6 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500">Established 2020</span>
            <Link
              href="/education"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
            >
              <span>Explore Curriculum</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Pillar II: Professional Courses */}
        <div className="card-surface rounded-3xl p-8 flex flex-col justify-between group hover:border-red-500/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white shadow-sm">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                Pillar II
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                Professional Skill Cohorts
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Rigorous cohort-based programs for developers and career changers. Specialize in full-stack engineering, applied artificial intelligence, and modern system design.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Real-world production codebases, vector databases, and cloud deployments</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Direct mentorship from practicing staff architects and engineers</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-6 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500">Live & Hands-On</span>
            <Link
              href="/professional-courses"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
            >
              <span>View Course Tracks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Pillar III: HR & Educator Recruitment */}
        <div className="card-surface rounded-3xl p-8 flex flex-col justify-between group hover:border-red-500/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                Pillar III
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                Educator Recruitment & Staffing
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Strategic talent partner for premier K-12 schools, higher education institutions, and technical academies. We source, vet, and place verified educators.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Multi-stage credential validation and mandatory mock-teaching evaluations</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Full-time faculty placement, visiting lecturers, and corporate training</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-6 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500">Institutional Partner</span>
            <Link
              href="/hr-and-recruitment"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
            >
              <span>Staffing Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Pillar IV: Resume Studio */}
        <div className="card-surface rounded-3xl p-8 flex flex-col justify-between group hover:border-red-500/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 flex items-center justify-center text-red-600 dark:text-red-400 shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                Pillar IV
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                Nivó Resume Studio
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                First-party ATS-engineered resume tool. Import existing PDF/DOCX files, customize typography across 4 curated templates, and export genuine vector PDFs.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Zero account friction: secured with high-entropy cryptographic keys</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Clean selectable text vectors; never image captures or public scraping</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-6 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500">First-Party Tooling</span>
            <Link
              href="/resume-studio"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
            >
              <span>Build Your Resume</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
