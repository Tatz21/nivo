'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Mic,
  Award,
  Layers,
  Presentation,
  Binary
} from 'lucide-react';

type TabKey = 'education' | 'courses' | 'staffing' | 'resume';
type ClassroomViewMode = '3d-scene' | 'whiteboard';

interface PillarTab {
  id: TabKey;
  label: string;
  icon: React.ElementType;
}

const TABS: PillarTab[] = [
  { id: 'education', label: '1-on-1 Mentorship', icon: GraduationCap },
  { id: 'courses', label: 'Pro Cohorts', icon: Briefcase },
  { id: 'staffing', label: 'Educator Staffing', icon: Users },
  { id: 'resume', label: 'Resume Studio', icon: FileText }
];

/**
 * High-fidelity Collaborative SVG Cursor
 */
function ClassroomCursor({
  x,
  y,
  name,
  role,
  color = 'red',
  isClicking = false,
}: {
  x: number;
  y: number;
  name: string;
  role?: string;
  color?: 'red' | 'zinc' | 'blue';
  isClicking?: boolean;
}) {
  const colorMap = {
    red: {
      cursor: 'text-red-600 dark:text-red-500',
      badge: 'bg-red-600 text-white',
      ring: 'border-red-400',
    },
    zinc: {
      cursor: 'text-zinc-900 dark:text-white',
      badge: 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950',
      ring: 'border-zinc-400',
    },
    blue: {
      cursor: 'text-blue-600 dark:text-blue-400',
      badge: 'bg-blue-600 text-white',
      ring: 'border-blue-400',
    },
  };

  const current = colorMap[color];

  return (
    <motion.div
      className="absolute pointer-events-none z-30"
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 26,
        stiffness: 130,
        mass: 0.8,
      }}
      initial={{ x, y }}
    >
      {/* Click ripple animation */}
      {isClicking && (
        <motion.div
          className={`absolute -top-2 -left-2 w-7 h-7 rounded-full border-2 ${current.ring}`}
          initial={{ scale: 0.4, opacity: 1 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}

      {/* SVG Mouse Pointer */}
      <svg
        className={`w-4 h-4 filter drop-shadow-md transition-transform duration-150 ${current.cursor} ${
          isClicking ? 'scale-90' : 'scale-100'
        }`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.36z" />
      </svg>

      {/* Attached Name Pill */}
      <div
        className={`ml-3.5 -mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-tight shadow-md flex items-center gap-1 whitespace-nowrap select-none ${current.badge}`}
      >
        <span>{name}</span>
        {role && <span className="opacity-75 font-normal text-[9px]">{role}</span>}
      </div>
    </motion.div>
  );
}

export default function NivoPortalPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>('education');
  const [viewMode, setViewMode] = useState<ClassroomViewMode>('3d-scene');
  const [isPaused, setIsPaused] = useState(false);

  // 3D Parallax Tilt state
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Animation cycle step for 1-on-1 Mentorship (0 to 4)
  const [eduStep, setEduStep] = useState(0);

  // Auto-progress classroom teaching animation
  useEffect(() => {
    if (activeTab !== 'education' || isPaused) return;

    const durations = [2600, 2800, 2800, 3000, 2400];
    const timer = setTimeout(() => {
      setEduStep((prev) => (prev + 1) % durations.length);
    }, durations[eduStep]);

    return () => clearTimeout(timer);
  }, [activeTab, eduStep, isPaused]);

  // Handle 3D Parallax Tilt on Card Hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max 6deg tilt
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  // Cursors coordinates for 3D Holographic Scene (calibrated to the 3D hologram screen)
  const scene3DTeacherPositions = [
    { x: 120, y: 70, isClicking: false },  // Pointing to floating calculus curve
    { x: 190, y: 85, isClicking: true },   // Highlighting red holographic atom model
    { x: 175, y: 125, isClicking: true },  // Drawing integral vector projection
    { x: 230, y: 100, isClicking: false }, // Directing student to derivative
    { x: 145, y: 140, isClicking: true },  // Validating final diagnostic result
  ];

  const scene3DStudentPositions = [
    { x: 310, y: 140, isClicking: false }, // Student taking notes on tablet
    { x: 275, y: 110, isClicking: false }, // Viewing 3D atom rotation
    { x: 250, y: 135, isClicking: true },  // Writing solution on digital pad
    { x: 220, y: 130, isClicking: true },  // Connecting physics vector
    { x: 290, y: 145, isClicking: false }, // Reviewing +100 XP score
  ];

  // Whiteboard coordinates
  const wbTeacherPositions = [
    { x: 75, y: 55, isClicking: false },
    { x: 135, y: 92, isClicking: true },
    { x: 110, y: 130, isClicking: true },
    { x: 275, y: 85, isClicking: false },
    { x: 95, y: 172, isClicking: true },
  ];

  const wbStudentPositions = [
    { x: 295, y: 45, isClicking: false },
    { x: 295, y: 92, isClicking: false },
    { x: 260, y: 130, isClicking: true },
    { x: 140, y: 132, isClicking: true },
    { x: 270, y: 172, isClicking: false },
  ];

  const teacherPos = viewMode === '3d-scene'
    ? (scene3DTeacherPositions[eduStep] || scene3DTeacherPositions[0])
    : (wbTeacherPositions[eduStep] || wbTeacherPositions[0]);

  const studentPos = viewMode === '3d-scene'
    ? (scene3DStudentPositions[eduStep] || scene3DStudentPositions[0])
    : (wbStudentPositions[eduStep] || wbStudentPositions[0]);

  return (
    <div 
      ref={cardRef}
      className="w-full max-w-lg mx-auto select-none perspective-[1000px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer Card Frame with 3D Parallax Spring */}
      <motion.div 
        className="rounded-3xl card-surface p-5 sm:p-6 shadow-2xl relative overflow-hidden border border-zinc-200 dark:border-white/10 transition-colors duration-200 will-change-transform"
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        
        {/* Top Crimson Brand Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />

        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3.5 border-b border-zinc-200 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
            </span>
            <span className="font-bold text-xs tracking-wider uppercase text-zinc-950 dark:text-white flex items-center gap-1.5">
              <span>Nivó Portal</span>
              <span className="text-zinc-400 font-normal">| 3D Classroom</span>
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900/40 font-semibold">
              Live Session
            </span>
            <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">
              Est. 2020
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 my-3.5 bg-zinc-100 dark:bg-zinc-950/80 rounded-xl border border-zinc-200 dark:border-white/10 text-xs font-medium">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-all text-xs cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white font-semibold shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* TAB 1: 3D GRAPHICS CLASSROOM & WHITEBOARD ANIMATION */}
        {/* ========================================================= */}
        {activeTab === 'education' && (
          <div className="space-y-3">
            {/* Session Info Bar & 3D View Switcher */}
            <div className="flex items-center justify-between text-xs px-1">
              {/* Teacher Profile */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-7 h-7 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 font-bold flex items-center justify-center text-[10px] border border-red-500/20">
                    DR
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white dark:border-zinc-900" />
                </div>
                <div>
                  <div className="font-bold text-zinc-950 dark:text-white text-[11px] flex items-center gap-1">
                    <span>Dr. Rajesh V.</span>
                    <Mic className="w-2.5 h-2.5 text-red-600 animate-pulse" />
                  </div>
                  <div className="text-[9px] text-zinc-500">IISc PhD • 1-on-1 Mentor</div>
                </div>
              </div>

              {/* View Mode Switcher Pills */}
              <div className="flex items-center gap-1 bg-zinc-200/70 dark:bg-zinc-900 p-0.5 rounded-lg border border-zinc-300 dark:border-white/10 text-[10px]">
                <button
                  onClick={() => setViewMode('3d-scene')}
                  className={`px-2 py-0.5 rounded-md font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                    viewMode === '3d-scene'
                      ? 'bg-white dark:bg-zinc-800 text-red-600 dark:text-red-400 shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>3D View</span>
                </button>
                <button
                  onClick={() => setViewMode('whiteboard')}
                  className={`px-2 py-0.5 rounded-md font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                    viewMode === 'whiteboard'
                      ? 'bg-white dark:bg-zinc-800 text-red-600 dark:text-red-400 shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  <Presentation className="w-2.5 h-2.5" />
                  <span>Whiteboard</span>
                </button>
              </div>

              {/* Student Profile */}
              <div className="flex items-center gap-2 text-right">
                <div>
                  <div className="font-bold text-zinc-950 dark:text-white text-[11px]">Aarav M.</div>
                  <div className="text-[9px] text-zinc-500">Cambridge A-Level</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold flex items-center justify-center text-[10px] border border-zinc-300 dark:border-white/10">
                  AM
                </div>
              </div>
            </div>

            {/* Container for Cursors + 3D View or Whiteboard */}
            <div className="relative min-h-[210px] sm:min-h-[225px] rounded-2xl bg-zinc-950 border border-zinc-200 dark:border-white/10 overflow-hidden shadow-inner">
              
              {/* Collaborative Cursors (Rendered on top of either 3D Scene or Whiteboard) */}
              <ClassroomCursor
                x={teacherPos.x}
                y={teacherPos.y}
                name="Dr. Rajesh"
                role="Teacher"
                color="red"
                isClicking={teacherPos.isClicking}
              />

              <ClassroomCursor
                x={studentPos.x}
                y={studentPos.y}
                name="Aarav"
                role="Student"
                color="zinc"
                isClicking={studentPos.isClicking}
              />

              {/* ---------------------------------------------------- */}
              {/* MODE 1: 3D GRAPHICS SCENE OF TEACHER TEACHING STUDENT */}
              {/* ---------------------------------------------------- */}
              {viewMode === '3d-scene' && (
                <div className="relative w-full h-[225px] overflow-hidden group">
                  {/* High-Resolution 3D CGI Render Image */}
                  <img
                    src="/brand/3d-classroom-mentor.jpg"
                    alt="3D Classroom — Teacher Teaching Student"
                    className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-95 transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Holographic Crimson Ambient Lighting Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute inset-0 bg-radial from-red-600/15 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Holographic Interactive Status Badges */}
                  <div className="absolute top-2.5 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-red-500/30 text-white text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                    <span className="font-mono text-red-400 font-semibold">3D Hologram: Active</span>
                  </div>

                  <div className="absolute top-2.5 right-3 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono">
                    Step {eduStep + 1} of 5
                  </div>

                  {/* Dynamic Concept Dialogue Floating in 3D Space */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-[9px] uppercase font-bold tracking-wider text-red-400 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>
                          {eduStep === 0 && 'Teacher: Introducing Motion Vector Function s(t)'}
                          {eduStep === 1 && 'Teacher: Projecting Derivative v(t) = 6t + 2 on Hologram'}
                          {eduStep === 2 && 'Teacher Prompt: Evaluating Instantaneous Rate at t = 3'}
                          {eduStep === 3 && 'Student Calculation: Computing v(3) = 20 m/s'}
                          {eduStep === 4 && 'Concept Mastered: First-Principles Physics & Calculus'}
                        </span>
                      </div>
                      <div className="text-xs font-mono font-bold text-zinc-100">
                        {eduStep < 3 ? 's(t) = 3t² + 2t - 5  →  v(t) = 6t + 2' : 'v(3) = 6(3) + 2 = 20 m/s  [✓ Confirmed]'}
                      </div>
                    </div>

                    <span className="px-2 py-1 rounded bg-red-600 text-white text-[10px] font-bold tracking-wide uppercase font-mono shadow-md shrink-0">
                      {eduStep === 4 ? '+100 XP' : 'Live Math'}
                    </span>
                  </div>
                </div>
              )}

              {/* ---------------------------------------------------- */}
              {/* MODE 2: STEP-BY-STEP MATHEMATICAL WHITEBOARD */}
              {/* ---------------------------------------------------- */}
              {viewMode === 'whiteboard' && (
                <div className="relative p-4 h-[225px] overflow-hidden font-mono text-xs text-zinc-100 space-y-2">
                  {/* Subtle dot grid pattern */}
                  <div 
                    className="absolute inset-0 opacity-[0.10] pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                      backgroundSize: '16px 16px',
                    }}
                  />

                  {/* Problem Prompt */}
                  <div className="p-2 rounded-xl bg-zinc-900/90 border border-white/10 font-sans">
                    <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider block">
                      Given Motion Function:
                    </span>
                    <p className="text-xs font-semibold text-white mt-0.5 font-mono">
                      s(t) = 3t² + 2t - 5 &nbsp;→&nbsp; Find instantaneous velocity v(3)
                    </p>
                  </div>

                  {/* Step 1: Teacher Derivation */}
                  <motion.div 
                    className={`p-2 rounded-xl transition-all duration-300 font-mono text-xs flex items-center justify-between ${
                      eduStep >= 1 
                        ? 'bg-red-500/15 border border-red-500/40 text-white' 
                        : 'opacity-40 text-zinc-500'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-red-400 font-sans font-semibold uppercase block">
                        Teacher Derivation:
                      </span>
                      <span className="font-bold">
                        v(t) = s&apos;(t) = <span className="bg-red-500/25 px-1 py-0.5 rounded text-red-400">6t + 2</span>
                      </span>
                    </div>
                    {eduStep >= 1 && (
                      <span className="text-[9px] font-sans px-1.5 py-0.5 rounded bg-red-600 text-white font-semibold">
                        Differentiated
                      </span>
                    )}
                  </motion.div>

                  {/* Step 2 & 3: Student Calculation */}
                  <motion.div 
                    className={`p-2 rounded-xl transition-all duration-300 font-mono text-xs flex items-center justify-between ${
                      eduStep >= 3 
                        ? 'bg-emerald-500/15 border border-emerald-500/40 text-white' 
                        : eduStep >= 2
                        ? 'bg-amber-500/15 border border-amber-500/40 text-white'
                        : 'opacity-30 text-zinc-500'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-sans font-semibold uppercase block text-zinc-400">
                        {eduStep >= 3 ? 'Student Substitution:' : 'Teacher Prompt:'}
                      </span>
                      {eduStep < 3 ? (
                        <span className="text-zinc-300 italic font-sans text-[11px]">
                          💬 &ldquo;Substitute t = 3 into v(t)...&rdquo;
                        </span>
                      ) : (
                        <span className="font-bold text-emerald-400">
                          v(3) = 6(3) + 2 = <span className="underline decoration-2">20 m/s</span>
                        </span>
                      )}
                    </div>
                    {eduStep >= 3 && (
                      <span className="text-[9px] font-sans px-1.5 py-0.5 rounded bg-emerald-600 text-white font-semibold">
                        Calculated
                      </span>
                    )}
                  </motion.div>
                </div>
              )}

            </div>

            {/* Bottom Diagnostic Action */}
            <div className="flex items-center justify-between text-xs px-1 pt-0.5">
              <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">
                {isPaused ? '⏸️ Paused (Move away to resume)' : '✦ Interactive 3D pedagogical simulation'}
              </span>
              <Link
                href="/education"
                className="font-semibold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>Book 1-on-1 Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: PRO COHORTS (LIVE CODE REVIEW & PAIR PROGRAMMING) */}
        {/* ========================================================= */}
        {activeTab === 'courses' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 space-y-2.5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[10px] text-red-600 dark:text-red-400 font-bold uppercase tracking-wider font-mono">
                    Live Mentor Code Review
                  </div>
                  <h4 className="text-sm font-bold text-zinc-950 dark:text-white mt-0.5">
                    Production LLM Pipeline & Vector Search
                  </h4>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40">
                  Week 6 • Capstone
                </span>
              </div>

              {/* Simulated Code Review Diff */}
              <div className="p-2.5 rounded-xl bg-zinc-900 text-zinc-100 font-mono text-[11px] space-y-1 overflow-x-auto border border-white/10">
                <div className="text-zinc-500">// Mentor note: Add similarity threshold & circuit breaker</div>
                <div className="text-red-400 line-through">{'- const results = await vectorIndex.query({ vector });'}</div>
                <div className="text-emerald-400 font-semibold">{'+ const results = await vectorIndex.query({ vector, topK: 5, minScore: 0.85 });'}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-600 dark:text-zinc-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0" />
                  <span>Real Cloud VPC Microservices</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0" />
                  <span>1-on-1 Senior Staff PR Reviews</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs px-1">
              <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">Next cohort starts Nov 15</span>
              <Link
                href="/professional-courses"
                className="font-semibold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>View Full Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: INSTITUTIONAL STAFFING */}
        {/* ========================================================= */}
        {activeTab === 'staffing' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 space-y-2.5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[10px] text-red-600 dark:text-red-400 font-bold uppercase tracking-wider font-mono">
                    Pedagogical Vetting Matrix
                  </div>
                  <h4 className="text-sm font-bold text-zinc-950 dark:text-white mt-0.5">
                    Faculty Placement & Mock Trials
                  </h4>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/40">
                  Vetted 9.8 / 10
                </span>
              </div>

              <div className="space-y-1.5 pt-1 text-xs">
                <div className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-zinc-950 dark:text-white text-[11px]">Secondary Math & Physics Lead</div>
                    <div className="text-[10px] text-zinc-500">Subject Mastery Trial: 10/10 • Background Audited</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                </div>
                <div className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-zinc-950 dark:text-white text-[11px]">Computer Science & AI Instructor</div>
                    <div className="text-[10px] text-zinc-500">Live Classroom Demo: 9.6/10 • Verified</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs px-1">
              <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">Strict multi-stage trial audits</span>
              <Link
                href="/hr-and-recruitment"
                className="font-semibold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>Institutional Staffing Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: RESUME STUDIO */}
        {/* ========================================================= */}
        {activeTab === 'resume' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 space-y-2.5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[10px] text-red-600 dark:text-red-400 font-bold uppercase tracking-wider font-mono">
                    Real-time ATS Scoring
                  </div>
                  <h4 className="text-sm font-bold text-zinc-950 dark:text-white mt-0.5">
                    Vector PDF Architecture
                  </h4>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800">
                  ATS Score: 98/100
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 space-y-0.5">
                  <div className="font-semibold text-zinc-950 dark:text-white text-[11px]">Real Vector PDF</div>
                  <div className="text-[10px] text-zinc-500">True selectable fonts, zero image rasterization</div>
                </div>
                <div className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 space-y-0.5">
                  <div className="font-semibold text-zinc-950 dark:text-white text-[11px]">Zero Public Indexing</div>
                  <div className="text-[10px] text-zinc-500">Cryptographic tokens; private by default</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs px-1">
              <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">Zero account friction</span>
              <Link
                href="/resume-studio"
                className="font-semibold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>Launch Resume Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
}
