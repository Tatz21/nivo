import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Briefcase, Users, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { EDUCATION_SERVICES } from '@/lib/data/services';
import { PROFESSIONAL_COURSES } from '@/lib/data/courses';
import { RECRUITMENT_SERVICES } from '@/lib/data/recruitment';
import ScrollReveal from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Services Directory | Education, Courses, Recruitment & Resume Studio',
  description: 'Explore the full spectrum of services provided by Nivó: foundational tutoring, university mentorship, professional courses, educator recruitment, and our ATS Resume Studio.',
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Header */}
      <ScrollReveal>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
            <Briefcase className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
            <span className="font-semibold text-zinc-900 dark:text-white">Comprehensive Offerings</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
            Our Services & <br />
            <span className="text-red-600 dark:text-red-500">Academic Disciplines</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Nivó provides tailored solutions across foundational learning, professional technology courses, institutional educator recruitment, and career tooling.
          </p>
        </div>
      </ScrollReveal>

      {/* Pillar 1: Education */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">Dedicated 1-on-1 Academic Tutoring</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Private one-to-one student coaching for K-12, Cambridge, IB, and university STEM</p>
            </div>
          </div>
          <Link href="/education" className="text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_SERVICES.map((s) => (
            <div key={s.slug} className="card-surface rounded-2xl p-6 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-semibold text-red-600 dark:text-red-400 uppercase tracking-widest">{s.category}</span>
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white">{s.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.description}</p>
                
                <ul className="space-y-1.5 pt-2 text-xs text-zinc-700 dark:text-zinc-300">
                  {s.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-red-600 dark:text-red-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">{s.modes[0]}</span>
                <Link href={`/education/${s.slug}`} className="text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pillar 2: Professional Courses */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 shadow-sm">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">Professional Courses</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Intensive cohort programs in engineering, AI, and design</p>
            </div>
          </div>
          <Link href="/professional-courses" className="text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFESSIONAL_COURSES.map((c) => (
            <div key={c.slug} className="card-surface rounded-2xl p-6 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-semibold text-red-600 dark:text-red-400 uppercase tracking-widest">{c.track}</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400">{c.duration}</span>
                </div>
                <h3 className="text-base font-bold text-zinc-950 dark:text-white">{c.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{c.subtitle}</p>
                <div className="pt-2 text-xs text-zinc-800 dark:text-zinc-200 font-semibold">Outcomes:</div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">{c.learningOutcomes[0]}</p>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">{c.level}</span>
                <Link href={`/professional-courses/${c.slug}`} className="text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1">
                  <span>Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pillar 3: HR & Recruitment */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">HR & Educator Recruitment</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Institutional staffing for schools, universities, and training institutes</p>
            </div>
          </div>
          <Link href="/hr-and-recruitment" className="text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RECRUITMENT_SERVICES.map((r) => (
            <div key={r.slug} className="card-surface rounded-2xl p-6 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white">{r.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{r.description}</p>
                <div className="pt-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">Target Roles:</div>
                <div className="flex flex-wrap gap-1.5">
                  {r.targetRoleTypes.slice(0, 3).map((role, i) => (
                    <span key={i} className="text-[10px] bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5 px-2 py-0.5 rounded">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500 font-medium">Verified Vetting</span>
                <Link href={`/hr-and-recruitment/${r.slug}`} className="text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1">
                  <span>Staffing Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pillar 4: Resume Studio */}
      <div className="card-surface rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>First-Party Tooling</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">Nivó Resume Studio</h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Create, import, and export ATS-optimized text-based resumes in 4 templates. Secured by cryptographic access keys with no mandatory visitor login.
          </p>
        </div>
        <Link
          href="/resume-studio"
          className="brand-primary-btn px-6 py-3.5 rounded-xl text-xs gap-2 shrink-0"
        >
          <span>Launch Application</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
