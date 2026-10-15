'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Code2, Users, CheckCircle2, BookOpen, Sparkles, Brain, Award } from 'lucide-react';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function PillarsSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300 font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Service Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Integrated Pathways for <br />
              <span className="cosmic-gradient-text">Students, Professionals & Institutions</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Operating since 2020. Clear domain separation, verified curriculum, and trusted recruitment relationships.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric 3-Column Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Pillar 1: Education & Academic Mentorship */}
          <ScrollReveal delay={100} className="h-full">
            <div className="glass-panel rounded-3xl p-8 h-full flex flex-col justify-between border border-white/10 relative overflow-hidden group hover:border-violet-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-36 h-36 bg-violet-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-600/20 transition-all" />

              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-lime-300 uppercase tracking-widest">Pillar I</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Education & Training</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Personalized academic coaching structured to build genuine subject intuition, rigorous examination readiness, and disciplined study habits.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Curriculum Offerings:</div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      <span>Kindergarten to Grade 12 School Subjects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      <span>Undergraduate & College Degree Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      <span>Foreign Languages (French, German, Spanish)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      <span>Fine Arts, Drawing, Music & Dance Tuition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      <span>Targeted Competitive Examination Prep</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-6 flex items-center justify-between">
                <span className="text-xs text-zinc-500">Online & Home Options</span>
                <Link
                  href="/education"
                  className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-violet-300 transition-colors"
                >
                  <span>Explore Academic Programs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 2: Professional Courses */}
          <ScrollReveal delay={200} className="h-full">
            <div className="glass-panel rounded-3xl p-8 h-full flex flex-col justify-between border border-white/10 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/20 transition-all" />

              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Code2 className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-lime-300 uppercase tracking-widest">Pillar II</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Professional Courses</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Intensive, mentor-led cohorts covering software engineering, artificial intelligence, UI/UX product design, and creative media.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Cohort Tracks:</div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    <li className="flex items-center gap-2">
                      <Brain className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Full-Stack Software Engineering (16 Wks)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Applied AI & Machine Learning (14 Wks)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>UI/UX Product Design Systems (12 Wks)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Commercial Video Editing & Motion (10 Wks)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Growth Marketing & Technical SEO (10 Wks)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-6 flex items-center justify-between">
                <span className="text-xs text-zinc-500">Live Hands-on Labs</span>
                <Link
                  href="/professional-courses"
                  className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-purple-300 transition-colors"
                >
                  <span>View All Cohorts</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 3: HR & Recruitment */}
          <ScrollReveal delay={300} className="h-full">
            <div className="glass-panel rounded-3xl p-8 h-full flex flex-col justify-between border border-white/10 relative overflow-hidden group hover:border-lime-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-36 h-36 bg-lime-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-lime-500/20 transition-all" />

              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-300">
                  <Users className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-lime-300 uppercase tracking-widest">Pillar III</span>
                  <h3 className="text-2xl font-bold text-white mt-1">HR & Recruitment</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Connecting schools, colleges, training centres, and enterprises with rigorously vetted teaching faculty, technical trainers, and corporate talent.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Placement Domains:</div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    <li className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      <span>Kindergarten & School Teacher Staffing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      <span>College Lecturers & University Faculty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      <span>Fine Arts, Dance, Music & Language Specialists</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      <span>Industry Tech & AI Bootcamp Trainers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      <span>Corporate & Operational Professional Talent</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-6 flex items-center justify-between">
                <span className="text-xs text-zinc-500">Institutional Mandates</span>
                <Link
                  href="/hr-and-recruitment"
                  className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-lime-300 transition-colors"
                >
                  <span>Talent & Staffing Hub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
