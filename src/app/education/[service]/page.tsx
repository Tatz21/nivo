import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { EDUCATION_SERVICES } from '@/lib/data/services';
import { GraduationCap, CheckCircle2, ArrowRight, ArrowLeft, Users, Monitor, Sparkles } from 'lucide-react';

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return EDUCATION_SERVICES.map((s) => ({
    service: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const item = EDUCATION_SERVICES.find((s) => s.slug === service);
  if (!item) return { title: 'Program Not Found' };

  return {
    title: `${item.title} — Nivó Education`,
    description: item.description,
  };
}

export default async function EducationDetailPage({ params }: PageProps) {
  const { service } = await params;
  const item = EDUCATION_SERVICES.find((s) => s.slug === service);

  if (!item) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back link */}
      <div>
        <Link href="/education" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Education Programs</span>
        </Link>
      </div>

      {/* Program Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{item.category}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {item.title}
        </h1>

        <p className="text-base text-zinc-300 leading-relaxed max-w-3xl">
          {item.description}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Modules & Features */}
        <div className="md:col-span-2 space-y-8">
          <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white">Curriculum & Pedagogical Scope</h2>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
              {item.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white">Target Learners & Scholars</h2>
            <div className="flex flex-wrap gap-2">
              {item.audience.map((a, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Modes & Enquiry CTA */}
        <div className="space-y-6">
          <div className="glass-panel rounded-3xl p-6 border border-violet-500/30 space-y-4">
            <h3 className="text-base font-bold text-white">Delivery Modes</h3>
            <ul className="space-y-2 text-xs text-zinc-300">
              {item.modes.map((m, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Monitor className="w-3.5 h-3.5 text-violet-400" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link
                href={`/contact?subject=Enquiry:%20${encodeURIComponent(item.title)}`}
                className="w-full py-2.5 rounded-xl cosmic-glow-btn text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-lg text-center"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <p className="text-[10px] text-zinc-500 text-center">
                Operating since 2020. Free academic assessment with no lock-in.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
