'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Send, CheckCircle2 } from 'lucide-react';
import NivoPortalPreview from '@/components/marketing/NivoPortalPreview';
import MagneticButton from '@/components/motion/MagneticButton';
import EnquiryModal from '@/components/forms/EnquiryModal';

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Established Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span className="font-semibold text-zinc-900 dark:text-white">Established 2020</span>
              <span className="text-zinc-400 dark:text-zinc-600">•</span>
              <span className="text-red-600 dark:text-red-400 font-medium">Learn Today, Lead Tomorrow</span>
            </div>

            {/* Main Editorial Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-zinc-950 dark:text-white">
              Cultivating Minds. <br />
              <span className="text-red-600 dark:text-red-500">Powering Careers.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Nivó connects students with exceptional academic mentors, trains professionals in modern engineering and AI, partners with institutions to recruit verified educators, and powers careers with our first-party Resume Studio.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-zinc-700 dark:text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Vetted Pedagogical Faculty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Mentor-Led Cohorts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Private High-Entropy Resumes</span>
              </div>
            </div>

            {/* CTAs (PWA Touch Friendly Full-Width on Mobile) */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <MagneticButton>
                <Link
                  href="/resume-studio"
                  className="brand-primary-btn !py-3.5 !px-6 !text-sm w-full sm:w-auto inline-flex items-center justify-center gap-2.5 shadow-md active:scale-95"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>Launch Resume Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="brand-secondary-btn !py-3.5 !px-6 !text-sm w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
              >
                <Send className="w-4 h-4 text-red-600 dark:text-red-500" />
                <span>Direct Enquiry</span>
              </button>

              <Link
                href="/education"
                className="flex items-center justify-center sm:justify-start gap-1.5 px-3 py-2 text-xs text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition-colors font-medium text-center"
              >
                <span>View All Disciplines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Nivó Portal Preview */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <NivoPortalPreview />
          </div>

        </div>
      </div>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
