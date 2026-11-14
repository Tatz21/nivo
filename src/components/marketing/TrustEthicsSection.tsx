'use client';

import React from 'react';
import { ShieldCheck, Compass, Users, Lock, CheckCircle2, Award } from 'lucide-react';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { ServiceCarousel, type Service } from '@/components/ui/services-card';

const philosophyServices: Service[] = [
  {
    number: '01',
    title: 'We test every teacher before they step into a classroom',
    description:
      'Every educator in our network clears a subject trial, a live micro-teaching demonstration with senior faculty, and full background verification before placement.',
    icon: Users,
    tag: 'Top 2% Faculty Vetting',
    proofPoints: [
      '45-minute live teaching demonstration evaluated by senior faculty',
      'Identity, university degree, and credential verification',
      'Continuous student and parent feedback audits each term'
    ],
  },
  {
    number: '02',
    title: 'First-principles understanding over rote exam cramming',
    description:
      'We discard memorization tricks in favor of foundational concept mastery, structured diagnostic problem sets, and immediate feedback loops.',
    icon: Compass,
    tag: 'Analytical Mastery',
    proofPoints: [
      'Root-cause diagnostic assessments to find knowledge gaps',
      'Active problem solving instead of passive lecture listening',
      'Customized study pacing built around individual learning styles'
    ],
  },
  {
    number: '03',
    title: 'Your data stays private by architecture, not by policy',
    description:
      'Resumes created in Resume Studio are protected with high-entropy cryptographic tokens. We have no public directory, no search engine scraping, and zero third-party data broker sharing.',
    icon: Lock,
    tag: 'Zero Public Scraping',
    proofPoints: [
      'Cryptographic access tokens with optional expiry',
      'Zero search engine indexing of personal candidate records',
      'Client-side vector generation and private export'
    ],
  },
  {
    number: '04',
    title: 'Clear dates, clear syllabi, zero false promises',
    description:
      'We publish course durations, tuition modes, and staffing availability only when active and verified. No bait and switch marketing or inflated outcome statistics.',
    icon: CheckCircle2,
    tag: 'Honest Delivery',
    proofPoints: [
      'Accurate cohort start dates and real mentor-to-student ratios',
      'Transparent curriculum outlines available before registration',
      'No hidden fees or compulsory multi-year contracts'
    ],
  },
  {
    number: '05',
    title: 'Service-level agreements with verified milestone audits',
    description:
      'We maintain direct institutional agreements with leading schools, colleges, and enterprise talent pipelines, backed by accountable delivery standards.',
    icon: Award,
    tag: 'Established 2020',
    proofPoints: [
      'Formal service-level agreements for faculty placement',
      'Replacement guarantees if an educator match is not ideal',
      'Milestone-based progress reporting for institutional leadership'
    ],
  },
];

export default function TrustEthicsSection() {
  return (
    <section id="philosophy" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              <span>Our Operating Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Honest Pedagogy. <br />
              <span className="text-red-600 dark:text-red-500">Rigorous Standards Since 2020.</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              We uphold integrity in every student match, cohort curriculum, and institutional placement. No inflated vanity metrics or artificial claims.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Embla Animated Service Carousel */}
      <ScrollReveal delay={100}>
        <ServiceCarousel services={philosophyServices} />
      </ScrollReveal>
    </section>
  );
}
