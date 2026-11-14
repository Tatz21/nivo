'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, PhoneCall, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import EnquiryModal from '@/components/forms/EnquiryModal';
import MagneticButton from '@/components/motion/MagneticButton';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function ConsultationBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl p-6 sm:p-12 lg:p-14 overflow-hidden card-surface border border-zinc-200 dark:border-white/10 shadow-2xl">
              
              {/* Crimson Accent Background Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 dark:bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Direct Human Headline & Reassurance */}
                <div className="lg:col-span-8 space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-xs text-red-600 dark:text-red-400 font-semibold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Free 1-on-1 Student Diagnostic Consultation</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
                    Speak Directly With an Academic Coordinator. <br />
                    <span className="text-red-600 dark:text-red-500">No Sales Pressure. Real Guidance.</span>
                  </h2>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl font-normal leading-relaxed">
                    Have questions about school syllabus requirements, one-to-one tutor pairing, or technical cohorts? We offer a free 15-minute diagnostic consultation to understand your student&apos;s learning goals and match them with the right educator.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                      <span>Dedicated 1:1 educator matching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                      <span>Personalized learning diagnostic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                      <span>Zero compulsory lock-in</span>
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
                  <MagneticButton>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="brand-primary-btn !py-3.5 !px-6 !text-sm w-full inline-flex items-center justify-center gap-2.5 shadow-md cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Book Diagnostic Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </MagneticButton>

                  <Link
                    href="/contact"
                    className="brand-secondary-btn !py-3.5 !px-6 !text-sm w-full inline-flex items-center justify-center gap-2 text-center"
                  >
                    <Send className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span>Send Written Enquiry</span>
                  </Link>

                  <p className="text-[11px] text-zinc-500 text-center font-mono pt-1">
                    Operating continuously since 2020
                  </p>
                </div>

              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

