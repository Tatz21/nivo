import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Briefcase, FileText, Shield } from 'lucide-react';
import ThemeToggle from '@/components/theme/ThemeToggle';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative z-10 bg-zinc-50 dark:bg-[#070709] border-t border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400 text-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Ethos */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block select-none group">
              <img
                src="/brand/logo-horizontal-light.png"
                alt="Nivó Logo"
                className="h-11 w-auto object-contain dark:hidden transition-transform group-hover:scale-[1.02]"
              />
              <img
                src="/brand/logo-horizontal-dark.png"
                alt="Nivó Logo"
                className="h-11 w-auto object-contain hidden dark:block transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Established in 2020. Nivó bridges foundational learning, industry-focused engineering training, specialized educator recruitment, and high-performance resume engineering.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-500">
              <Shield className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
              <span>Ethical Education & Privacy-First Data Practices</span>
            </div>

            <div className="pt-1">
              <Link
                href="/resume-studio"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                <span>Launch Resume Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 1: Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-zinc-950 dark:text-white font-semibold text-xs tracking-wider uppercase">
              <GraduationCap className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span>Education</span>
            </div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/education/foundational-and-k12" className="hover:text-red-600 dark:hover:text-white transition-colors">Foundational & K-12</Link></li>
              <li><Link href="/education/undergraduate-and-college" className="hover:text-red-600 dark:hover:text-white transition-colors">College & Degree Mentoring</Link></li>
              <li><Link href="/education/languages-and-creative-arts" className="hover:text-red-600 dark:hover:text-white transition-colors">Languages & Creative Arts</Link></li>
              <li><Link href="/education/competitive-exam-prep" className="hover:text-red-600 dark:hover:text-white transition-colors">Competitive Exam Prep</Link></li>
              <li><Link href="/education" className="text-red-600 dark:text-red-400 hover:underline font-semibold">Explore All Education →</Link></li>
            </ul>
          </div>

          {/* Pillar 2 & 3: Courses & Recruitment */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-zinc-950 dark:text-white font-semibold text-xs tracking-wider uppercase">
              <Briefcase className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span>Courses & Careers</span>
            </div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/professional-courses/software-engineering-fullstack" className="hover:text-red-600 dark:hover:text-white transition-colors">Software Engineering</Link></li>
              <li><Link href="/professional-courses/artificial-intelligence-machine-learning" className="hover:text-red-600 dark:hover:text-white transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="/professional-courses/ui-ux-product-design" className="hover:text-red-600 dark:hover:text-white transition-colors">UI/UX Product Design</Link></li>
              <li><Link href="/hr-and-recruitment/school-and-k12-educators" className="hover:text-red-600 dark:hover:text-white transition-colors">Educator Staffing</Link></li>
              <li><Link href="/hr-and-recruitment/higher-ed-and-college-faculty" className="hover:text-red-600 dark:hover:text-white transition-colors">College Faculty Placement</Link></li>
              <li><Link href="/hr-and-recruitment" className="text-red-600 dark:text-red-400 hover:underline font-semibold">HR & Recruitment →</Link></li>
            </ul>
          </div>

          {/* Tools & Company */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-zinc-950 dark:text-white font-semibold text-xs tracking-wider uppercase">
              <FileText className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span>Application & Company</span>
            </div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/resume-studio/templates" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Resume Templates</Link></li>
              <li><Link href="/resume-studio/create" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Create Resume</Link></li>
              <li><Link href="/resume-studio/import" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Import PDF / DOCX</Link></li>
              <li><Link href="/about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">About Nivó</Link></li>
              <li><Link href="/resources" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Career & Learning Guides</Link></li>
              <li><Link href="/faq" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/contact" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Contact & Enquiries</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {currentYear} Nivó. Established 2020. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Direct Support</Link>
            <div className="pl-2 border-l border-black/10 dark:border-white/10">
              <ThemeToggle showLabel />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
