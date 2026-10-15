'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, FileText, Send, CheckCircle2 } from 'lucide-react';
import BlackHoleHero from '@/components/motion/BlackHoleHero';
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/70 border border-violet-500/30 text-xs text-violet-300">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
              <span className="font-semibold text-lime-300">Established 2020</span>
              <span className="text-zinc-500">•</span>
              <span>Modern Education, Training & Recruitment</span>
            </div>

            {/* Main Editorial Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Cultivating Minds. <br />
              <span className="cosmic-gradient-text">Powering Careers.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Nivó connects students with exceptional academic mentors, trains professionals in modern engineering and AI, partners with institutions to recruit verified educators, and powers careers with our first-party Resume Studio.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Vetted Pedagogical Faculty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Mentor-Led Cohorts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Private High-Entropy Resumes</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/resume-studio"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl cosmic-glow-btn text-white font-semibold text-sm shadow-xl"
                  data-cursor="interactive"
                >
                  <Sparkles className="w-4 h-4 text-lime-300" />
                  <span>Launch Resume Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-white font-medium text-sm hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
                data-cursor="interactive"
              >
                <Send className="w-4 h-4 text-violet-400" />
                <span>Direct Enquiry</span>
              </button>

              <Link
                href="/education"
                className="flex items-center gap-1.5 px-4 py-3.5 text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <span>View All Disciplines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Signature Black Hole Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px]">
              <BlackHoleHero />

              {/* Floating Highlight Cards */}
              <div className="absolute -bottom-6 -left-4 sm:left-2 p-3 rounded-xl glass-panel border border-violet-500/30 text-xs shadow-2xl backdrop-blur-xl animate-bounce duration-1000">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-violet-600/30 text-lime-300">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Resume Studio Active</div>
                    <div className="text-[10px] text-zinc-400">ATS-Optimized Text-Based Export</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-2 p-3 rounded-xl glass-panel border border-violet-500/30 text-xs shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-lime-400/20 text-lime-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">4 Core Pillars</div>
                    <div className="text-[10px] text-zinc-400">Education • Tech • HR • Tools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
