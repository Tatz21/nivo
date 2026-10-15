'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '@/lib/data/faq';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function FAQPage() {
  const [filter, setFilter] = useState<'all' | 'general' | 'education' | 'courses' | 'recruitment' | 'resume-studio'>('all');
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const filtered = filter === 'all' ? FAQS : FAQS.filter(f => f.category === filter);

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <ScrollReveal>
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="font-semibold">Knowledge Base</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Everything you need to know about our pedagogy, professional tracks, institutional staffing standards, and Resume Studio.
          </p>
        </div>
      </ScrollReveal>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#161526] rounded-xl border border-white/10 text-xs">
        {[
          { id: 'all', label: 'All Topics' },
          { id: 'general', label: 'General' },
          { id: 'education', label: 'Education & Tuitions' },
          { id: 'courses', label: 'Professional Courses' },
          { id: 'recruitment', label: 'Staffing & Hiring' },
          { id: 'resume-studio', label: 'Resume Studio' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              filter === tab.id ? 'bg-violet-600 text-white font-semibold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-3">
        {filtered.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl transition-all duration-300 border ${
                isOpen
                  ? 'bg-[#19172B]/90 border-violet-500/40 shadow-lg'
                  : 'glass-panel border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-violet-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-lime-300' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
