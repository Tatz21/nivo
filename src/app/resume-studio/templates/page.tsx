'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Layout, ArrowRight, ArrowLeft } from 'lucide-react';
import { createNewResume } from '@/lib/resume/storage';
import { TemplateType } from '@/lib/types/resume';

interface TemplateCard {
  id: TemplateType;
  name: string;
  badge: string;
  description: string;
  bestFor: string;
  previewBg: string;
  accent: string;
}

const TEMPLATES: TemplateCard[] = [
  {
    id: 'cosmic',
    name: 'Cosmic Modern',
    badge: 'Popular',
    description: 'Clean single-column ATS typography with vibrant crimson red accents and elegant horizontal rule dividers. Maximizes keyword scan accuracy.',
    bestFor: 'Software engineers, product managers, and modern corporate professionals',
    previewBg: 'bg-white',
    accent: '#DC2626'
  },
  {
    id: 'executive',
    name: 'Executive Classic',
    badge: 'Traditional',
    description: 'Refined serif typography, centered uppercase headers, and formal corporate structure. Emphasizes seniority and academic pedigree.',
    bestFor: 'Senior executives, university professors, school principals, and legal counsel',
    previewBg: 'bg-white',
    accent: '#18181B'
  },
  {
    id: 'creative',
    name: 'Creative Asymmetric',
    badge: 'High Contrast',
    description: 'A striking dark sidebar for personal contacts and technical skills combined with an expansive light pane for project portfolios.',
    bestFor: 'UI/UX designers, creative directors, video editors, and full-stack builders',
    previewBg: 'bg-zinc-900',
    accent: '#DC2626'
  }
];

export default function TemplatesPage() {
  const router = useRouter();

  const handleSelectTemplate = (templateId: TemplateType) => {
    const resume = createNewResume('My Resume', true);
    resume.template = templateId;
    router.push(`/resume-studio/editor/${resume.id}`);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back button */}
      <div>
        <Link href="/resume-studio" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Resume Studio</span>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 font-medium">
          <Layout className="w-3.5 h-3.5" />
          <span className="font-semibold">Curated Templates</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
          Select Your Architectural Template
        </h1>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          Switch templates at any moment inside the editor without losing your structured data or section contents.
        </p>
      </div>

      {/* Template Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEMPLATES.map((tmpl) => (
          <div
            key={tmpl.id}
            className="card-surface rounded-2xl p-6 flex flex-col justify-between group hover:border-red-600/40 transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Visual preview box */}
              <div className="w-full aspect-[4/3] rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 p-4 flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.01] transition-transform">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-white/10 text-zinc-800 dark:text-white font-medium">
                    {tmpl.badge}
                  </span>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tmpl.accent }} />
                </div>

                {/* Abstract skeleton */}
                <div className="space-y-2">
                  <div className="w-2/3 h-3 rounded bg-zinc-300 dark:bg-white/30" />
                  <div className="w-1/3 h-2 rounded bg-red-600/50" />
                  <div className="w-full h-1.5 rounded bg-zinc-200 dark:bg-white/10 mt-3" />
                  <div className="w-5/6 h-1.5 rounded bg-zinc-200 dark:bg-white/10" />
                  <div className="w-4/6 h-1.5 rounded bg-zinc-200 dark:bg-white/10" />
                </div>

                <div className="text-[9px] text-zinc-500 font-mono">
                  ATS Verified • Vector Text
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                  {tmpl.name}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                  {tmpl.description}
                </p>
              </div>

              <div className="pt-2 text-xs text-zinc-600 dark:text-zinc-300">
                <span className="font-semibold text-red-600 dark:text-red-500">Ideal for: </span>
                <span>{tmpl.bestFor}</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-white/10">
              <button
                onClick={() => handleSelectTemplate(tmpl.id)}
                className="brand-primary-btn !w-full !py-2.5 !text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Use This Template</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
