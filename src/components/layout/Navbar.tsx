'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Send, FileText } from 'lucide-react';
import EnquiryModal from '@/components/forms/EnquiryModal';
import MagneticButton from '@/components/motion/MagneticButton';
import ThemeToggle from '@/components/theme/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Education', href: '/education' },
    { name: 'Professional Courses', href: '/professional-courses' },
    { name: 'HR & Recruitment', href: '/hr-and-recruitment' },
    { name: 'Resume Studio', href: '/resume-studio', highlight: true },
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Authentic Nivó Brand Logo */}
          <Link href="/" className="flex items-center group select-none py-1">
            <img
              src="/brand/logo-horizontal-light.png"
              alt="Nivó — Learn Today, Lead Tomorrow"
              className="h-10 w-auto object-contain dark:hidden transition-transform group-hover:scale-[1.03]"
            />
            <img
              src="/brand/logo-horizontal-dark.png"
              alt="Nivó — Learn Today, Lead Tomorrow"
              className="h-10 w-auto object-contain hidden dark:block transition-transform group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 card-surface px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 shadow-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 shadow-sm'
                      : 'text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                  </span>
                  {link.highlight && (
                    <span className="absolute -top-1.5 -right-1 px-1.5 py-0.5 text-[9px] font-bold bg-red-600 text-white rounded-full">
                      App
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Dedicated Dark & Light Theme Toggle */}
            <ThemeToggle />

            <Link
              href="/resume-studio"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-xl text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white card-surface hover:bg-black/5 dark:hover:bg-white/10 transition-colors border border-black/10 dark:border-white/10"
            >
              <FileText className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              <span>Resume Studio</span>
            </Link>

            <MagneticButton>
              <button
                onClick={() => setModalOpen(true)}
                className="brand-primary-btn !py-2 !px-4 !text-xs inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Enquire Now</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </MagneticButton>
          </div>

          {/* Mobile menu hamburger & toggle */}
          <div className="xl:hidden flex items-center gap-2">
            <div className="sm:hidden">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 p-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-red-500/15 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-500/30'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-red-600 dark:hover:text-red-400'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                    </span>
                    {link.highlight && (
                      <span className="text-[10px] font-bold bg-red-600 text-white px-2 py-0.5 rounded-full">
                        Resume App
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Theme Preference Selector */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl card-surface border border-black/10 dark:border-white/10">
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Theme</span>
              <ThemeToggle showLabel />
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <Link
                href="/resume-studio/create"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl card-surface text-xs font-medium text-zinc-900 dark:text-white text-center border border-black/10 dark:border-white/10"
              >
                <FileText className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                <span>Build Resume</span>
              </Link>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  setModalOpen(true);
                }}
                className="brand-primary-btn !py-2.5 !px-3 !text-xs inline-flex items-center justify-center gap-1.5 text-center cursor-pointer"
              >
                <span>Enquire Now</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Universal Enquiry Modal */}
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
