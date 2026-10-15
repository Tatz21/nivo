import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { RECRUITMENT_SERVICES } from '@/lib/data/recruitment';
import { Users, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Building, FileCheck } from 'lucide-react';

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return RECRUITMENT_SERVICES.map((r) => ({
    service: r.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const item = RECRUITMENT_SERVICES.find((r) => r.slug === service);
  if (!item) return { title: 'Service Not Found' };

  return {
    title: `${item.title} — Nivó HR & Recruitment`,
    description: item.description,
  };
}

export default async function RecruitmentDetailPage({ params }: PageProps) {
  const { service } = await params;
  const item = RECRUITMENT_SERVICES.find((r) => r.slug === service);

  if (!item) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back button */}
      <div>
        <Link href="/hr-and-recruitment" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Recruitment Services</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-950/60 border border-lime-500/30 text-xs text-lime-300">
          <Users className="w-3.5 h-3.5" />
          <span>Institutional Staffing Domain</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {item.title}
        </h1>

        <p className="text-base text-zinc-300 leading-relaxed max-w-3xl">
          {item.description}
        </p>
      </div>

      {/* 2-Column Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Vetting & Roles */}
        <div className="md:col-span-2 space-y-8">
          
          <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-lime-300" />
              <span>Rigorous Candidate Vetting Protocol</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
              {item.vettingProcess.map((proc, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{proc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white">Target Roles in this Domain</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {item.targetRoleTypes.map((role, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-200">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Institution & Candidate Dual Action */}
        <div className="space-y-6">
          <div className="glass-panel rounded-3xl p-6 border border-lime-500/30 space-y-5">
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">For Institutions</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.forClients}</p>
              <Link
                href={`/contact?subject=Staffing%20Requirement:%20${encodeURIComponent(item.title)}`}
                className="mt-3 w-full py-2.5 rounded-xl bg-lime-400 text-black font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg text-center"
              >
                <span>Submit Staffing Mandate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">For Educators & Trainers</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.forEducators}</p>
              <Link
                href={`/contact?subject=Candidate%20Submission:%20${encodeURIComponent(item.title)}`}
                className="mt-3 w-full py-2.5 rounded-xl glass-panel text-white hover:bg-white/10 font-semibold text-xs flex items-center justify-center gap-1.5 text-center"
              >
                <span>Submit Your Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
