'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles, Send, FileText } from 'lucide-react';
import EnquiryModal from '@/components/forms/EnquiryModal';
import MagneticButton from '@/components/motion/MagneticButton';

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
            ? 'py-3.5 bg-[#11111B]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group select-none">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-violet to-purple-400 p-[1.5px] shadow-[0_0_15px_rgba(101,84,245,0.4)]">
              <div className="w-full h-full bg-[#11111B] rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors">
                <span className="font-extrabold text-sm tracking-wider text-white">N</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-violet-300 transition-colors">
                NIVÓ
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-medium">
                Est. 2020
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.highlight && <Sparkles className="w-3 h-3 text-lime-300 animate-pulse" />}
                    {link.name}
                  </span>
                  {link.highlight && (
                    <span className="absolute -top-1.5 -right-1 px-1.5 py-0.2 text-[9px] font-semibold bg-lime-400 text-black rounded-full">
                      App
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/resume-studio"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-xl text-zinc-200 hover:text-white glass-panel hover:bg-white/10 transition-colors border border-white/10"
            >
              <FileText className="w-3.5 h-3.5 text-violet-400" />
              <span>Resume Studio</span>
            </Link>

            <MagneticButton>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl cosmic-glow-btn text-white cursor-pointer"
              >
                <span>Enquire Now</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </MagneticButton>
          </div>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-xl text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#11111B]/95 backdrop-blur-xl border-b border-white/10 p-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive ? 'bg-violet-600/30 text-white border border-violet-500/30' : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.highlight && <Sparkles className="w-4 h-4 text-lime-300" />}
                      {link.name}
                    </span>
                    {link.highlight && (
                      <span className="text-[10px] font-semibold bg-lime-400 text-black px-2 py-0.5 rounded-full">
                        Resume App
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <Link
                href="/resume-studio/create"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl glass-panel text-xs font-medium text-white text-center"
              >
                <FileText className="w-3.5 h-3.5 text-violet-400" />
                <span>Build Resume</span>
              </Link>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  setModalOpen(true);
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl cosmic-glow-btn text-xs font-semibold text-white text-center cursor-pointer"
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
