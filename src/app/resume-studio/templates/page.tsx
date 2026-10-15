'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Layout, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, FileText } from 'lucide-react';
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
    description: 'Clean single-column ATS typography with vibrant violet accents and elegant horizontal rule dividers. Maximizes keyword scan accuracy.',
    bestFor: 'Software engineers, product managers, and modern corporate professionals',
    previewBg: 'bg-white',
    accent: '#6554F5'
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
    accent: '#D8FF75'
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
        <Link href="/resume-studio" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Resume Studio</span>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300">
          <Layout className="w-3.5 h-3.5" />
          <span className="font-semibold">Curated Templates</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Select Your Architectural Template
        </h1>

        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
          Switch templates at any moment inside the editor without losing your structured data or section contents.
        </p>
      </div>

      {/* Template Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEMPLATES.map((tmpl) => (
          <div
            key={tmpl.id}
            className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-violet-500/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Visual preview box */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-zinc-950 border border-white/10 p-4 flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.02] transition-transform">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white">
                    {tmpl.badge}
                  </span>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tmpl.accent }} />
                </div>

                {/* Abstract skeleton */}
                <div className="space-y-2">
                  <div className="w-2/3 h-3 rounded bg-white/30" />
                  <div className="w-1/3 h-2 rounded bg-violet-400/50" />
                  <div className="w-full h-1.5 rounded bg-white/10 mt-3" />
                  <div className="w-5/6 h-1.5 rounded bg-white/10" />
                  <div className="w-4/6 h-1.5 rounded bg-white/10" />
                </div>

                <div className="text-[9px] text-zinc-500 font-mono">
                  ATS Verified • Vector Text
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {tmpl.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {tmpl.description}
                </p>
              </div>

              <div className="pt-2 text-xs text-zinc-300">
                <span className="font-semibold text-lime-300">Ideal for: </span>
                <span>{tmpl.bestFor}</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <button
                onClick={() => handleSelectTemplate(tmpl.id)}
                className="w-full py-2.5 rounded-xl cosmic-glow-btn text-white font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-lg"
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
