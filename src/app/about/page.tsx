import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Compass, 
  Users, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Calendar,
  Award,
  BookOpen,
  HeartHandshake
} from 'lucide-react';
import ScrollReveal from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Nivó: Established 2020',
  description: 'Learn about our origins in Bangalore, our pedagogical standards, leadership council, and milestone journey since 2020.',
};

export default function AboutPage() {
  const milestones = [
    {
      year: '2020',
      title: 'The Foundation in Bangalore',
      description:
        'Started with three senior educators and a software engineer offering high-touch 1-on-1 academic tutoring in mathematics, physics, and computing for Cambridge and CBSE students.',
    },
    {
      year: '2021',
      title: 'International Boards Expansion',
      description:
        'Formalized comprehensive curricula for Cambridge IGCSE, Cambridge A-Levels, and the International Baccalaureate Diploma, supporting learners across India and the Middle East.',
    },
    {
      year: '2022',
      title: 'Professional Tech Cohorts',
      description:
        'Launched mentor-led engineering tracks in modern fullstack architecture, distributed systems, and backend engineering for developers preparing for senior technical interviews.',
    },
    {
      year: '2023',
      title: 'Institutional Staffing Desk',
      description:
        'Partnered with international schools and private academies to pre-screen, audit, and place certified teachers through mandatory live micro-teaching trials.',
    },
    {
      year: '2024',
      title: 'Resume Studio Release',
      description:
        'Engineered and launched Resume Studio, our first-party tool providing ATS-compliant vector PDF resume generation with zero account friction and zero public data indexing.',
    },
    {
      year: '2025 to 2026',
      title: 'An Integrated Education Ecosystem',
      description:
        'Over 10,000 hours of 1-on-1 mentorship completed, dozens of partner educational institutions, and thousands of private resumes generated worldwide.',
    },
  ];

  const leadership = [
    {
      name: 'Dr. Rajesh Venkataraman',
      role: 'Lead Academic Advisor & Faculty Director',
      credentials: 'PhD in Applied Mathematics, IISc Alumnus',
      bio: 'Over 14 years teaching calculus, mechanics, and advanced algebra. Passionate about stripping away the fear of mathematics by building intuitive geometric and physical models.',
    },
    {
      name: 'Ananya Sen',
      role: 'Head of Faculty Vetting & Pedagogy',
      credentials: 'M.Ed, Former International School Academic Coordinator',
      bio: 'Twelve years leading curriculum development across Cambridge and IB schools. Designs our educator evaluation rubrics and oversees teacher demonstration trials.',
    },
    {
      name: 'Vikramaditya Rao',
      role: 'Lead Technical Instructor & Career Advisor',
      credentials: 'Staff Software Engineer, Systems Architect',
      bio: 'Specialist in distributed microservices and production machine learning pipelines. Leads our engineering cohort code reviews and career transition advisory.',
    },
    {
      name: 'Priya Deshmukh',
      role: 'Institutional Staffing Coordinator',
      credentials: 'MA in Educational Leadership, Talent Specialist',
      bio: 'Manages school partnerships and recruitment logistics, ensuring academic institutions receive verified teacher profiles within two business days.',
    },
  ];

  const commitments = [
    {
      audience: 'To Our Students',
      promise:
        'You will always have a patient educator who listens, never shames you for asking basic questions, and helps you discover why a concept makes sense.',
      icon: GraduationCap,
    },
    {
      audience: 'To Parents',
      promise:
        'We provide honest, transparent updates on your child’s learning pace. If a student needs extra time on a foundational topic, we tell you directly.',
      icon: HeartHandshake,
    },
    {
      audience: 'To Working Engineers',
      promise:
        'Real line-by-line pull request reviews on practical code. No superficial tutorial clones, only production-grade system design and engineering practices.',
      icon: Briefcase,
    },
    {
      audience: 'To Partner Schools',
      promise:
        'Every candidate we present has demonstrated live classroom presence, cleared subject knowledge tests, and undergone full degree and background checks.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* 1. Hero Header */}
      <ScrollReveal>
        <div className="max-w-3xl space-y-5 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
            <span>Established 2020 • Bangalore & Global</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-[1.1]">
            Honest Teaching. Rigorous Standards. <br />
            <span className="text-red-600 dark:text-red-500">Built From the Ground Up.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            We started Nivó in 2020 because we were tired of seeing education treated like an assembly line. Students were pushed to memorize formulas without understanding them, and schools struggled to find genuine teachers who actually cared.
          </p>
        </div>
      </ScrollReveal>

      {/* 2. The Founding Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <ScrollReveal className="lg:col-span-7 space-y-6 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
              // Our Origin
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Why We Built Nivó in 2020
            </h2>
          </div>

          <p>
            In early 2020, three senior educators and a software engineer began tutoring small groups of students in Bangalore who were struggling with higher-level Cambridge and CBSE mathematics. We noticed a consistent pattern: the students were bright and dedicated, but their previous instruction had treated learning as a series of disconnected tricks to pass tomorrow’s quiz.
          </p>

          <p>
            When we slowed down, returned to the geometric and physical origins of calculus, and showed them how vectors behave in real space, their exam anxiety began to disappear. They were no longer trying to memorize fifty problem variations; they were deriving solutions from first principles.
          </p>

          <p>
            Parents took notice, and soon local schools began reaching out for help with a different challenge: finding teachers who possessed both deep subject knowledge and the emotional patience to manage a classroom. That led to the creation of our institutional educator recruitment desk, built around mandatory 45-minute live demonstration trials.
          </p>

          <p>
            Over the following years, as our early students graduated from universities and entered technology careers, we observed the same gap in technical upskilling. Developers were drowning in endless video courses without receiving any real feedback on their pull requests. We introduced our mentor-led cohorts and built Resume Studio to provide the practical career tools our learners needed.
          </p>
        </ScrollReveal>

        {/* Narrative Sidecard */}
        <ScrollReveal delay={120} className="lg:col-span-5">
          <div className="card-surface rounded-3xl p-8 space-y-6 border border-zinc-200 dark:border-white/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 pb-4 border-b border-zinc-200 dark:border-white/10">
              <div className="w-10 h-10 rounded-2xl bg-red-600/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-sm">
                N
              </div>
              <div>
                <h3 className="font-bold text-zinc-950 dark:text-white text-sm">The Nivó Core Philosophy</h3>
                <span className="text-[11px] text-zinc-500">Grounded in First Principles</span>
              </div>
            </div>

            <div className="space-y-4 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-white/5 space-y-1">
                <span className="font-bold text-zinc-950 dark:text-white block text-xs">
                  Understanding Over Speed
                </span>
                <p>
                  A student who takes three sessions to thoroughly grasp a fundamental theorem will solve subsequent problems five times faster than one who memorized a formula sheet.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-white/5 space-y-1">
                <span className="font-bold text-zinc-950 dark:text-white block text-xs">
                  Teachers Who Actually Teach
                </span>
                <p>
                  High test scores are not enough. We evaluate candidates on how they respond when a student looks confused and how clearly they structure their notes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-white/5 space-y-1">
                <span className="font-bold text-zinc-950 dark:text-white block text-xs">
                  Zero Vanity Metrics
                </span>
                <p>
                  We have been teaching continuously since 2020. We do not invent fake placement counters or inflated guarantees. Our reputation rests on real student outcomes.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* 3. Milestone Timeline (2020 to 2026) */}
      <ScrollReveal>
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
              // Continuous Growth
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Our Journey Since 2020
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Step by step, discipline by discipline, expanding to meet the real needs of our academic and professional community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, idx) => (
              <div 
                key={item.year}
                className="group relative flex flex-col justify-between rounded-3xl p-7 card-surface border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-red-500/40 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600/30 to-transparent group-hover:via-red-600 transition-all duration-500" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-red-600 dark:text-red-400 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40">
                      {item.year}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      Milestone 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 4. Academic Leadership & Council */}
      <ScrollReveal>
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
              // Faculty Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              The People Behind Nivó
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Experienced subject specialists, researchers, and engineers who actively guide our curricula and mentor our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader) => (
              <div 
                key={leader.name}
                className="group relative flex flex-col justify-between rounded-3xl p-7 card-surface border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-red-500/40 transition-all duration-300 text-left"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-600/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-base border border-red-500/20 group-hover:scale-110 transition-transform">
                    {leader.name.split(' ')[0][0]}{leader.name.split(' ')[1]?.[0] || 'N'}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-red-600 dark:text-red-400 mt-0.5">
                      {leader.role}
                    </p>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1 font-mono">
                      {leader.credentials}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2 border-t border-zinc-100 dark:border-white/10">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 5. Our Concrete Commitments */}
      <ScrollReveal>
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
              // Accountability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Our Commitments to You
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Clear, practical standards that guide every interaction across our four service disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.audience}
                  className="rounded-3xl p-8 card-surface border border-zinc-200 dark:border-white/10 flex items-start gap-5 text-left group hover:border-red-500/40 transition-colors"
                >
                  <div className="p-3.5 rounded-2xl bg-red-600/10 dark:bg-red-500/15 border border-red-500/20 text-red-600 dark:text-red-400 shrink-0 mt-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                      {item.audience}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {item.promise}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* 6. Call to Action */}
      <ScrollReveal>
        <div className="card-surface rounded-3xl p-8 sm:p-14 text-center space-y-6 border border-zinc-200 dark:border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Ready to Work With Nivó?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Whether you need personalized academic mentorship, are preparing for senior engineering roles, or are recruiting verified educators for your campus.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2 relative z-10">
            <Link
              href="/education"
              className="brand-primary-btn px-6 py-3.5 rounded-xl text-xs gap-2"
            >
              <span>Explore Academic Tutoring</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/professional-courses"
              className="brand-secondary-btn px-6 py-3.5 rounded-xl text-xs gap-2"
            >
              <span>View Technical Cohorts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-4 py-3.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors font-semibold"
            >
              <span>Speak With an Academic Advisor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
