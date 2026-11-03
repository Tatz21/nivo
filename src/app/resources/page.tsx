import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span className="font-semibold">Insights & Guides</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
            Knowledge for Learners, <br />
            <span className="text-red-600 dark:text-red-500">Job Seekers & Institutions</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Curated analysis from our academic mentors, technical instructors, and recruitment advisory team.
          </p>
        </div>
      </ScrollReveal>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RESOURCE_ARTICLES.map((art, idx) => (
          <ScrollReveal key={art.slug} delay={idx * 100}>
            <div className="card-surface rounded-2xl p-7 flex flex-col justify-between h-full group hover:border-red-600/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-red-600 dark:text-red-400 uppercase tracking-widest">{art.category}</span>
                  <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{art.publishedDate}</span>
                <Link
                  href={`/resources/${art.slug}`}
                  className="flex items-center gap-1 text-xs font-semibold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors"
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
