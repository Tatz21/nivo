'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Compass, 
  FileText, 
  BookOpen, 
  Send
} from 'lucide-react';
import EnquiryModal from '@/components/forms/EnquiryModal';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);

  // Active check helpers
  const isHome = pathname === '/';
  const isPrograms = 
    pathname.startsWith('/education') || 
    pathname.startsWith('/professional-courses') || 
    pathname.startsWith('/hr-and-recruitment') || 
    pathname === '/services';
  const isResumeStudio = pathname.startsWith('/resume-studio');
  const isResources = pathname.startsWith('/resources');

  return (
    <>
      <nav 
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#09090B]/95 backdrop-blur-xl border-t border-zinc-200/90 dark:border-white/10 shadow-[0_-8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_-12px_32px_rgba(0,0,0,0.5)] transition-colors duration-200"
        style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <div className="grid grid-cols-5 items-center px-2 pt-1.5 pb-1">
          
          {/* 1. Home */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all active:scale-95 ${
              isHome 
                ? 'text-red-600 dark:text-red-500 font-bold' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <div className="relative">
              <Home className={`w-5 h-5 ${isHome ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
              {isHome && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600 dark:bg-red-500" />
              )}
            </div>
            <span className="text-[10px] tracking-tight mt-1">Home</span>
          </Link>

          {/* 2. Programs & Services */}
          <Link
            href="/services"
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all active:scale-95 ${
              isPrograms 
                ? 'text-red-600 dark:text-red-500 font-bold' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <div className="relative">
              <Compass className={`w-5 h-5 ${isPrograms ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
              {isPrograms && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600 dark:bg-red-500" />
              )}
            </div>
            <span className="text-[10px] tracking-tight mt-1">Programs</span>
          </Link>

          {/* 3. Resume Studio (Prominent Center App Tab) */}
          <Link
            href="/resume-studio"
            className={`flex flex-col items-center justify-center -mt-3.5 transition-all active:scale-90 group`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all ${
              isResumeStudio
                ? 'bg-red-600 text-white shadow-red-600/30 ring-2 ring-red-400/50'
                : 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 shadow-black/20 group-hover:bg-red-600 group-hover:text-white'
            }`}>
              <FileText className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className={`text-[10px] tracking-tight mt-1 font-semibold ${
              isResumeStudio 
                ? 'text-red-600 dark:text-red-400' 
                : 'text-zinc-600 dark:text-zinc-300'
            }`}>
              Resume App
            </span>
          </Link>

          {/* 4. Guides & Resources */}
          <Link
            href="/resources"
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all active:scale-95 ${
              isResources 
                ? 'text-red-600 dark:text-red-500 font-bold' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <div className="relative">
              <BookOpen className={`w-5 h-5 ${isResources ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
              {isResources && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600 dark:bg-red-500" />
              )}
            </div>
            <span className="text-[10px] tracking-tight mt-1">Guides</span>
          </Link>

          {/* 5. Direct Quick Enquire Action */}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="flex flex-col items-center justify-center py-1 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-all active:scale-95 cursor-pointer"
          >
            <div className="relative">
              <Send className="w-5 h-5 stroke-[1.8]" />
            </div>
            <span className="text-[10px] tracking-tight mt-1">Enquire</span>
          </button>

        </div>
      </nav>

      {/* Instant Action Modal */}
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
