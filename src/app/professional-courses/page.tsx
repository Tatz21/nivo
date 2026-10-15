import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Code2, Brain, Palette, Video, BarChart3, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { PROFESSIONAL_COURSES } from '@/lib/data/courses';
import ScrollReveal from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Professional Cohort Courses — Software, AI, Design & Media',
  description: 'Mentor-led intensive technical courses covering Full-Stack Software Engineering, Applied AI & Machine Learning, UI/UX Product Design, and Creative Media.',
};

export default function ProfessionalCoursesPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <ScrollReveal>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs text-lime-300">
            <Code2 className="w-3.5 h-3.5" />
            <span className="font-semibold">Pillar II</span>
            <span className="text-zinc-500">•</span>
            <span>Professional Career Tracks</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Industry Engineering & <br />
            <span className="cosmic-gradient-text">Practical AI Cohorts</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Move beyond superficial tutorials. Our cohort bootcamps are mentor-led, code-reviewed, and designed around production architectural standards.
          </p>
        </div>
      </ScrollReveal>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROFESSIONAL_COURSES.map((course, idx) => (
          <ScrollReveal key={course.slug} delay={idx * 80}>
            <div className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between h-full group">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-purple-300 uppercase tracking-widest">{course.track}</span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <Clock className="w-3 h-3" />
                    <span>{course.duration}</span>
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {course.title}
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {course.subtitle}
                </p>

                <div className="pt-3 border-t border-white/5 space-y-2">
                  <span className="text-xs font-semibold text-zinc-300">Key Outcomes:</span>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {course.learningOutcomes.slice(0, 2).map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">{course.level}</span>
                <Link
                  href={`/professional-courses/${course.slug}`}
                  className="px-4 py-2 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>View Curriculum</span>
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
