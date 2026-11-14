'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Send, 
  FileText, 
  ChevronDown, 
  GraduationCap, 
  Briefcase, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import EnquiryModal from '@/components/forms/EnquiryModal';
import MagneticButton from '@/components/motion/MagneticButton';
import ThemeToggle from '@/components/theme/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer and desktop dropdown on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  // The 3 core pillars under 1 dropdown
  const servicesItems = [
    {
      name: 'Education & Mentorship',
      href: '/education',
      tag: '1-on-1 Academic Tutoring',
      description: 'Foundational K-12, Cambridge, IB, and undergraduate STEM tutoring.',
      icon: GraduationCap,
    },
    {
      name: 'Professional Courses',
      href: '/professional-courses',
      tag: 'Mentor-Led Tech Cohorts',
      description: 'Production software engineering, modern AI systems, and microservices.',
      icon: Briefcase,
    },
    {
      name: 'HR & Recruitment',
      href: '/hr-and-recruitment',
      tag: 'Institutional Faculty Staffing',
      description: 'Verified teacher placement and pedagogical vetting for schools and academies.',
      icon: Users,
    },
  ];

  const isServicesActive = 
    pathname.startsWith('/education') || 
    pathname.startsWith('/professional-courses') || 
    pathname.startsWith('/hr-and-recruitment') ||
    pathname === '/services';

  const otherNavLinks = [
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
              alt="Nivó: Learn Today, Lead Tomorrow"
              className="h-10 w-auto object-contain dark:hidden transition-transform group-hover:scale-[1.03]"
            />
            <img
              src="/brand/logo-horizontal-dark.png"
              alt="Nivó: Learn Today, Lead Tomorrow"
              className="h-10 w-auto object-contain hidden dark:block transition-transform group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 card-surface px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 shadow-sm">
            
            {/* Unified Services Dropdown (Education, Courses, HR) */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isServicesActive
                    ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 shadow-sm'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Programs & Services</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-red-600 dark:text-red-400' : 'text-zinc-400'
                  }`} 
                />
              </button>

              {/* Dropdown Floating Pane */}
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[390px] rounded-2xl card-surface border border-zinc-200 dark:border-white/10 p-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50 backdrop-blur-2xl"
                >
                  <div className="space-y-1">
                    {servicesItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                            isActive
                              ? 'bg-red-500/10 dark:bg-red-950/40 border border-red-500/20'
                              : 'hover:bg-zinc-100 dark:hover:bg-white/5'
                          }`}
                        >
                          <div className="p-2 rounded-xl bg-red-600/10 dark:bg-red-500/15 border border-red-500/20 text-red-600 dark:text-red-400 shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-zinc-950 dark:text-white group-hover:text-red-600">
                                {item.name}
                              </span>
                              <span className="text-[10px] font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-900/40">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5 leading-snug">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-2 pt-2 border-t border-zinc-200 dark:border-white/10 px-2 pb-1 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500 font-mono">
                      Operating Continuously Since 2020
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
                    >
                      <span>All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {otherNavLinks.map((link) => {
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
              className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 transition-colors cursor-pointer active:scale-95 touch-manipulation"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu backdrop overlay */}
        {mobileOpen && (
          <div 
            className="xl:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-40 animate-in fade-in duration-200" 
            onClick={() => setMobileOpen(false)} 
          />
        )}

        {/* Mobile menu drawer sheet */}
        {mobileOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[65px] z-50 bg-white/95 dark:bg-[#09090B]/95 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 p-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 max-h-[82vh] overflow-y-auto rounded-b-3xl">
            {/* Native Sheet Grab Handle */}
            <div className="w-12 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-auto -mt-1 mb-3" />

            <nav className="flex flex-col space-y-2">
              
              {/* Mobile Services Accordion */}
              <div className="rounded-2xl border border-zinc-200 dark:border-white/10 overflow-hidden bg-zinc-50/70 dark:bg-zinc-950/60 shadow-xs">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-sm font-semibold text-zinc-900 dark:text-white active:bg-black/5 dark:active:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span>Programs & Services</span>
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180 text-red-600' : 'text-zinc-400'
                    }`} 
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="px-3 pb-3 space-y-1.5 border-t border-zinc-200 dark:border-white/10 pt-2">
                    {servicesItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-start gap-2.5 p-2.5 rounded-xl text-xs transition-colors active:scale-[0.98] ${
                            isActive
                              ? 'bg-red-500/15 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-500/30 font-semibold'
                              : 'text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5'
                          }`}
                        >
                          <Icon className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-zinc-950 dark:text-white">{item.name}</div>
                            <div className="text-[11px] text-zinc-500 mt-0.5">{item.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Other Mobile Links */}
              {otherNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-colors active:scale-[0.98] ${
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
            <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl card-surface border border-black/10 dark:border-white/10">
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Theme</span>
              <ThemeToggle showLabel />
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3 pb-2">
              <Link
                href="/resume-studio/create"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl card-surface text-xs font-medium text-zinc-900 dark:text-white text-center border border-black/10 dark:border-white/10 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                <span>Build Resume</span>
              </Link>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  setModalOpen(true);
                }}
                className="brand-primary-btn !py-2.5 !px-3 !text-xs !rounded-2xl inline-flex items-center justify-center gap-1.5 text-center cursor-pointer active:scale-95"
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
