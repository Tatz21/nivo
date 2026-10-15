import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, BookOpen, CheckCircle2, ArrowRight, Sparkles, MapPin, Monitor } from 'lucide-react';
import { EDUCATION_SERVICES } from '@/lib/data/services';
import ScrollReveal from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Education & Training Programs — Nivó',
  description: 'Personalized academic coaching from Kindergarten through 12th grade, college degree subject support, foreign languages, creative arts, and competitive exams.',
};

export default function EducationPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <ScrollReveal>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span className="font-semibold">Pillar I</span>
            <span className="text-zinc-500">•</span>
            <span>Education & Academic Mentorship</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Nurturing Curiosity. <br />
            <span className="cosmic-gradient-text">Mastering Concepts.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Our education division pairs learners with vetted, passionate educators. We provide structured instruction built on analytical understanding, active inquiry, and patient diagnostic support.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-2">
            <div className="flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-violet-400" />
              <span>Interactive Live Online (Global)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-lime-400" />
              <span>Home Tuition (Select Operational Zones)</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid of 4 Education Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION_SERVICES.map((s, index) => (
          <ScrollReveal key={s.slug} delay={index * 100}>
            <div className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-violet-500/40 transition-all flex flex-col justify-between h-full group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-lime-300 uppercase tracking-widest">{s.category}</span>
                  <span className="text-[11px] text-zinc-500">{s.modes[0]}</span>
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {s.title}
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {s.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-zinc-300">Core Highlights:</div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] text-zinc-500">Audience: {s.audience.join(', ')}</span>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={`/contact?subject=Education%20Enquiry:%20${encodeURIComponent(s.title)}`}
                  className="text-xs text-zinc-400 hover:text-white"
                >
                  Direct Enquiry
                </Link>

                <Link
                  href={`/education/${s.slug}`}
                  className="px-4 py-2 rounded-xl bg-violet-600/30 hover:bg-violet-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Detailed Curriculum</span>
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
