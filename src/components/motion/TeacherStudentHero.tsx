'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Code2,
  Terminal,
  Award,
  Zap,
  TrendingUp,
  BookOpen,
  ArrowRight,
  Flame,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function TeacherStudentHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  // Scroll tracking for hero container
  const { scrollY } = useScroll();
  const rawProgress = useTransform(scrollY, [0, 480], [0, 1]);
  const smoothProgress = useSpring(rawProgress, { stiffness: 100, damping: 20 });

  // Mouse parallax tilt
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: x * 8, y: -y * 8 });
    };

    const container = containerRef.current;
    if (container) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Design Phase: 0 = Theory Blueprint, 1 = Live Code Lab, 2 = Career Mastery
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  const [manualOverride, setManualOverride] = useState(false);

  useEffect(() => {
    return smoothProgress.on('change', (latest) => {
      if (manualOverride) return;
      if (latest < 0.33) setPhase(0);
      else if (latest < 0.68) setPhase(1);
      else setPhase(2);
    });
  }, [smoothProgress, manualOverride]);

  const selectPhase = (p: 0 | 1 | 2) => {
    setPhase(p);
    setManualOverride(true);
    // Release manual override after 4s so scroll resumes control
    setTimeout(() => setManualOverride(false), 4000);
  };

  // Phase metadata for the interactive scene
  const phaseData = [
    {
      id: 0,
      title: 'Phase I: Foundations & Theory',
      badge: 'Interactive Blueprint',
      color: '#6554F5',
      accentBg: 'bg-violet-600',
      badgeClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/30',
      description: 'First-principles pedagogy. Rigorous calculus, logic derivations, and foundational intuition.',
      tag: '1:1 Guided Diagnostics',
      codeSnippet: 'f(x) = ∫ ∇E • dl = mc² + e^(iπ)',
      icon: BookOpen
    },
    {
      id: 1,
      title: 'Phase II: Hands-On Dev Lab',
      badge: 'Live Code Environment',
      color: '#06B6D4',
      accentBg: 'bg-cyan-500',
      badgeClass: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/30',
      description: 'Pair programming & neural architectures. Real-time test-driven development on cloud environments.',
      tag: 'Interactive Coding & AI',
      codeSnippet: 'const model = await nivo.ai.train(weights);',
      icon: Code2
    },
    {
      id: 2,
      title: 'Phase III: Career Mastery',
      badge: 'Industry Placement',
      color: '#10B981',
      accentBg: 'bg-emerald-500',
      badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/30',
      description: 'Production deployment, ATS-optimized portfolio engineering, and corporate faculty certification.',
      tag: '100% Industry Ready',
      codeSnippet: 'STATUS: 100% VERIFIED • ATS SCORE: 98/100',
      icon: Award
    }
  ];

  const current = phaseData[phase];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[620px] lg:max-w-[680px] mx-auto select-none py-2"
      style={{ perspective: '1400px' }}
    >
      {/* 3D Motion Card Container */}
      <motion.div
        className="relative rounded-3xl p-4 sm:p-7 transition-shadow duration-500 overflow-hidden"
        style={{
          rotateY: tilt.x,
          rotateX: tilt.y,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dynamic Multi-Color Ambient Backlight Glow that morphs with phase */}
        <div
          className={`absolute inset-0 rounded-3xl blur-3xl pointer-events-none transition-all duration-700 ${
            phase === 0
              ? isDark
                ? 'bg-gradient-to-tr from-violet-600/30 via-purple-600/20 to-indigo-600/20 opacity-80'
                : 'bg-gradient-to-tr from-violet-400/25 via-purple-300/20 to-indigo-300/20 opacity-70'
              : phase === 1
              ? isDark
                ? 'bg-gradient-to-tr from-cyan-600/30 via-emerald-600/25 to-blue-600/20 opacity-80'
                : 'bg-gradient-to-tr from-cyan-400/25 via-teal-300/20 to-blue-300/20 opacity-70'
              : isDark
              ? 'bg-gradient-to-tr from-emerald-600/30 via-amber-500/25 to-lime-500/20 opacity-80'
              : 'bg-gradient-to-tr from-emerald-400/25 via-amber-300/20 to-lime-300/20 opacity-70'
          }`}
        />

        {/* Studio Card Canvas Shell */}
        <div
          className={`relative z-10 rounded-3xl border backdrop-blur-2xl p-5 sm:p-7 transition-all duration-500 ${
            isDark
              ? 'bg-[#131221]/90 border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)]'
              : 'bg-white/95 border-violet-100 shadow-[0_25px_60px_rgba(101,84,245,0.14)]'
          }`}
        >
          {/* Top Phase Switcher Tabs (Clickable & Scroll-Driven) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-black/5 dark:border-white/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  phase === 0 ? 'bg-violet-400' : phase === 1 ? 'bg-cyan-400' : 'bg-emerald-400'
                }`} />
                <span className={`relative inline-flex rounded-full h-3 w-3 ${
                  phase === 0 ? 'bg-violet-500' : phase === 1 ? 'bg-cyan-500' : 'bg-emerald-500'
                }`} />
              </span>
              <span className="text-xs font-black tracking-wider uppercase text-zinc-900 dark:text-zinc-100">
                Pedagogical Masterclass
              </span>
            </div>

            {/* Stage Selector Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-black/40 border border-black/5 dark:border-white/10 text-xs">
              <button
                onClick={() => selectPhase(0)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all text-[11px] ${
                  phase === 0
                    ? 'bg-violet-600 text-white shadow-md'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                1. Theory
              </button>
              <button
                onClick={() => selectPhase(1)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all text-[11px] ${
                  phase === 1
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                2. Code Lab
              </button>
              <button
                onClick={() => selectPhase(2)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all text-[11px] ${
                  phase === 2
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                3. Mastery
              </button>
            </div>
          </div>

          {/* Central High-Contrast Dynamic Scene: Changes complete visual design on scroll */}
          <div className="relative my-4 aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-transparent to-violet-500/5 flex items-center justify-center border border-black/5 dark:border-white/5">
            
            {/* SVG Visual Stage */}
            <svg
              viewBox="0 0 540 330"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="boardGrad0" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={isDark ? '#1F1B3B' : '#FFFFFF'} />
                  <stop offset="100%" stopColor={isDark ? '#141226' : '#F5F3FF'} />
                </linearGradient>
                <linearGradient id="boardGrad1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={isDark ? '#0F2633' : '#F0FDFA'} />
                  <stop offset="100%" stopColor={isDark ? '#0A1821' : '#E6FFFA'} />
                </linearGradient>
                <linearGradient id="boardGrad2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={isDark ? '#1C2E24' : '#F0FDF4'} />
                  <stop offset="100%" stopColor={isDark ? '#101C16' : '#DCFCE7'} />
                </linearGradient>

                <linearGradient id="streamGrad0" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#C084FC" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
                <linearGradient id="streamGrad1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
                <linearGradient id="streamGrad2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>

                <filter id="heroGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Dynamic Perspective Floor Grid */}
              <g stroke={
                phase === 0
                  ? isDark ? 'rgba(139, 92, 246, 0.12)' : 'rgba(101, 84, 245, 0.12)'
                  : phase === 1
                  ? isDark ? 'rgba(6, 182, 212, 0.15)' : 'rgba(13, 148, 136, 0.15)'
                  : isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.15)'
              } strokeWidth="1.2">
                <line x1="40" y1="300" x2="500" y2="300" />
                <line x1="20" y1="320" x2="520" y2="320" />
                <line x1="120" y1="285" x2="60" y2="330" />
                <line x1="270" y1="285" x2="270" y2="330" />
                <line x1="420" y1="285" x2="480" y2="330" />
              </g>

              {/* 1. CENTRAL SMARTBOARD / LAB WORKSTATION DISPLAY */}
              <rect
                x="145"
                y="25"
                width="250"
                height="155"
                rx="16"
                fill={phase === 0 ? 'url(#boardGrad0)' : phase === 1 ? 'url(#boardGrad1)' : 'url(#boardGrad2)'}
                stroke={
                  phase === 0
                    ? isDark ? '#8B5CF6' : '#C4B5FD'
                    : phase === 1
                    ? isDark ? '#06B6D4' : '#5EEAD4'
                    : isDark ? '#10B981' : '#86EFAC'
                }
                strokeWidth="2"
                className="drop-shadow-2xl"
              />

              {/* Display Header Toolbar */}
              <rect
                x="145"
                y="25"
                width="250"
                height="26"
                rx="16"
                fill={
                  phase === 0
                    ? isDark ? 'rgba(139, 92, 246, 0.25)' : 'rgba(139, 92, 246, 0.1)'
                    : phase === 1
                    ? isDark ? 'rgba(6, 182, 212, 0.25)' : 'rgba(6, 182, 212, 0.1)'
                    : isDark ? 'rgba(16, 185, 129, 0.25)' : 'rgba(16, 185, 129, 0.1)'
                }
              />
              <circle cx="162" cy="38" r="3.5" fill="#EF4444" />
              <circle cx="173" cy="38" r="3.5" fill="#F59E0B" />
              <circle cx="184" cy="38" r="3.5" fill="#10B981" />
              <text
                x="270"
                y="41"
                textAnchor="middle"
                fontSize="9"
                fontWeight="800"
                letterSpacing="0.08em"
                fill={isDark ? '#F4F4F5' : '#1E1B4B'}
              >
                {phase === 0 ? 'NIVÓ ACADEMIC LAB • THEORY' : phase === 1 ? 'NIVÓ CLOUD IDE • PRODUCTION' : 'CAREER MASTERY & PLACEMENT'}
              </text>

              {/* ============================================================ */}
              {/* DISPLAY CONTENT BY DESIGN PHASE                              */}
              {/* ============================================================ */}

              {/* PHASE 0 DESIGN: Interactive Math Blueprint */}
              {phase === 0 && (
                <g>
                  {/* Grid Lines inside board */}
                  <line x1="160" y1="85" x2="380" y2="85" stroke={isDark ? '#2E2854' : '#E2E8F0'} strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="160" y1="120" x2="380" y2="120" stroke={isDark ? '#2E2854' : '#E2E8F0'} strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Smooth Sine/Calculus Wave */}
                  <path
                    d="M 160 115 Q 185 65, 215 115 T 270 115 T 325 115 T 380 115"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Tangent line at vertex */}
                  <line x1="180" y1="65" x2="250" y2="65" stroke="#EC4899" strokeWidth="2" strokeDasharray="2 2" />
                  <circle cx="215" cy="65" r="4.5" fill="#EC4899" filter="url(#heroGlow)" />
                  <circle cx="270" cy="115" r="4.5" fill="#10B981" filter="url(#heroGlow)" />
                  <circle cx="325" cy="115" r="4.5" fill="#F59E0B" filter="url(#heroGlow)" />
                  
                  {/* Formula equation */}
                  <text x="270" y="145" textAnchor="middle" fontSize="11" fontWeight="700" fill={isDark ? '#FFFFFF' : '#1E1B4B'}>
                    ∇ • E = ρ / ε₀  &  ∫ f(x)dx
                  </text>
                  <text x="270" y="162" textAnchor="middle" fontSize="9" fontWeight="600" fill="#8B5CF6">
                    First-Principles Conceptual Foundation
                  </text>
                </g>
              )}

              {/* PHASE 1 DESIGN: Live IDE Code Editor & Terminal */}
              {phase === 1 && (
                <g>
                  {/* Editor Window simulation */}
                  <rect x="155" y="60" width="230" height="70" rx="8" fill={isDark ? '#0B1924' : '#F1F5F9'} stroke="#06B6D4" strokeWidth="1" />
                  
                  {/* Code syntax lines */}
                  <text x="165" y="76" fontSize="9" fontFamily="monospace" fontWeight="700" fill="#06B6D4">
                    import &#123; nivoBrain &#125; from &apos;@nivo/core&apos;;
                  </text>
                  <text x="165" y="90" fontSize="9" fontFamily="monospace" fontWeight="600" fill={isDark ? '#F1F5F9' : '#0F172A'}>
                    const agent = new nivoBrain(&#123; mode: &apos;live&apos; &#125;);
                  </text>
                  <text x="165" y="104" fontSize="9" fontFamily="monospace" fontWeight="600" fill="#10B981">
                    ✓ compileSuccess (240ms) • 0 errors
                  </text>
                  <text x="165" y="118" fontSize="9" fontFamily="monospace" fontWeight="600" fill="#F59E0B">
                    &gt; Neural Pipeline Connected to Student Pod
                  </text>

                  {/* Neural Net Nodes in Corner */}
                  <circle cx="360" cy="72" r="5" fill="#06B6D4" filter="url(#heroGlow)" />
                  <circle cx="372" cy="85" r="5" fill="#10B981" filter="url(#heroGlow)" />
                  <line x1="360" y1="72" x2="372" y2="85" stroke="#38BDF8" strokeWidth="1.5" />

                  {/* Terminal Status bar */}
                  <rect x="155" y="136" width="230" height="22" rx="6" fill="#10B981" fillOpacity="0.15" />
                  <text x="270" y="151" textAnchor="middle" fontSize="9" fontWeight="800" fill="#10B981">
                    LIVE RUNNING: 60 FPS • HOT RELOAD ACTIVE
                  </text>
                </g>
              )}

              {/* PHASE 2 DESIGN: Career Mastery & Placement Trophy */}
              {phase === 2 && (
                <g>
                  {/* Graduation / Placement Badge */}
                  <rect x="195" y="58" width="150" height="65" rx="10" fill={isDark ? '#143825' : '#DCFCE7'} stroke="#10B981" strokeWidth="1.5" />
                  <circle cx="270" cy="82" r="16" fill="#10B981" filter="url(#heroGlow)" />
                  <path d="M 262 82 L 268 88 L 279 76" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <text x="270" y="114" textAnchor="middle" fontSize="10" fontWeight="900" fill={isDark ? '#FFFFFF' : '#14532D'}>
                    ATS VERIFIED: 98/100
                  </text>

                  {/* Stars / Confetti */}
                  <polygon points="175,70 178,77 185,77 180,82 182,89 175,85 168,89 170,82 165,77 172,77" fill="#F59E0B" />
                  <polygon points="365,70 368,77 375,77 370,82 372,89 365,85 358,89 360,82 355,77 362,77" fill="#F59E0B" />

                  {/* Bottom Success Banner */}
                  <rect x="160" y="132" width="220" height="26" rx="6" fill="#F59E0B" fillOpacity="0.15" />
                  <text x="270" y="149" textAnchor="middle" fontSize="9" fontWeight="900" letterSpacing="0.04em" fill={isDark ? '#FBBF24' : '#B45309'}>
                    PRE-VETTED FACULTY &amp; ENTERPRISE PLACEMENT
                  </text>
                </g>
              )}

              {/* ============================================================ */}
              {/* 2. TEACHER CHARACTER (Left) - Pose morphs with Phase          */}
              {/* ============================================================ */}
              <g id="teacher-character">
                {/* Aura */}
                <circle
                  cx="80"
                  cy="170"
                  r="52"
                  fill={
                    phase === 0
                      ? isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(101, 84, 245, 0.15)'
                      : phase === 1
                      ? isDark ? 'rgba(6, 182, 212, 0.25)' : 'rgba(13, 148, 136, 0.15)'
                      : isDark ? 'rgba(245, 158, 11, 0.25)' : 'rgba(245, 158, 11, 0.15)'
                  }
                />

                {/* Head */}
                <circle cx="80" cy="130" r="18" fill="#FBD38D" stroke={isDark ? '#4A3E3D' : '#8B5CF6'} strokeWidth="1" />
                {/* Hair */}
                <path d="M 64 128 C 64 110, 96 108, 96 128 Z" fill="#2D3748" />
                {/* Teacher Glasses */}
                <rect x="74" y="127" width="9" height="6" rx="2" stroke="#6554F5" strokeWidth="1.5" fill="none" />
                <rect x="85" y="127" width="9" height="6" rx="2" stroke="#6554F5" strokeWidth="1.5" fill="none" />
                <line x1="83" y1="130" x2="85" y2="130" stroke="#6554F5" strokeWidth="1.5" />

                {/* Torso / Blazer */}
                <path
                  d="M 58 152 L 102 152 L 110 235 L 50 235 Z"
                  fill={phase === 0 ? '#6554F5' : phase === 1 ? '#0284C7' : '#059669'}
                  className="transition-colors duration-500"
                />
                {/* Tie / Inner Shirt */}
                <path d="M 76 152 L 80 180 L 84 152 Z" fill="#FFFFFF" />

                {/* TEACHER ARM POSE MORPHS PER PHASE */}
                {phase === 0 && (
                  // Phase 0: Pointing high at the math board with laser stylus
                  <g>
                    <path d="M 100 170 L 150 115" stroke="#FBD38D" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="152" cy="113" r="4.5" fill="#8B5CF6" filter="url(#heroGlow)" />
                  </g>
                )}
                {phase === 1 && (
                  // Phase 1: Leaning in, pointing directly down at student laptop screen
                  <g>
                    <path d="M 102 175 L 140 185 L 180 205" stroke="#FBD38D" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="180" cy="205" r="4.5" fill="#06B6D4" filter="url(#heroGlow)" />
                  </g>
                )}
                {phase === 2 && (
                  // Phase 2: Giving double thumbs up / celebrating success
                  <g>
                    <path d="M 100 165 L 125 140" stroke="#FBD38D" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="127" cy="136" r="5" fill="#F59E0B" filter="url(#heroGlow)" />
                    <path d="M 60 165 L 35 140" stroke="#FBD38D" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="33" cy="136" r="5" fill="#F59E0B" filter="url(#heroGlow)" />
                  </g>
                )}

                {/* Teacher Podium / Desk */}
                <rect x="45" y="235" width="70" height="75" rx="8" fill={isDark ? '#1C1938' : '#E2E8F0'} stroke={isDark ? '#3730A3' : '#CBD5E1'} strokeWidth="1" />
                <rect x="58" y="230" width="44" height="8" rx="2" fill={phase === 0 ? '#8B5CF6' : phase === 1 ? '#06B6D4' : '#10B981'} />

                {/* Label */}
                <text x="80" y="322" textAnchor="middle" fontSize="11" fontWeight="800" fill={isDark ? '#FFFFFF' : '#0F172A'}>
                  Verified Faculty
                </text>
              </g>

              {/* ============================================================ */}
              {/* 3. DYNAMIC KNOWLEDGE CONDUIT STREAM                          */}
              {/* ============================================================ */}
              <motion.path
                d="M 150 110 C 240 30, 310 170, 440 190"
                stroke={phase === 0 ? 'url(#streamGrad0)' : phase === 1 ? 'url(#streamGrad1)' : 'url(#streamGrad2)'}
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="8 5"
                animate={{
                  strokeDashoffset: [0, -60],
                }}
                transition={{
                  duration: phase === 1 ? 1.2 : 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Glowing Knowledge Flow Particles */}
              <circle cx="240" cy="80" r="5" fill={phase === 0 ? '#C084FC' : phase === 1 ? '#38BDF8' : '#FCD34D'} filter="url(#heroGlow)">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="340" cy="140" r="5" fill={phase === 0 ? '#8B5CF6' : phase === 1 ? '#10B981' : '#10B981'} filter="url(#heroGlow)">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
              </circle>

              {/* ============================================================ */}
              {/* 4. STUDENT CHARACTER (Right) - Poses and gear change         */}
              {/* ============================================================ */}
              <g id="student-character">
                {/* Aura */}
                <circle
                  cx="450"
                  cy="185"
                  r="52"
                  fill={
                    phase === 0
                      ? isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(101, 84, 245, 0.15)'
                      : phase === 1
                      ? isDark ? 'rgba(16, 185, 129, 0.25)' : 'rgba(16, 185, 129, 0.15)'
                      : isDark ? 'rgba(245, 158, 11, 0.25)' : 'rgba(245, 158, 11, 0.15)'
                  }
                />

                {/* Head */}
                <circle cx="450" cy="150" r="17" fill="#FBD38D" stroke={isDark ? '#4A3E3D' : '#8B5CF6'} strokeWidth="1" />
                
                {/* Hair & Cap per phase */}
                {phase === 2 ? (
                  // Phase 2: Wearing Graduation Mortarboard Cap!
                  <g>
                    <polygon points="425,142 450,132 475,142 450,150" fill="#1E1B4B" stroke="#F59E0B" strokeWidth="1.5" />
                    <rect x="438" y="142" width="24" height="6" fill="#1E1B4B" />
                    <line x1="450" y1="140" x2="472" y2="152" stroke="#F59E0B" strokeWidth="2" />
                    <circle cx="472" cy="153" r="2.5" fill="#F59E0B" />
                  </g>
                ) : (
                  // Phases 0 & 1: Modern Student Hairstyle
                  <path d="M 434 146 C 434 130, 466 128, 466 146 Z" fill="#1A202C" />
                )}

                {/* Torso */}
                <path
                  d="M 430 172 L 470 172 L 476 242 L 424 242 Z"
                  fill={phase === 0 ? '#7C3AED' : phase === 1 ? '#0D9488' : '#D97706'}
                  className="transition-colors duration-500"
                />

                {/* STUDENT ARMS & GESTURES PER PHASE */}
                {phase === 0 && (
                  // Phase 0: Taking notes in physical notebook
                  <g>
                    <path d="M 435 190 L 415 228" stroke="#FBD38D" strokeWidth="5.5" strokeLinecap="round" />
                    <path d="M 465 190 L 440 228" stroke="#FBD38D" strokeWidth="5.5" strokeLinecap="round" />
                    {/* Notebook on desk */}
                    <rect x="408" y="228" width="34" height="6" rx="2" fill="#E2E8F0" stroke="#8B5CF6" strokeWidth="1" />
                  </g>
                )}
                {phase === 1 && (
                  // Phase 1: Hands actively typing on glowing laptop keyboard
                  <g>
                    <path d="M 435 190 L 410 218" stroke="#FBD38D" strokeWidth="5.5" strokeLinecap="round" />
                    <path d="M 465 190 L 435 218" stroke="#FBD38D" strokeWidth="5.5" strokeLinecap="round" />
                    {/* Laptop with Cyber Glow */}
                    <rect x="395" y="218" width="46" height="8" rx="2" fill="#0284C7" />
                    <polygon points="400,218 436,218 430,192 406,192" fill="rgba(6, 182, 212, 0.45)" filter="url(#heroGlow)" />
                  </g>
                )}
                {phase === 2 && (
                  // Phase 2: Arms raised cheering with certificate
                  <g>
                    <path d="M 430 185 L 405 160" stroke="#FBD38D" strokeWidth="5.5" strokeLinecap="round" />
                    <path d="M 470 185 L 495 160" stroke="#FBD38D" strokeWidth="5.5" strokeLinecap="round" />
                    {/* Golden Degree scroll in hand */}
                    <rect x="398" y="152" width="16" height="10" rx="3" fill="#FEF08A" stroke="#F59E0B" strokeWidth="1.5" />
                  </g>
                )}

                {/* Student Modern Desk */}
                <rect x="390" y="235" width="95" height="75" rx="8" fill={isDark ? '#1C1938' : '#E2E8F0'} stroke={isDark ? '#3730A3' : '#CBD5E1'} strokeWidth="1" />
                <rect x="405" y="230" width="55" height="8" rx="2" fill={phase === 0 ? '#8B5CF6' : phase === 1 ? '#06B6D4' : '#10B981'} />

                {/* Floating Insight Symbol */}
                <g transform="translate(438, 98)">
                  <circle cx="12" cy="12" r="12" fill={isDark ? '#1F2937' : '#FEF3C7'} stroke={current.color} strokeWidth="2" filter="url(#heroGlow)" />
                  <path d="M 9 12 L 12 7 L 15 12 M 10 16 L 14 16" stroke={current.color} strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Label */}
                <text x="445" y="322" textAnchor="middle" fontSize="11" fontWeight="800" fill={isDark ? '#FFFFFF' : '#0F172A'}>
                  Engaged Learner
                </text>
              </g>
            </svg>
          </div>

          {/* Dynamic Active Lesson Card (Transforms text, code and metrics on scroll) */}
          <div
            className={`p-4 rounded-2xl border transition-all duration-300 ${
              isDark
                ? 'bg-[#18162B] border-white/10'
                : 'bg-violet-50/90 border-violet-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <current.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-black tracking-wide text-zinc-950 dark:text-white">
                  {current.title}
                </span>
              </div>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${current.badgeClass}`}>
                {current.tag}
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {current.description}
            </p>

            <div className="mt-2 flex items-center justify-between p-2 rounded-xl bg-black/5 dark:bg-black/30 border border-black/5 dark:border-white/5 font-mono text-xs text-zinc-800 dark:text-zinc-200">
              <span className="truncate">{current.codeSnippet}</span>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 shrink-0 ml-2">
                LIVE SYNCED
              </span>
            </div>

            {/* Scroll Progress Bar */}
            <div className="mt-3 w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-600 via-cyan-500 to-emerald-400 transition-all duration-300"
                style={{
                  width: phase === 0 ? '33%' : phase === 1 ? '66%' : '100%',
                }}
              />
            </div>
            <div className="mt-1.5 flex justify-between text-[10px] text-zinc-500 dark:text-zinc-400">
              <span>Scroll page or click tabs to transform scene</span>
              <span className="font-bold text-violet-600 dark:text-violet-400">
                Phase {phase + 1} of 3 ({current.badge})
              </span>
            </div>
          </div>
        </div>

        {/* Floating Highlight 1: 1:1 Verified Mentorship Badge */}
        <motion.div
          className={`absolute -bottom-1 -left-2 sm:left-4 p-3 rounded-2xl border shadow-2xl backdrop-blur-xl z-20 transition-all duration-300 ${
            isDark
              ? 'bg-[#18162B]/95 border-white/10 text-white shadow-black/60'
              : 'bg-white/95 border-violet-200 text-zinc-950 shadow-violet-950/10'
          }`}
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, -20]),
          }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-600 dark:text-violet-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-zinc-950 dark:text-white">1:1 Mentorship</div>
              <div className="text-[10px] font-medium text-zinc-600 dark:text-zinc-400">Verified Academic Faculty</div>
            </div>
          </div>
        </motion.div>

        {/* Floating Highlight 2: Concept Mastery / ATS Score */}
        <motion.div
          className={`absolute -top-1 -right-2 sm:right-4 p-3 rounded-2xl border shadow-2xl backdrop-blur-xl z-20 transition-all duration-300 ${
            isDark
              ? 'bg-[#18162B]/95 border-white/10 text-white shadow-black/60'
              : 'bg-white/95 border-violet-200 text-zinc-950 shadow-violet-950/10'
          }`}
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, 20]),
          }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-zinc-950 dark:text-white">
                {phase === 2 ? '100% Placement Ready' : '98% Concept Mastery'}
              </div>
              <div className="text-[10px] font-medium text-zinc-600 dark:text-zinc-400">
                {phase === 2 ? 'Verified Candidate Pipeline' : 'Diagnostic Feedback Loops'}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
