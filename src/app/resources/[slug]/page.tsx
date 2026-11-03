import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { RESOURCE_ARTICLES } from '@/lib/data/resources';
import { Clock, ArrowLeft, ArrowRight, User } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RESOURCE_ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = RESOURCE_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} — Nivó Resources`,
    description: article.summary,
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = RESOURCE_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back button */}
      <div>
        <Link href="/resources" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Resources</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-zinc-200 dark:border-white/10 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 font-semibold uppercase tracking-wider">
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </span>
          <span className="text-zinc-300 dark:text-zinc-600">•</span>
          <span className="text-zinc-500 dark:text-zinc-400">{article.publishedDate}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 pt-2">
          <User className="w-4 h-4 text-red-600 dark:text-red-500" />
          <span>By {article.author}</span>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed space-y-4">
        {article.content.split('\n\n').map((paragraph, idx) => {
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={idx} className="text-xl font-bold text-zinc-950 dark:text-white pt-4 pb-1">
                {paragraph.replace('### ', '')}
              </h3>
            );
          }
          return (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="card-surface rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-zinc-950 dark:text-white">Optimize Your Resume Today</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Apply these ATS standards using our first-party Resume Studio tool.
          </p>
        </div>
        <Link
          href="/resume-studio"
          className="brand-primary-btn !py-2.5 !px-5 !text-xs inline-flex items-center gap-2 shrink-0"
        >
          <span>Launch Studio</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
