import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { PROFESSIONAL_COURSES } from '@/lib/data/courses';
import { Code2, Clock, CheckCircle2, ArrowRight, ArrowLeft, BookOpen, Users } from 'lucide-react';

interface PageProps {
  params: Promise<{ course: string }>;
}

export async function generateStaticParams() {
  return PROFESSIONAL_COURSES.map((c) => ({
    course: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { course } = await params;
  const item = PROFESSIONAL_COURSES.find((c) => c.slug === course);
  if (!item) return { title: 'Course Not Found' };

  return {
    title: `${item.title} | Nivó Professional Courses`,
    description: item.description,
  };
}

async function ProfessionalCourseContentView({ params }: PageProps) {
  const { course } = await params;
  const item = PROFESSIONAL_COURSES.find((c) => c.slug === course);

  if (!item) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back button */}
      <div>
        <Link href="/professional-courses" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Courses</span>
        </Link>
      </div>

      {/* Course Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-xs font-semibold text-red-600 dark:text-red-400">
            {item.track}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-zinc-500">
            <Clock className="w-3.5 h-3.5" />
            <span>{item.duration}</span>
          </span>
          <span className="text-xs text-zinc-400">•</span>
          <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">{item.level}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
          {item.title}
        </h1>

        <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
          {item.description}
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Syllabus Modules & Learning Outcomes */}
        <div className="md:col-span-2 space-y-8">
          
          {/* Syllabus modules */}
          <div className="card-surface rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-red-600 dark:text-red-400" />
              <h2 className="text-lg font-bold text-zinc-950 dark:text-white">Syllabus Breakdown</h2>
            </div>

            <div className="space-y-4">
              {item.syllabusModules.map((mod, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/5 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-zinc-950 dark:text-white">{mod.title}</span>
                    <span className="text-[10px] text-red-600 dark:text-red-400 font-mono font-medium">{mod.week}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {mod.topics.map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="card-surface rounded-3xl p-8 space-y-4">
            <h2 className="text-lg font-bold text-zinc-950 dark:text-white">Verified Outcomes</h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              {item.learningOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Prerequisites & Application Card */}
        <div className="space-y-6">
          <div className="card-surface rounded-3xl p-6 space-y-5">
            <div>
              <h3 className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider mb-1">Prerequisites</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.prerequisites}</p>
            </div>

            <div className="pt-2 border-t border-zinc-200 dark:border-white/10">
              <h3 className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider mb-2">Ideal Candidates</h3>
              <ul className="space-y-1 text-xs text-zinc-700 dark:text-zinc-300">
                {item.idealFor.map((candidate, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span>{candidate}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-white/10 space-y-3">
              <Link
                href={`/contact?subject=Course%20Enquiry:%20${encodeURIComponent(item.title)}`}
                className="w-full py-2.5 rounded-xl brand-primary-btn text-xs gap-1.5 shadow-md text-center"
              >
                <span>Enrol in Cohort</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <p className="text-[10px] text-zinc-500 text-center">
                Operating since 2020. Cohort spots limited to maintain mentor ratio.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default function ProfessionalCourseDetailPage(props: PageProps) {
  return (
    <React.Suspense fallback={<div className="pt-32 pb-24 max-w-5xl mx-auto px-4 text-center text-zinc-500">Loading course curriculum...</div>}>
      <ProfessionalCourseContentView {...props} />
    </React.Suspense>
  );
}
