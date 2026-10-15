import { ResumeData } from '@/lib/types/resume';

export const SAMPLE_RESUME_DATA: ResumeData = {
  version: 1,
  id: 'demo-sample-01',
  accessKey: 'nivo_sec_demo_9824f1c7e4a19b8417',
  title: 'Senior Software Engineer & Technical Mentor',
  updatedAt: '2026-03-15T00:00:00.000Z',
  template: 'cosmic',
  accentColor: '#6554F5',
  personalInfo: {
    fullName: 'Alex Vance',
    jobTitle: 'Senior Full-Stack Engineer & Mentor',
    email: 'alex.vance@example.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    website: 'https://alexvance.dev',
    linkedin: 'linkedin.com/in/alexvance',
    github: 'github.com/alexvance'
  },
  summary: 'Results-driven software engineer with 6+ years building fault-tolerant distributed web applications and high-throughput microservices. Passionate technical educator who has mentored 40+ junior developers and delivered technical workshops on TypeScript and React architecture.',
  experiences: [
    {
      id: 'exp-1',
      role: 'Staff Frontend Architect',
      company: 'Aether Cloud Systems',
      location: 'San Francisco, CA',
      startDate: '2023',
      endDate: 'Present',
      current: true,
      highlights: [
        'Architected a multi-tenant enterprise dashboard serving 120,000+ monthly active users with sub-100ms response latencies.',
        'Spearheaded transition to Next.js App Router and tokenized design systems, cutting frontend bundle size by 38%.',
        'Led internal engineering mentorship circles, accelerating onboarding ramp time for 14 incoming engineers.'
      ]
    },
    {
      id: 'exp-2',
      role: 'Senior Full-Stack Developer',
      company: 'Novus Interactive',
      location: 'Austin, TX',
      startDate: '2020',
      endDate: '2023',
      current: false,
      highlights: [
        'Built real-time collaboration engines using WebSockets and Redis pub/sub handling 15,000 concurrent socket connections.',
        'Engineered automated CI/CD deployment pipelines on GCP and Docker, achieving 99.98% deployment uptime.',
        'Conducted over 80+ rigorous technical candidate interviews and helped scale the engineering division.'
      ]
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.S. in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      startDate: '2016',
      endDate: '2020',
      grade: '3.85 GPA — Honors',
      highlights: [
        'Teaching Assistant for CS 61B (Data Structures & Algorithms)',
        'President of the Open Source Developer Guild'
      ]
    }
  ],
  skillCategories: [
    {
      id: 'sk-1',
      categoryName: 'Languages & Core',
      skills: ['TypeScript', 'JavaScript (ESNext)', 'Python', 'Go', 'SQL', 'HTML5/CSS3']
    },
    {
      id: 'sk-2',
      categoryName: 'Frameworks & Libraries',
      skills: ['React 19', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'GraphQL']
    },
    {
      id: 'sk-3',
      categoryName: 'Infrastructure & Tools',
      skills: ['PostgreSQL', 'Redis', 'Docker', 'Google Cloud Platform', 'Git/GitHub', 'Playwright']
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'CosmicDB Studio',
      subtitle: 'Open-Source Distributed Database Visualizer',
      url: 'https://cosmicdb.dev',
      description: 'Built a lightweight web-based query analyzer and topology inspector for distributed database clusters with interactive node health monitoring.',
      technologies: ['TypeScript', 'React', 'D3.js', 'WebSockets', 'Tailwind']
    },
    {
      id: 'proj-2',
      title: 'HyperSpeed ATS Parser',
      subtitle: 'High-Accuracy Resume Validator',
      url: 'https://github.com/alexvance/ats-parser',
      description: 'Created a client-side parser that validates PDF resume AST text streams against standard Applicant Tracking System heuristic rules.',
      technologies: ['TypeScript', 'PDF.js', 'Node.js']
    }
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      issueDate: '2024',
      credentialUrl: 'https://aws.amazon.com/verification'
    }
  ]
};
