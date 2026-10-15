'use client';

import React from 'react';
import { ShieldCheck, Compass, Users, CheckCircle2, Lock } from 'lucide-react';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function TrustEthicsSection() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs text-lime-300 font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Operating Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Honest Pedagogy. <br />
              <span className="cosmic-gradient-text">Rigorous Standards Since 2020.</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              We uphold integrity in every student match, cohort curriculum, and institutional placement. No inflated vanity metrics or artificial claims.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <ScrollReveal delay={100} className="h-full">
            <div className="glass-panel rounded-2xl p-6 h-full flex flex-col justify-between border border-white/10 hover:border-violet-500/30 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-300 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Demonstrated Faculty Vetting</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every educator in our network undergoes credential verification, pedagogical micro-teaching trials, and background reviews before placement.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-[11px] text-lime-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Qualifications</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="h-full">
            <div className="glass-panel rounded-2xl p-6 h-full flex flex-col justify-between border border-white/10 hover:border-violet-500/30 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-300 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Concept-First Pedagogy</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We discard rote memorization in favor of first-principles understanding, structured problem sets, and diagnostic feedback loops.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-[11px] text-lime-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Analytical Mastery</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="h-full">
            <div className="glass-panel rounded-2xl p-6 h-full flex flex-col justify-between border border-white/10 hover:border-violet-500/30 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-lime-400/20 text-lime-300 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Privacy by Architecture</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Resumes created in Resume Studio are secured with high-entropy cryptographic access tokens. No public directory, no search engine scraping.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-[11px] text-lime-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Public Exposure</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} className="h-full">
            <div className="glass-panel rounded-2xl p-6 h-full flex flex-col justify-between border border-white/10 hover:border-violet-500/30 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Confirmed Offerings Only</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We publish course durations, tuition modes, and staffing categories only when active and confirmed. No bait-and-switch offerings.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-[11px] text-lime-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Transparent Delivery</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
