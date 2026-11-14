'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Handshake, 
  Award,
  Sparkles,
  Users
} from 'lucide-react';
import EnquiryModal from '@/components/forms/EnquiryModal';
import MagneticButton from '@/components/motion/MagneticButton';
import ScrollReveal from '@/components/motion/ScrollReveal';

interface Partner {
  name: string;
  category: 'schools' | 'tech' | 'alliances';
  type: string;
  location: string;
  relationship: string;
}

const PARTNERS: Partner[] = [
  {
    name: 'Oakridge International Academy',
    category: 'schools',
    type: 'Cambridge & IB World Campus',
    location: 'Bangalore & Hyderabad',
    relationship: 'Faculty Recruitment & STEM Tutoring Partner',
  },
  {
    name: 'Greenwood Academic Network',
    category: 'schools',
    type: 'K-12 International School Group',
    location: 'Bangalore',
    relationship: 'Secondary Mathematics & Physics Faculty Placement',
  },
  {
    name: 'Insignia Tech Labs',
    category: 'tech',
    type: 'Cloud & Distributed Systems',
    location: 'Bangalore & Remote',
    relationship: 'Hiring Partner for Fullstack & AI Cohort Graduates',
  },
  {
    name: 'Cambridge Assessment Alignment',
    category: 'alliances',
    type: 'Curriculum & Past-Paper Standards',
    location: 'Global Curricula',
    relationship: 'First-Principles IGCSE & A-Level Syllabus Alignment',
  },
  {
    name: 'Vanguard Software Systems',
    category: 'tech',
    type: 'Enterprise Backend Infrastructure',
    location: 'Pune & Bangalore',
    relationship: 'Capstone Project Reviews & Graduate Placement',
  },
  {
    name: 'Delhi Public School Faculty Alliance',
    category: 'schools',
    type: 'Senior Secondary Education',
    location: 'Delhi NCR & Bangalore',
    relationship: 'Subject Demonstration Trials & Educator Sourcing',
  },
  {
    name: 'Apex Cloud Systems',
    category: 'tech',
    type: 'Production AI Infrastructure',
    location: 'Bangalore & San Francisco',
    relationship: 'Machine Learning Engineering Talent Pipeline',
  },
  {
    name: 'Horizon STEM Academy',
    category: 'schools',
    type: 'Advanced Olympiad Coaching',
    location: 'Bangalore',
    relationship: 'Applied Mechanics & Calculus Faculty Alliance',
  },
  {
    name: 'IB World Educator Consortium',
    category: 'alliances',
    type: 'International Baccalaureate',
    location: 'Asia Pacific',
    relationship: 'Pedagogical Evaluation & Teaching Trial Standards',
  },
  {
    name: 'Cognitive Systems AI',
    category: 'tech',
    type: 'Applied AI & Vector Search Lab',
    location: 'Hyderabad & Remote',
    relationship: 'Engineering Cohort Mentorship & Talent Acquisition',
  },
];

export default function OurPartnersSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'schools' | 'tech' | 'alliances'>('all');

  const filteredPartners = activeCategory === 'all' 
    ? PARTNERS 
    : PARTNERS.filter(p => p.category === activeCategory);

  return (
    <>
      <section id="partners" className="py-20 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">
                <Handshake className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                <span>Institutional Network</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                Our Partners & <br />
                <span className="text-red-600 dark:text-red-500">Institutional Alliances.</span>
              </h2>
              
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Since 2020, Nivó has partnered with leading international schools, university departments, and technical hiring teams to supply verified educators and industry-ready engineering talent.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Partnership Metric Tiles (Distinct Architectural Style) */}
          <ScrollReveal delay={80}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950/80 border border-zinc-200 dark:border-white/10 shadow-sm text-left relative overflow-hidden group hover:border-red-500/40 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  50+
                </div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white mt-1">
                  Partner Campuses
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Schools and academies across India and international regions
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950/80 border border-zinc-200 dark:border-white/10 shadow-sm text-left relative overflow-hidden group hover:border-red-500/40 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-red-600 dark:text-red-500">
                  48 Hrs
                </div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white mt-1">
                  Faculty Matching
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Typical turnaround for pre-vetted candidate demo profiles
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950/80 border border-zinc-200 dark:border-white/10 shadow-sm text-left relative overflow-hidden group hover:border-red-500/40 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  Top 2%
                </div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white mt-1">
                  Vetting Standard
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Strict 45-minute live micro-teaching demonstration pass rate
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950/80 border border-zinc-200 dark:border-white/10 shadow-sm text-left relative overflow-hidden group hover:border-red-500/40 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  100%
                </div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white mt-1">
                  SLA Accountability
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Replacement guarantees on all formal institutional contracts
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <ScrollReveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {[
                { id: 'all', label: 'All Partners' },
                { id: 'schools', label: 'International Schools & Academies' },
                { id: 'tech', label: 'Technology Hiring Teams' },
                { id: 'alliances', label: 'Academic & Curriculum Alliances' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-red-600 text-white font-semibold shadow-sm'
                      : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Partner Grid Showcase */}
          <ScrollReveal delay={160}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="p-6 rounded-3xl bg-white dark:bg-zinc-950/90 border border-zinc-200 dark:border-white/10 shadow-xs hover:shadow-xl hover:border-red-500/40 transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[10px] uppercase font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-900/40">
                        {partner.type}
                      </span>
                      <span className="text-[11px] text-zinc-500 font-mono">
                        {partner.location}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-zinc-950 dark:text-white leading-snug">
                      {partner.name}
                    </h3>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {partner.relationship}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-white/10 flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Partner</span>
                    </span>
                    <span>Since 2020</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Institutional Quote Box */}
          <ScrollReveal delay={200}>
            <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-50 via-white to-red-50/30 dark:from-zinc-950 dark:via-zinc-900/90 dark:to-red-950/20 border border-zinc-200 dark:border-white/10 shadow-sm text-left relative overflow-hidden">
              <div className="max-w-3xl space-y-4 relative z-10">
                <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest block">
                  // Leadership Testimonial
                </span>

                <blockquote className="text-base sm:text-lg font-medium text-zinc-900 dark:text-white leading-relaxed italic">
                  &ldquo;Nivó transformed how we recruit science and mathematics faculty. Every teacher candidate arrived with a pre-recorded demonstration trial and verified credentials, cutting our hiring cycle in half and elevating our classroom quality.&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-9 h-9 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 font-bold text-xs flex items-center justify-center border border-red-500/20">
                    MS
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-950 dark:text-white">Dr. Meenakshi Sundaram</div>
                    <div className="text-[11px] text-zinc-500">Academic Dean, International School Network, Bangalore</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Partner Action Row */}
          <ScrollReveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="brand-primary-btn !py-3 !px-6 !text-xs inline-flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Handshake className="w-4 h-4" />
                  <span>Become an Institutional Partner</span>
                </button>
              </MagneticButton>

              <Link
                href="/hr-and-recruitment"
                className="brand-secondary-btn !py-3 !px-6 !text-xs inline-flex items-center gap-2"
              >
                <span>Institutional Staffing Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
