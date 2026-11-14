"use client";

import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, Users, FileText, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface BentoCardProps {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
  href?: string;
  ctaText?: string;
}

export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
  href,
  ctaText = "Explore Pillar",
}: BentoCardProps) {
  const innerCard = (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl transition-all duration-300 h-full",
        "bg-white dark:bg-zinc-950/90 border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:border-red-600/40 hover:border-red-600/40",
        "data-[dark]:bg-zinc-900 data-[dark]:border-white/15"
      )}
    >
      {/* Visual Graphic Layer */}
      <div className="relative h-[22rem] sm:h-[26rem] w-full shrink-0 overflow-hidden">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-zinc-950 to-transparent opacity-60" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-zinc-950 dark:via-zinc-950/80 to-transparent" />
        )}
      </div>

      {/* Narrative Card Bottom Pane */}
      <div className="relative p-6 sm:p-8 z-20 isolate mt-[-100px] backdrop-blur-xl bg-white/80 dark:bg-zinc-950/85 border-t border-zinc-200/60 dark:border-white/10 flex flex-col justify-between flex-grow">
        <div>
          <div className="text-[11px] font-bold tracking-widest uppercase text-red-600 dark:text-red-500 mb-1.5 flex items-center gap-1.5">
            {eyebrow}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-[550px]">
            {description}
          </p>
        </div>

        {href && (
          <div className="pt-4 mt-4 border-t border-zinc-200/50 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={clsx("block h-full", className)}>
        {innerCard}
      </Link>
    );
  }

  return (
    <div className={className}>
      {innerCard}
    </div>
  );
}

/**
 * Nivó Service Architecture Bento Grid
 * Presents the 4 Pillars + 1 Institutional Ethos in an architectural 6-column bento layout.
 */
export default function FUIBentoGridDark() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Section Header */}
      <div className="text-left space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
          <span className="w-2 h-2 rounded-full bg-red-600" />
          <span className="font-semibold text-zinc-900 dark:text-white">Nivó Service Architecture</span>
          <span className="text-zinc-400 dark:text-zinc-600">•</span>
          <span>Core Offerings</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Four Core Pillars of <br />
          <span className="text-red-600 dark:text-red-500">Excellence & Growth.</span>
        </h2>

        <p className="max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
          From kindergarten foundational tuition to intensive cloud engineering cohorts, verified educator placement, and ATS resume engineering.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
        
        {/* Cell 1: Pillar I - Academic Education (Col Span 3) */}
        <BentoCard
          eyebrow={
            <>
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Pillar I • 1-on-1 Student Tutoring</span>
            </>
          }
          title="Dedicated One-to-One Academic Teaching"
          description="One verified educator dedicated to one student. Tailored diagnostic roadmaps for Cambridge, IB, CBSE, and university STEM examinations with undivided individual attention."
          graphic={
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md text-[11px] font-semibold text-zinc-900 dark:text-white border border-black/5 dark:border-white/10">
                <CheckCircle2 className="w-3 h-3 text-red-600" />
                <span>Private 1:1 Teaching</span>
              </div>
            </div>
          }
          fade={["bottom"]}
          href="/education"
          ctaText="Explore 1-on-1 Programs"
          className="lg:col-span-3 lg:rounded-tl-4xl"
        />

        {/* Cell 2: Pillar II - Professional Courses (Col Span 3) */}
        <BentoCard
          eyebrow={
            <>
              <Briefcase className="w-3.5 h-3.5" />
              <span>Pillar II • Technical Mastery</span>
            </>
          }
          title="Software Engineering & AI Systems Cohorts"
          description="Intensive mentor-led tracks in modern web architecture, production LLM pipelines, vector databases, and scalable distributed microservices."
          graphic={
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md text-[11px] font-semibold text-zinc-900 dark:text-white border border-black/5 dark:border-white/10">
                <CheckCircle2 className="w-3 h-3 text-red-600" />
                <span>Live Code Reviews & Capstones</span>
              </div>
            </div>
          }
          fade={["bottom"]}
          href="/professional-courses"
          ctaText="View Course Tracks"
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />

        {/* Cell 3: Pillar III - HR & Recruitment (Col Span 2) */}
        <BentoCard
          eyebrow={
            <>
              <Users className="w-3.5 h-3.5" />
              <span>Pillar III • Institutional Staffing</span>
            </>
          }
          title="Verified Educators & Technical Trainers"
          description="Sourcing and vetting verified educators, university faculty, and specialized instructors with demonstrated mock-teaching trials."
          graphic={
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md text-[11px] font-semibold text-zinc-900 dark:text-white border border-black/5 dark:border-white/10">
                <CheckCircle2 className="w-3 h-3 text-red-600" />
                <span>Rigorous Vetting</span>
              </div>
            </div>
          }
          fade={["bottom"]}
          href="/hr-and-recruitment"
          ctaText="Staffing Solutions"
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />

        {/* Cell 4: Pillar IV - Resume Studio (Col Span 2) */}
        <BentoCard
          eyebrow={
            <>
              <FileText className="w-3.5 h-3.5" />
              <span>Pillar IV • Career Tooling</span>
            </>
          }
          title="Nivó Resume Studio (ATS-Engineered)"
          description="High-performance first-party tool. Zero account friction, PDF/DOCX parsing, 4 architectural templates, and real selectable vector PDF export."
          graphic={
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md text-[11px] font-semibold text-zinc-900 dark:text-white border border-black/5 dark:border-white/10">
                <CheckCircle2 className="w-3 h-3 text-red-600" />
                <span>Zero Account Friction</span>
              </div>
            </div>
          }
          fade={["bottom"]}
          href="/resume-studio"
          ctaText="Launch Resume Studio"
          className="lg:col-span-2"
        />

        {/* Cell 5: Operating Ethos / Trust (Col Span 2) */}
        <BentoCard
          eyebrow={
            <>
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Operating Ethos • Since 2020</span>
            </>
          }
          title="Privacy by Architecture & Verified SLAs"
          description="Continuous operations since 2020. No public search scraping, high-entropy tokens, and milestone-audited institutional partnerships."
          graphic={
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md text-[11px] font-semibold text-zinc-900 dark:text-white border border-black/5 dark:border-white/10">
                <CheckCircle2 className="w-3 h-3 text-red-600" />
                <span>Audited Integrity</span>
              </div>
            </div>
          }
          fade={["bottom"]}
          href="/about"
          ctaText="Our Ethos & Story"
          className="lg:col-span-2 lg:rounded-br-4xl"
        />

      </div>

    </div>
  );
}
