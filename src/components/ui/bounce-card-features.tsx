'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Code2, Users, FileText, Sparkles, CheckCircle2, Award, ArrowRight } from 'lucide-react';

interface BounceCardProps {
  className?: string;
  children: React.ReactNode;
}

export const BounceCard = ({ className = '', children }: BounceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 0.98, rotate: '-0.5deg' }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className={`group relative min-h-[340px] sm:min-h-[380px] cursor-pointer overflow-hidden rounded-3xl bg-slate-100/90 dark:bg-[#161526]/90 border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 backdrop-blur-xl transition-shadow duration-300 hover:shadow-2xl dark:hover:shadow-violet-950/40 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const CardTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => {
  return (
    <div className="relative z-20 mb-4">
      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {children}
      </h3>
      {subtitle && (
        <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 line-clamp-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

/**
 * BouncyCardsFeatures:
 * Integrates the Bouncy Card design system directly into Nivó's Core Service Pillars:
 * 1. Pillar I (Academic Tuition & Mentorship)
 * 2. Pillar II (Professional Cohorts & Tech Training)
 * 3. Pillar III (Corporate & Institutional HR Staffing)
 * 4. Pillar IV (Resume Studio & Career Tools)
 */
export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-slate-800 dark:text-zinc-100">
      {/* Header bar */}
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:px-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/70 border border-violet-300 dark:border-violet-500/30 text-xs font-bold text-violet-800 dark:text-lime-300 tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-lime-300" />
            <span>Nivó Service Infrastructure</span>
          </div>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            Transforming learning & hiring with our{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-lime-300">
              all-in-one ecosystem
            </span>
          </h2>
        </div>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-slate-900 dark:bg-white px-5 py-3 text-sm font-bold text-white dark:text-zinc-950 shadow-xl transition-colors hover:bg-slate-700 dark:hover:bg-zinc-200"
          >
            <span>Partner With Nivó</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>

      {/* Row 1: 4-col + 8-col */}
      <div className="mb-6 grid grid-cols-12 gap-6">
        
        {/* Card 1: Academic Mentorship (4-col) */}
        <Link href="/education" className="col-span-12 md:col-span-4 block">
          <BounceCard className="h-full">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-violet-600/10 dark:bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-600 dark:text-violet-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-violet-600 dark:text-lime-300">
                Pillar I
              </span>
            </div>
            <CardTitle subtitle="K-12, university tuition, foreign languages & competitive exam coaching.">
              Academic Education
            </CardTitle>
            
            {/* Interactive Feature Demo Card */}
            <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-10 rounded-t-3xl overflow-hidden bg-gradient-to-br from-violet-500 via-indigo-600 to-purple-700 p-5 shadow-2xl transition-transform duration-[300ms] group-hover:translate-y-4 group-hover:rotate-[1.5deg]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                alt="Students studying together"
                className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
              />
              <div className="relative z-10 flex flex-col justify-between h-full text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md">
                    Verified Tutors
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="space-y-1.5 pb-8">
                  <div className="text-sm font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Personalized 1:1 Diagnostic Sessions</span>
                  </div>
                  <div className="text-xs text-violet-100">
                    Home tuition & online hybrid interactive cohorts.
                  </div>
                </div>
              </div>
            </div>
          </BounceCard>
        </Link>

        {/* Card 2: Professional Courses & Tech Skilling (8-col) */}
        <Link href="/professional-courses" className="col-span-12 md:col-span-8 block">
          <BounceCard className="h-full">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-300">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-300">
                Pillar II
              </span>
            </div>
            <CardTitle subtitle="Full-stack engineering, applied machine learning, UI/UX systems & creative media bootcamps.">
              Professional Courses & Tech Skilling
            </CardTitle>

            {/* Interactive Feature Demo Card */}
            <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-10 rounded-t-3xl overflow-hidden bg-gradient-to-br from-amber-500 via-orange-600 to-rose-600 p-6 shadow-2xl transition-transform duration-[300ms] group-hover:translate-y-4 group-hover:rotate-[-1deg]">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
                alt="Programming and tech labs"
                className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
              />
              <div className="relative z-10 flex flex-col justify-between h-full text-white">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/20 backdrop-blur-md">
                      Live Hands-on Labs
                    </span>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md">
                      Industry Mentors
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-8">
                  <div className="bg-black/25 backdrop-blur-md rounded-xl p-3 border border-white/10">
                    <div className="text-[11px] text-amber-200 font-semibold">Full-Stack</div>
                    <div className="text-sm font-bold">16 Wks Cohort</div>
                  </div>
                  <div className="bg-black/25 backdrop-blur-md rounded-xl p-3 border border-white/10">
                    <div className="text-[11px] text-amber-200 font-semibold">Applied AI / ML</div>
                    <div className="text-sm font-bold">14 Wks Cohort</div>
                  </div>
                  <div className="bg-black/25 backdrop-blur-md rounded-xl p-3 border border-white/10">
                    <div className="text-[11px] text-amber-200 font-semibold">Product UI/UX</div>
                    <div className="text-sm font-bold">12 Wks Cohort</div>
                  </div>
                </div>
              </div>
            </div>
          </BounceCard>
        </Link>
      </div>

      {/* Row 2: 8-col + 4-col */}
      <div className="grid grid-cols-12 gap-6">

        {/* Card 3: Institutional HR & Staffing (8-col) */}
        <Link href="/hr-and-recruitment" className="col-span-12 md:col-span-8 block">
          <BounceCard className="h-full">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-300">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-emerald-600 dark:text-lime-300">
                Pillar III
              </span>
            </div>
            <CardTitle subtitle="Supplying schools, colleges, ed-tech enterprises and corporations with vetted teachers & tech talent.">
              Corporate HR & Educational Recruitment
            </CardTitle>

            {/* Interactive Feature Demo Card */}
            <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-10 rounded-t-3xl overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 p-6 shadow-2xl transition-transform duration-[300ms] group-hover:translate-y-4 group-hover:rotate-[1deg]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Recruitment and interview teamwork"
                className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
              />
              <div className="relative z-10 flex flex-col justify-between h-full text-white">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/20 backdrop-blur-md">
                      Institutional Mandates
                    </span>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md">
                      Rigorous Background Checks
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-8">
                  <div className="bg-black/25 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-300 shrink-0" />
                    <div>
                      <div className="text-[10px] text-emerald-200">School Faculty</div>
                      <div className="text-xs font-bold">K-12 & Pre-Primary</div>
                    </div>
                  </div>
                  <div className="bg-black/25 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-300 shrink-0" />
                    <div>
                      <div className="text-[10px] text-emerald-200">Higher Education</div>
                      <div className="text-xs font-bold">College Lecturers</div>
                    </div>
                  </div>
                  <div className="bg-black/25 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-300 shrink-0" />
                    <div>
                      <div className="text-[10px] text-emerald-200">Tech Bootcamps</div>
                      <div className="text-xs font-bold">Industry Trainers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BounceCard>
        </Link>

        {/* Card 4: Resume Studio (4-col) */}
        <Link href="/resume-studio" className="col-span-12 md:col-span-4 block">
          <BounceCard className="h-full">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 dark:bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-600 dark:text-pink-300">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-pink-600 dark:text-pink-300">
                Pillar IV
              </span>
            </div>
            <CardTitle subtitle="ATS score engine, LaTeX typography & automated career engineering tools.">
              Resume Studio
            </CardTitle>

            {/* Interactive Feature Demo Card */}
            <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-10 rounded-t-3xl overflow-hidden bg-gradient-to-br from-pink-500 via-rose-600 to-purple-700 p-5 shadow-2xl transition-transform duration-[300ms] group-hover:translate-y-4 group-hover:rotate-[-1.5deg]">
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
                alt="Resume and documents review"
                className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
              />
              <div className="relative z-10 flex flex-col justify-between h-full text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md">
                    Instant ATS Score
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="space-y-1.5 pb-8">
                  <div className="text-sm font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Free Exportable PDF Templates</span>
                  </div>
                  <div className="text-xs text-pink-100">
                    Industry vetted layout formats optimized for recruiters.
                  </div>
                </div>
              </div>
            </div>
          </BounceCard>
        </Link>

      </div>
    </section>
  );
};
