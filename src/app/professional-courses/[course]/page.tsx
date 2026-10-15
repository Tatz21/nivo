import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { PROFESSIONAL_COURSES } from '@/lib/data/courses';
import { Code2, Clock, CheckCircle2, ArrowRight, ArrowLeft, BookOpen, Sparkles, Users } from 'lucide-react';

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
    title: `${item.title} — Nivó Professional Courses`,
    description: item.description,
  };
}

export default async function ProfessionalCourseDetailPage({ params }: PageProps) {
  const { course } = await params;
  const item = PROFESSIONAL_COURSES.find((c) => c.slug === course);

  if (!item) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back button */}
      <div>
        <Link href="/professional-courses" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Courses</span>
        </Link>
      </div>

      {/* Course Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-lime-300">
            {item.track}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-zinc-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{item.duration}</span>
          </span>
          <span className="text-xs text-zinc-500">•</span>
          <span className="text-xs text-zinc-400">{item.level}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {item.title}
        </h1>

        <p className="text-base text-zinc-300 leading-relaxed max-w-3xl">
          {item.description}
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Syllabus Modules & Learning Outcomes */}
        <div className="md:col-span-2 space-y-8">
          
          {/* Syllabus modules */}
          <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-bold text-white">Syllabus Breakdown</h2>
            </div>

            <div className="space-y-4">
              {item.syllabusModules.map((mod, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-white">{mod.title}</span>
                    <span className="text-[10px] text-lime-300 font-mono">{mod.week}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {mod.topics.map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-purple-950/40 text-purple-200 border border-purple-500/20 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white">Verified Outcomes</h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
              {item.learningOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Prerequisites & Application Card */}
        <div className="space-y-6">
          <div className="glass-panel rounded-3xl p-6 border border-purple-500/30 space-y-5">
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Prerequisites</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.prerequisites}</p>
            </div>

            <div className="pt-2 border-t border-white/5">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Ideal Candidates</h3>
              <ul className="space-y-1 text-xs text-zinc-300">
                {item.idealFor.map((candidate, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{candidate}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link
                href={`/contact?subject=Course%20Enquiry:%20${encodeURIComponent(item.title)}`}
                className="w-full py-2.5 rounded-xl cosmic-glow-btn text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-lg text-center"
              >
                <span>Enrol in Next Cohort</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <p className="text-[10px] text-zinc-500 text-center">
                Mentor-led live sessions with hands-on labs and capstone project defence.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
