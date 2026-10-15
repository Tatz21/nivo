import React from 'react';
import { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — Nivó',
  description: 'Terms and conditions governing the use of Nivó education, courses, recruitment, and Resume Studio services.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div className="space-y-4 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300">
          <FileText className="w-3.5 h-3.5" />
          <span>Legal Agreement</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-zinc-400">Effective Date: Established 2020 • Last Updated March 2026</p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing or utilizing the services provided by Nivó (including academic tutoring, professional courses, recruitment services, and the Resume Studio tool), you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Educational & Tutoring Services</h2>
          <p>
            Academic tuition and mentoring services are designed to support and enhance student conceptual understanding. Nivó does not sit examinations on behalf of candidates, write academic thesis papers for submission, or facilitate any form of academic misconduct.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Professional Courses & Certification</h2>
          <p>
            Completion of our mentor-led cohorts is contingent upon satisfactory submission of practical assignments and capstone project defences. Completion certificates authenticate evaluated competence within our curriculum; they do not constitute state licensing or university degrees.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Resume Studio Usage</h2>
          <p>
            Users are solely responsible for the truthfulness and accuracy of credentials, employment history, and contact information entered into or imported by Resume Studio. You may export vector PDFs for personal employment submissions free of unauthorized watermarks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">5. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with applicable laws. Any disputes arising shall be handled in fair conciliation forums.
          </p>
        </section>
      </div>

    </div>
  );
}
