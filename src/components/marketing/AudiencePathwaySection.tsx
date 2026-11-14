'use client';

import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Code, 
  Building2 
} from 'lucide-react';
import ScrollReveal from '@/components/motion/ScrollReveal';

const pathways = [
  {
    id: 'students',
    badge: 'School & College Students',
    icon: GraduationCap,
    title: 'Foundational Learning & Exam Preparation',
    subheading: 'Cambridge IGCSE, A-Levels, IB Diploma, CBSE, and Undergraduate STEM',
    description:
      'We work with students who need clarity on tough concepts rather than quick-fix memorization. Our tutors break complex mathematics, physics, and computer science into intuitive first principles so students gain real academic confidence.',
    offerings: [
      '1-on-1 private mentoring with specialized university graduates and doctorates',
      'Systematic past-paper analysis and structured exam techniques',
      'Customized homework problem sets aligned directly with your board syllabus',
      'Flexible lesson schedules accommodating international student time zones'
    ],
    ctaText: 'Explore Academic Tutoring',
    ctaHref: '/education',
  },
  {
    id: 'professionals',
    badge: 'Engineers & Tech Professionals',
    icon: Briefcase,
    title: 'Modern Software Engineering & AI Cohorts',
    subheading: 'Production Fullstack, Cloud Architecture, and Practical LLM Systems',
    description:
      'Engineered for developers who want to master real production systems. You will build scalable microservices, integrate vector databases, deploy containerized pipelines, and get line-by-line pull request reviews from staff engineers.',
    offerings: [
      'Live mentor code reviews on real GitHub repositories',
      'Hands-on architectures covering vector search, Redis, and PostgreSQL',
      'Realistic system design simulations modeled on senior technical rounds',
      'Direct integration with Resume Studio to craft an ATS-proof engineering resume'
    ],
    ctaText: 'View Professional Cohorts',
    ctaHref: '/professional-courses',
  },
  {
    id: 'institutions',
    badge: 'Schools & Educational Academies',
    icon: Users,
    title: 'Verified Faculty Staffing & Audits',
    subheading: 'Educator Recruitment, Micro-Teaching Trials, and Subject Testing',
    description:
      'Hiring outstanding teachers who possess both deep subject knowledge and classroom command is difficult. We run thorough background audits and live micro-teaching trials, providing pre-screened faculty profiles within two business days.',
    offerings: [
      'Pre-vetted faculty available for primary, secondary, and higher secondary terms',
      'Detailed trial scorecards shared with your hiring committee before interviews',
      'Full credential verification including degrees, teaching certs, and references',
      'Clear service-level agreements with replacement guarantees if a match is not ideal'
    ],
    ctaText: 'Institutional Staffing Desk',
    ctaHref: '/hr-and-recruitment',
  },
];

export default function AudiencePathwaySection() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">
              <Compass className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              <span>Tailored Pathways</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Built For Learners, Engineers, <br />
              <span className="text-red-600 dark:text-red-500">and Academic Institutions.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Whether you are preparing for international board exams, upgrading your technical architecture skills, or recruiting verified faculty for your campus, Nivó provides focused subject guidance.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon;
            return (
              <ScrollReveal key={pathway.id} delay={index * 120}>
                <div className="group relative flex flex-col justify-between h-full rounded-3xl p-8 bg-white dark:bg-zinc-950/85 backdrop-blur-xl border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-red-500/40 dark:hover:border-red-500/40 transition-all duration-300">
                  
                  {/* Top Red Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600/30 to-transparent group-hover:via-red-600 transition-all duration-500" />

                  <div className="space-y-6">
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-red-600/10 dark:bg-red-500/15 border border-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10">
                        {pathway.badge}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors leading-snug">
                        {pathway.title}
                      </h3>
                      <p className="text-xs font-semibold text-red-600 dark:text-red-400 mt-1">
                        {pathway.subheading}
                      </p>
                    </div>

                    {/* Human Description */}
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {pathway.description}
                    </p>

                    {/* Key Offerings List */}
                    <div className="pt-4 border-t border-zinc-100 dark:border-white/10 space-y-2.5">
                      {pathway.offerings.map((offering, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                          <span className="text-xs leading-relaxed font-medium">{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-8">
                    <Link
                      href={pathway.ctaHref}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all border border-zinc-200 dark:border-white/10 group-hover:border-red-500/30"
                    >
                      <span>{pathway.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

