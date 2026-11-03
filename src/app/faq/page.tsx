'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="font-semibold">Knowledge Base</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Everything you need to know about our pedagogy, professional tracks, institutional staffing standards, and Resume Studio.
          </p>
        </div>
      </ScrollReveal>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-white/10 text-xs">
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
            className={`px-3.5 py-1.5 rounded-xl font-medium transition-colors cursor-pointer ${
              filter === tab.id
                ? 'bg-red-600 text-white font-semibold shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
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
                  ? 'card-surface border-red-600/40 shadow-sm'
                  : 'card-surface border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold text-zinc-950 dark:text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-red-600 dark:text-red-500' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-200 dark:border-white/10 pt-3 animate-in fade-in duration-200">
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
