import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Compass, Users, Sparkles, GraduationCap, Briefcase, FileText, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Nivó — Established 2020',
  description: 'Learn about Nivó’s journey since 2020: connecting exceptional educators with learners, training professionals, and empowering careers with first-party tools.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Header */}
      <ScrollReveal>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-semibold">Established 2020</span>
            <span className="text-zinc-500">•</span>
            <span>Education • Courses • Staffing • Tools</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Bridging Academic Rigour & <br />
            <span className="cosmic-gradient-text">Practical Career Readiness</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Founded in 2020, Nivó was built on a simple conviction: learning should never be a game of memorization, and talent placement should never be a lottery.
          </p>
        </div>
      </ScrollReveal>

      {/* Narrative grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollReveal delay={100} className="space-y-6 text-sm text-zinc-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white tracking-tight">Our Mission & Origins</h2>
          <p>
            When Nivó began operations in 2020, we observed two persistent disconnects. Students were spending thousands of hours preparing for school and university examinations without grasping underlying first principles. Concurrently, institutions struggled to recruit genuine educators who possessed both subject mastery and empathetic teaching techniques.
          </p>
          <p>
            To address this, we unified four complementary disciplines under one umbrella:
          </p>
          <ul className="space-y-3 pt-1">
            <li className="flex items-start gap-2.5">
              <GraduationCap className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
              <span><strong>Tailored Academic Tutoring:</strong> From foundational kindergarten through 12th standard and university undergraduate degrees.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Briefcase className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span><strong>Professional Skill Cohorts:</strong> Industry-standard training in software engineering, applied artificial intelligence, and product design.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Users className="w-4 h-4 text-lime-300 shrink-0 mt-0.5" />
              <span><strong>Institutional Staffing:</strong> Vetted school teacher recruitment, college faculty placement, and corporate training contracts.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <FileText className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Resume Studio:</strong> A first-party ATS resume application built for clean typesetting and selectable vector PDF export.</span>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="glass-panel rounded-3xl p-8 border border-violet-500/20 bg-gradient-to-br from-[#19172B] to-[#11111B] space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-lime-300" />
              <span>Our Non-Negotiable Standards</span>
            </h3>

            <div className="space-y-4 text-xs text-zinc-300 leading-relaxed">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="font-bold text-white">Truthful Publishing</div>
                <p className="text-zinc-400">
                  We state facts. We have operated since 2020. We never publish fake student counts, invented placement percentages, or staged testimonials.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="font-bold text-white">Pedagogical Trial Reviews</div>
                <p className="text-zinc-400">
                  Every faculty member undergoes mandatory demonstration teaching trials and reference validation before entering our talent pool.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="font-bold text-white">Privacy by Default</div>
                <p className="text-zinc-400">
                  We don’t monetize user data or force mandatory visitor account creation. Resumes created with Resume Studio are cryptographically secured.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* CTA section */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-white/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Explore with Nivó?</h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
          Whether you need personalized academic support, are upskilling for a career leap, or are staffing an educational institution.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/education"
            className="px-6 py-3 rounded-xl cosmic-glow-btn text-white font-semibold text-xs flex items-center gap-2"
          >
            <span>Explore Education</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/resume-studio"
            className="px-6 py-3 rounded-xl glass-panel hover:bg-white/10 text-white font-medium text-xs flex items-center gap-2"
          >
            <span>Open Resume Studio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
