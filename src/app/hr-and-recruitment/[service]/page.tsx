import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { RECRUITMENT_SERVICES } from '@/lib/data/recruitment';
import { Users, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

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
    title: `${item.title} | Nivó HR & Recruitment`,
    description: item.description,
  };
}

async function RecruitmentContentView({ params }: PageProps) {
  const { service } = await params;
  const item = RECRUITMENT_SERVICES.find((r) => r.slug === service);

  if (!item) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back button */}
      <div>
        <Link href="/hr-and-recruitment" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Recruitment Services</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 font-medium">
          <Users className="w-3.5 h-3.5" />
          <span>Institutional Staffing Domain</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
          {item.title}
        </h1>

        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          {item.description}
        </p>
      </div>

      {/* 2-Column Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Vetting & Roles */}
        <div className="md:col-span-2 space-y-8">
          
          <div className="card-surface rounded-2xl p-7 space-y-4">
            <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-600 dark:text-red-500" />
              <span>Rigorous Candidate Vetting Protocol</span>
            </h2>
            <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              {item.vettingProcess.map((proc, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{proc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface rounded-2xl p-7 space-y-4">
            <h2 className="text-lg font-bold text-zinc-950 dark:text-white">Target Roles in this Domain</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.targetRoleTypes.map((role, i) => (
                <div key={i} className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-white/10 text-xs font-medium text-zinc-800 dark:text-zinc-200">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Institution & Candidate Dual Action */}
        <div className="space-y-6">
          <div className="card-surface rounded-2xl p-6 space-y-5">
            <div>
              <h3 className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider mb-2">For Institutions</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">{item.forClients}</p>
              <Link
                href={`/contact?subject=Staffing%20Requirement:%20${encodeURIComponent(item.title)}`}
                className="brand-primary-btn !w-full !py-2.5 !text-xs inline-flex items-center justify-center gap-1.5"
              >
                <span>Submit Staffing Mandate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="pt-5 border-t border-zinc-200 dark:border-white/10">
              <h3 className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider mb-2">For Educators & Trainers</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">{item.forEducators}</p>
              <Link
                href={`/contact?subject=Candidate%20Submission:%20${encodeURIComponent(item.title)}`}
                className="brand-secondary-btn !w-full !py-2.5 !text-xs inline-flex items-center justify-center gap-1.5"
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

export default function RecruitmentDetailPage(props: PageProps) {
  return (
    <React.Suspense fallback={<div className="pt-32 pb-24 max-w-5xl mx-auto px-4 text-center text-zinc-500">Loading service details...</div>}>
      <RecruitmentContentView {...props} />
    </React.Suspense>
  );
}
