import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Users, Award, ShieldCheck, ArrowRight, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { RECRUITMENT_SERVICES } from '@/lib/data/recruitment';
import ScrollReveal from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'HR & Educator Recruitment — Nivó',
  description: 'Rigorous talent acquisition for schools, colleges, training bootcamps, and corporate enterprises. Verified teachers, lecturers, and technical instructors.',
};

export default function HRAndRecruitmentPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <ScrollReveal>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-950/60 border border-lime-500/30 text-xs text-lime-300">
            <Users className="w-3.5 h-3.5" />
            <span className="font-semibold">Pillar III</span>
            <span className="text-zinc-500">•</span>
            <span>Institutional Recruitment & Staffing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Exceptional Educators. <br />
            <span className="cosmic-gradient-text">Verified Industry Practitioners.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Finding genuine teaching talent requires more than scanning CVs. Since 2020, Nivó has partnered with educational institutions and enterprises to supply vetted, demonstrated educators.
          </p>
        </div>
      </ScrollReveal>

      {/* Grid of Recruitment Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RECRUITMENT_SERVICES.map((serv, idx) => (
          <ScrollReveal key={serv.slug} delay={idx * 100}>
            <div className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-lime-500/40 transition-all flex flex-col justify-between h-full group">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white group-hover:text-lime-300 transition-colors">
                  {serv.title}
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {serv.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-zinc-300">Target Roles:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {serv.targetRoleTypes.map((role, i) => (
                      <span key={i} className="text-[11px] bg-white/5 border border-white/10 text-zinc-300 px-2.5 py-1 rounded-lg">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-zinc-300">Vetting Process:</div>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {serv.vettingProcess.slice(0, 3).map((proc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                        <span>{proc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={`/contact?subject=Staffing%20Enquiry:%20${encodeURIComponent(serv.title)}`}
                  className="text-xs text-zinc-400 hover:text-white"
                >
                  Hire Talent
                </Link>

                <Link
                  href={`/hr-and-recruitment/${serv.slug}`}
                  className="px-4 py-2 rounded-xl bg-lime-400/20 hover:bg-lime-400 text-lime-300 hover:text-black text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Staffing Protocols</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

    </div>
  );
}
