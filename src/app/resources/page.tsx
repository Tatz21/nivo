import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, User, Sparkles, Compass } from 'lucide-react';
import { RESOURCE_ARTICLES } from '@/lib/data/resources';
import ScrollReveal from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Learning & Career Resources: Nivó',
  description: 'Practical guides and insights on first-principles academic learning, ATS-proof resume architecture, senior engineering, and educator hiring.',
};

export default function ResourcesPage() {
  const featuredArticle = RESOURCE_ARTICLES[0];
  const regularArticles = RESOURCE_ARTICLES.slice(1);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <ScrollReveal>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Nivó Knowledge Base</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
            Practical Guides for Learners, <br />
            <span className="text-red-600 dark:text-red-500">Engineers, and School Leaders</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Written directly by our academic mentors, technical instructors, and recruitment advisory panel. No generic filler or AI summaries, just practical advice gained from years in the classroom and engineering teams.
          </p>
        </div>
      </ScrollReveal>

      {/* Featured Guide Banner */}
      <ScrollReveal delay={80}>
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden card-surface border border-zinc-200 dark:border-white/10 shadow-xl group hover:border-red-500/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white font-bold uppercase tracking-wider text-[10px]">
                Featured Guide
              </span>
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                {featuredArticle.category}
              </span>
              <span className="text-zinc-400">•</span>
              <span className="flex items-center gap-1 text-zinc-500">
                <Clock className="w-3.5 h-3.5" />
                <span>{featuredArticle.readTime}</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
              <Link href={`/resources/${featuredArticle.slug}`}>
                {featuredArticle.title}
              </Link>
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {featuredArticle.summary}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <User className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                <span className="font-medium">{featuredArticle.author} ({featuredArticle.authorRole})</span>
              </div>

              <Link
                href={`/resources/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors"
              >
                <span>Read Full Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid of Remaining Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularArticles.map((art, idx) => (
          <ScrollReveal key={art.slug} delay={idx * 80}>
            <div className="card-surface rounded-3xl p-7 flex flex-col justify-between h-full group hover:border-red-600/40 hover:shadow-2xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-red-600 dark:text-red-400 uppercase tracking-wider text-[11px]">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-xs font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors leading-snug">
                  <Link href={`/resources/${art.slug}`}>
                    {art.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-[11px]">
                  <User className="w-3 h-3 text-red-600" />
                  <span className="truncate max-w-[150px]">{art.author}</span>
                </div>
                
                <Link
                  href={`/resources/${art.slug}`}
                  className="flex items-center gap-1 font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom Consultation Reassurance */}
      <ScrollReveal delay={200}>
        <div className="card-surface rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-zinc-200 dark:border-white/10">
          <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">
            Looking for Guidance on a Specific Syllabus or Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Our academic advisors and technical leads are available for free 15-minute consultations to review student diagnostic needs or institutional staffing requirements.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="brand-primary-btn !py-3 !px-6 !text-xs inline-flex items-center gap-2"
            >
              <span>Connect With an Academic Advisor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
