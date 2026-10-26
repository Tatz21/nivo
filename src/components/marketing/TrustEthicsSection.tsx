'use client';

import React from 'react';
import { ShieldCheck, Compass, Users, Lock, CheckCircle2, Award, Sparkles } from 'lucide-react';
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
    gradient: 'from-violet-50/90 via-indigo-50/80 to-purple-100/90 dark:from-violet-950/70 dark:via-indigo-950/60 dark:to-purple-900/60',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '002',
    title: 'Concept-First Pedagogy',
    description:
      'We discard rote memorization in favor of first-principles understanding, structured problem sets, and diagnostic feedback loops.',
    icon: Compass,
    tag: 'Analytical Mastery',
    gradient: 'from-cyan-50/90 via-teal-50/80 to-blue-100/90 dark:from-cyan-950/70 dark:via-teal-950/60 dark:to-blue-900/60',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '003',
    title: 'Privacy by Architecture',
    description:
      'Resumes created in Resume Studio are secured with high-entropy cryptographic access tokens. No public directory, no search engine scraping.',
    icon: Lock,
    tag: 'Zero Public Exposure',
    gradient: 'from-amber-50/90 via-orange-50/80 to-yellow-100/90 dark:from-amber-950/70 dark:via-orange-950/60 dark:to-yellow-900/60',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '004',
    title: 'Confirmed Offerings Only',
    description:
      'We publish course durations, tuition modes, and staffing categories only when active and confirmed. No bait-and-switch offerings.',
    icon: CheckCircle2,
    tag: 'Transparent Delivery',
    gradient: 'from-emerald-50/90 via-green-50/80 to-teal-100/90 dark:from-emerald-950/70 dark:via-green-950/60 dark:to-teal-900/60',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '005',
    title: 'Institutional Accountability',
    description:
      'Direct service-level agreements with leading schools, colleges, and enterprise talent pipelines with verified milestone audits.',
    icon: Award,
    tag: 'Established Since 2020',
    gradient: 'from-rose-50/90 via-pink-50/80 to-purple-100/90 dark:from-rose-950/70 dark:via-pink-950/60 dark:to-purple-900/60',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
  },
];

export default function TrustEthicsSection() {
  return (
    <section id="philosophy" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/60 border border-violet-300 dark:border-violet-500/30 text-xs text-violet-800 dark:text-lime-300 font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-violet-600 dark:text-lime-300" />
              <span>Our Operating Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Honest Pedagogy. <br />
              <span className="cosmic-gradient-text">Rigorous Standards Since 2020.</span>
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
