import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — Nivó',
  description: 'Nivó privacy policy: our commitment to zero-friction access, cryptographic resume security, and non-disclosure of personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div className="space-y-4 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Data Governance & Security</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-zinc-400">Effective Date: Established 2020 • Last Updated March 2026</p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Scope and Core Principle</h2>
          <p>
            Nivó operates an educational, professional training, and institutional recruitment platform alongside our first-party Resume Studio tool. We respect individual privacy by design. We do not require visitors to register for general accounts to explore our services or submit enquiries.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Resume Studio & High-Entropy Authorization</h2>
          <p>
            Resumes created, imported, or edited in Resume Studio are secured by cryptographically generated high-entropy access keys. Unlike standard platforms:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-400">
            <li>Resume documents are never indexed by web search engines (noindex/nofollow).</li>
            <li>No public directory of candidate resumes is published.</li>
            <li>A sequential or public resume ID alone can never authorize access without its matching secret key.</li>
            <li>Resumes are stored locally in your browser storage and transmitted over TLS encrypted endpoints only when requested.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Information Collected via Enquiry Forms</h2>
          <p>
            When you submit an academic, course, or staffing enquiry, we collect the contact details (name, email, phone number) and requirements you explicitly provide. This information is used exclusively to facilitate your educational consultation or candidate evaluation and is never sold to third-party data brokers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Data Retention & Deletion</h2>
          <p>
            You have the right at any time to request the deletion of your enquiry data or submitted documents by emailing privacy@nivo.education. Local resume data can be cleared immediately from your browser storage via the Resume Studio interface.
          </p>
        </section>
      </div>

    </div>
  );
}
