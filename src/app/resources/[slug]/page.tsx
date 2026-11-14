import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { RESOURCE_ARTICLES } from '@/lib/data/resources';
import { Clock, ArrowLeft, ArrowRight, User, BookOpen, Share2 } from 'lucide-react';

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
    title: `${article.title}: Nivó Resources`,
    description: article.summary,
  };
}

async function ArticleView({ params }: PageProps) {
  const { slug } = await params;
  const article = RESOURCE_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Find related articles (excluding the current one)
  const relatedArticles = RESOURCE_ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back button */}
      <div>
        <Link 
          href="/resources" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Resources</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-zinc-200 dark:border-white/10 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 font-semibold uppercase tracking-wider text-[11px]">
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

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal pt-1">
          {article.summary}
        </p>

        {/* Author Bio Pill */}
        <div className="flex items-center gap-3 text-xs text-zinc-700 dark:text-zinc-300 pt-3">
          <div className="w-8 h-8 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 font-bold flex items-center justify-center border border-red-500/20">
            <User className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-zinc-950 dark:text-white">{article.author}</div>
            <div className="text-[11px] text-zinc-500">{article.authorRole}</div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed space-y-5">
        {article.content.split('\n\n').map((paragraph, idx) => {
          const trimmed = paragraph.trim();
          if (!trimmed) return null;
          if (trimmed.startsWith('### ')) {
            return (
              <h3 key={idx} className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white pt-6 pb-1 tracking-tight">
                {trimmed.replace('### ', '')}
              </h3>
            );
          }
          return (
            <p key={idx} className="leading-relaxed">
              {trimmed}
            </p>
          );
        })}
      </div>

      {/* Author Signoff & Advisory Box */}
      <div className="card-surface rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>About the Author & Advisory Desk</span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {article.author} is part of the Nivó academic and technical faculty. Nivó has been operating continuously since 2020, connecting learners with specialized tutors, training engineers in modern software, and staffing certified educators for partner institutions.
        </p>
      </div>

      {/* Related Reading Grid */}
      <div className="pt-6 border-t border-zinc-200 dark:border-white/10 space-y-6">
        <h3 className="text-lg font-bold text-zinc-950 dark:text-white">Related Guides & Analysis</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedArticles.map((rel) => (
            <div key={rel.slug} className="card-surface rounded-2xl p-6 flex flex-col justify-between group hover:border-red-500/40 transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <span className="text-zinc-400 text-xs font-mono">{rel.readTime}</span>
                </div>
                <h4 className="font-bold text-sm text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                  {rel.title}
                </h4>
                <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                  {rel.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-white/10">
                <Link
                  href={`/resources/${rel.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="card-surface rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-zinc-200 dark:border-white/10">
        <div>
          <h3 className="text-lg font-bold text-zinc-950 dark:text-white">Optimize Your Resume Today</h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Apply these ATS standards using our first-party Resume Studio tool.
          </p>
        </div>
        <Link
          href="/resume-studio"
          className="brand-primary-btn !py-2.5 !px-5 !text-xs inline-flex items-center gap-2 shrink-0"
        >
          <span>Launch Resume Studio</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}

export default function ResourceDetailPage(props: PageProps) {
  return (
    <React.Suspense fallback={<div className="pt-32 pb-24 max-w-4xl mx-auto px-4 text-center text-zinc-500">Loading guide...</div>}>
      <ArticleView {...props} />
    </React.Suspense>
  );
}
