'use client';

import React from 'react';
import { ShieldCheck, Compass, Users, Lock, CheckCircle2, Award } from 'lucide-react';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { ServiceCarousel, type Service } from '@/components/ui/services-card';

const philosophyServices: Service[] = [
  {
    number: '001',
    title: 'Demonstrated Faculty Vetting',
    description:
      'Every educator in our network undergoes multi-stage credential verification, pedagogical micro-teaching trials, and background reviews before placement.',
    icon: Users,
    tag: 'Verified Qualifications',
    gradient: 'from-zinc-100 via-zinc-50 to-red-50/40 dark:from-zinc-900/90 dark:via-zinc-950/90 dark:to-red-950/40',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '002',
    title: 'Concept-First Pedagogy',
    description:
      'We discard rote memorization in favor of first-principles understanding, structured problem sets, and diagnostic feedback loops.',
    icon: Compass,
    tag: 'Analytical Mastery',
    gradient: 'from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900/90 dark:via-zinc-950/90 dark:to-zinc-900/60',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '003',
    title: 'Privacy by Architecture',
    description:
      'Resumes created in Resume Studio are secured with high-entropy cryptographic access tokens. No public directory, no search engine scraping.',
    icon: Lock,
    tag: 'Zero Public Exposure',
    gradient: 'from-zinc-100 via-zinc-50 to-red-50/40 dark:from-zinc-900/90 dark:via-zinc-950/90 dark:to-red-950/40',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '004',
    title: 'Confirmed Offerings Only',
    description:
      'We publish course durations, tuition modes, and staffing categories only when active and confirmed. No bait-and-switch offerings.',
    icon: CheckCircle2,
    tag: 'Transparent Delivery',
    gradient: 'from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900/90 dark:via-zinc-950/90 dark:to-zinc-900/60',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '005',
    title: 'Institutional Accountability',
    description:
      'Direct service-level agreements with leading schools, colleges, and enterprise talent pipelines with verified milestone audits.',
    icon: Award,
    tag: 'Established Since 2020',
    gradient: 'from-zinc-100 via-zinc-50 to-red-50/50 dark:from-zinc-900/90 dark:via-zinc-950/90 dark:to-red-950/40',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
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
