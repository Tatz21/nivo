import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { RESOURCE_ARTICLES } from '@/lib/data/resources';
import ScrollReveal from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Learning & Career Resources — Nivó',
  description: 'Guides and insights on ATS-compliant resumes, first-principles academic learning, and institutional educator hiring.',
};

export default function ResourcesPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <ScrollReveal>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300">
            <BookOpen className="w-3.5 h-3.5" />
            <span className="font-semibold">Insights & Guides</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Knowledge for Learners, <br />
            <span className="cosmic-gradient-text">Job Seekers & Institutions</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Curated analysis from our academic mentors, technical instructors, and recruitment advisory team.
          </p>
        </div>
      </ScrollReveal>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RESOURCE_ARTICLES.map((art, idx) => (
          <ScrollReveal key={art.slug} delay={idx * 100}>
            <div className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-violet-500/40 transition-all flex flex-col justify-between h-full group">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-lime-300 uppercase tracking-widest">{art.category}</span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">{art.publishedDate}</span>
                <Link
                  href={`/resources/${art.slug}`}
                  className="flex items-center gap-1 text-xs font-semibold text-white group-hover:text-violet-300 transition-colors"
                >
                  <span>Read Article</span>
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
