import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Briefcase, Users, FileText, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { EDUCATION_SERVICES } from '@/lib/data/services';
import { PROFESSIONAL_COURSES } from '@/lib/data/courses';
import { RECRUITMENT_SERVICES } from '@/lib/data/recruitment';
import ScrollReveal from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Services Directory — Education, Courses, Recruitment & Resume Studio',
  description: 'Explore the full spectrum of services provided by Nivó: foundational tutoring, university mentorship, professional courses, educator recruitment, and our ATS Resume Studio.',
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Header */}
      <ScrollReveal>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-semibold">Comprehensive Offerings</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our Services & <br />
            <span className="cosmic-gradient-text">Academic Disciplines</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Nivó provides tailored solutions across foundational learning, professional technology courses, institutional educator recruitment, and career tooling.
          </p>
        </div>
      </ScrollReveal>

      {/* Pillar 1: Education */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Education & Training</h2>
              <p className="text-xs text-zinc-400">Kindergarten to university subject coaching and exam prep</p>
            </div>
          </div>
          <Link href="/education" className="text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_SERVICES.map((s) => (
            <div key={s.slug} className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-semibold text-lime-300 uppercase tracking-widest">{s.category}</span>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{s.description}</p>
                
                <ul className="space-y-1.5 pt-2 text-xs text-zinc-300">
                  {s.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-lime-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">{s.modes[0]}</span>
                <Link href={`/education/${s.slug}`} className="text-xs font-semibold text-white hover:text-violet-300 flex items-center gap-1">
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
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Professional Courses</h2>
              <p className="text-xs text-zinc-400">Intensive cohort programs in engineering, AI, and design</p>
            </div>
          </div>
          <Link href="/professional-courses" className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFESSIONAL_COURSES.map((c) => (
            <div key={c.slug} className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-semibold text-purple-300 uppercase tracking-widest">{c.track}</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-400">{c.duration}</span>
                </div>
                <h3 className="text-base font-bold text-white">{c.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{c.subtitle}</p>
                <div className="pt-2 text-xs text-zinc-300 font-medium">Outcomes:</div>
                <p className="text-xs text-zinc-400">{c.learningOutcomes[0]}</p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">{c.level}</span>
                <Link href={`/professional-courses/${c.slug}`} className="text-xs font-semibold text-white hover:text-purple-300 flex items-center gap-1">
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
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-lime-400/20 text-lime-300 border border-lime-400/30">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">HR & Educator Recruitment</h2>
              <p className="text-xs text-zinc-400">Institutional staffing for schools, universities, and training institutes</p>
            </div>
          </div>
          <Link href="/hr-and-recruitment" className="text-xs font-semibold text-lime-300 hover:text-lime-200 flex items-center gap-1">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RECRUITMENT_SERVICES.map((r) => (
            <div key={r.slug} className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-lime-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">{r.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{r.description}</p>
                <div className="pt-2 text-xs font-semibold text-zinc-300">Target Roles:</div>
                <div className="flex flex-wrap gap-1.5">
                  {r.targetRoleTypes.slice(0, 3).map((role, i) => (
                    <span key={i} className="text-[10px] bg-white/5 text-zinc-300 px-2 py-0.5 rounded">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-lime-400">Verified Vetting</span>
                <Link href={`/hr-and-recruitment/${r.slug}`} className="text-xs font-semibold text-white hover:text-lime-300 flex items-center gap-1">
                  <span>Staffing Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pillar 4: Resume Studio */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-violet-500/30 bg-gradient-to-br from-[#19172B] to-[#11111B] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs text-lime-300 font-semibold uppercase">
            <FileText className="w-4 h-4" />
            <span>First-Party Tooling</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Nivó Resume Studio</h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Create, import, and export ATS-optimized text-based resumes in 4 templates. Secured by cryptographic access keys with no mandatory visitor login.
          </p>
        </div>
        <Link
          href="/resume-studio"
          className="px-6 py-3.5 rounded-xl cosmic-glow-btn text-white font-semibold text-xs flex items-center gap-2 shrink-0"
        >
          <span>Launch Application</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
