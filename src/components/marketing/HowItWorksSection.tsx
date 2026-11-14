'use client';

import React from 'react';
import { 
  ClipboardCheck, 
  UserCheck, 
  Cpu, 
  LineChart, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/motion/ScrollReveal';

const steps = [
  {
    step: '01',
    title: '45-Minute Diagnostic Assessment',
    category: 'Discovery Phase',
    description:
      'We never push an off-the-shelf syllabus. We sit down with the learner or parent to review current conceptual grasp, exam targets, and specific stumbling blocks.',
    bulletPoints: [
      'Identifies root conceptual misunderstandings',
      'Evaluates current problem-solving speed and style',
      'Establishes realistic score and timeline targets'
    ],
    icon: ClipboardCheck,
  },
  {
    step: '02',
    title: 'Matched Faculty Pairing',
    category: 'Pedagogical Fit',
    description:
      'We pair each student with a verified educator whose teaching style and subject depth match how that student learns best. You speak with them before confirming any plan.',
    bulletPoints: [
      'Top 2% vetted faculty with verified academic credentials',
      'Preliminary consultation to ensure personal rapport',
      'Flexible scheduling across international time zones'
    ],
    icon: UserCheck,
  },
  {
    step: '03',
    title: 'Active Problem Solving and Live Feedback',
    category: 'Core Instruction',
    description:
      'No passive video watching. Sessions prioritize first-principles derivations, line-by-line code reviews, timed exam questions, and immediate correction.',
    bulletPoints: [
      'Hands-on derivations and guided practice sets',
      'Real-time feedback during every session',
      'Practical homework reviewed before the next class'
    ],
    icon: Cpu,
  },
  {
    step: '04',
    title: 'Transparent Milestone Progress',
    category: 'Audited Results',
    description:
      'Parents, students, and cohort members receive transparent monthly diagnostic progress reports with measurable concept mastery benchmarks.',
    bulletPoints: [
      'Monthly written progress summaries with action points',
      'Regular benchmark quizzes modeled on real exam boards',
      'Adjusted study pace as target exams approach'
    ],
    icon: LineChart,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              <span>How We Work With You</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Four Clear Steps. <br />
              <span className="text-red-600 dark:text-red-500">From Diagnostic Assessment to Mastery.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Real learning does not happen through pre-recorded playlists. We build a personalized learning roadmap around your syllabus, current strengths, and target outcomes.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.step} delay={index * 100}>
                <div className="group relative flex flex-col justify-between h-full rounded-3xl p-7 bg-white dark:bg-zinc-950/85 backdrop-blur-xl border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-red-500/40 dark:hover:border-red-500/40 transition-all duration-300">
                  
                  {/* Top Red Glow on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600/30 to-transparent group-hover:via-red-600 transition-all duration-500" />

                  <div>
                    {/* Step Number & Category */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50">
                        // STEP {item.step}
                      </span>
                      <span className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">
                        {item.category}
                      </span>
                    </div>

                    {/* Step Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-red-600/10 dark:bg-red-500/15 border border-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors leading-snug mb-2.5">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-white/10 space-y-2 text-xs">
                    {item.bulletPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight font-medium">{point}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Reassurance */}
        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <Link
              href="/education"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
            >
              <span>Read more about our diagnostic assessment methods</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
