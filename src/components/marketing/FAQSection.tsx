'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FAQS } from '@/lib/data/faq';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300 font-semibold tracking-wide uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Clear answers regarding our learning matches, courses, recruitment process, and Resume Studio.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {FAQS.slice(0, 6).map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <ScrollReveal key={faq.id} delay={idx * 50}>
                <div
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-[#19172B]/90 border-violet-500/40 shadow-lg'
                      : 'glass-panel border-white/5 hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-violet-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-lime-300' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="text-center pt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors"
          >
            <span>View Complete FAQ Knowledge Base</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
