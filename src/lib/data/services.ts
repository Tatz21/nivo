export interface EducationService {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  audience: string[];
  modes: string[];
  icon: string;
}

export const EDUCATION_SERVICES: EducationService[] = [
  {
    slug: 'foundational-and-k12',
    title: 'Foundational & K-12 Academic Learning',
    subtitle: 'Kindergarten through higher-secondary conceptual mastery',
    category: 'School Education',
    description: 'Personalized academic coaching structured to build genuine subject intuition, rigorous examination readiness, and disciplined study habits from early childhood through 12th standard.',
    features: [
      'Early childhood foundational literacy, numeracy & cognitive development',
      'Primary & middle school curriculum alignment (Math, Science, Social Studies, Languages)',
      'Secondary (9th-10th) board examination deep prep & problem sets',
      'Higher secondary (11th-12th) specialized streams (Science, Commerce, Humanities)',
      'Periodic benchmark assessments & personalized feedback loops'
    ],
    audience: ['Kindergarten to 12th-grade students', 'Parents seeking focused one-on-one mentorship'],
    modes: ['One-on-one Online Mentoring', 'Dedicated Home Tuition (selected zones)', 'Hybrid Academic Sessions'],
    icon: 'GraduationCap'
  },
  {
    slug: 'undergraduate-and-college',
    title: 'Undergraduate & College Subject Support',
    subtitle: 'Deep-dive academic mentorship for university courses',
    category: 'Higher Education',
    description: 'Advanced academic support designed for university scholars in engineering, computer science, commerce, economics, pure sciences, and humanities.',
    features: [
      'Core university syllabus breakdown & exam answer formatting',
      'Advanced calculus, statistics, engineering physics & chemistry',
      'Programming fundamentals, data structures & computational theory',
      'Financial accounting, business economics & corporate taxation',
      'Assignment support & research methodology guidance'
    ],
    audience: ['B.Tech/B.Sc/B.Com/BBA undergraduates', 'Post-graduate candidates seeking subject clarity'],
    modes: ['Live Interactive Online Cohorts', '1:1 Expert Mentorship'],
    icon: 'BookOpen'
  },
  {
    slug: 'languages-and-creative-arts',
    title: 'Languages & Creative Arts Academy',
    subtitle: 'Multilingual proficiency and expressive arts education',
    category: 'Creative & Global Skills',
    description: 'Immersive instruction in global languages alongside fine arts, drawing, classical & contemporary dance, and instrumental & vocal music taught by practicing artists.',
    features: [
      'Spoken & certified foreign language mastery (French, German, Spanish, Japanese)',
      'English fluency, phonetics, and academic writing labs',
      'Fine arts, sketching, acrylics, watercolours & visual perspective',
      'Classical & contemporary vocal and instrumental tuition (Keyboard, Guitar, Violin)',
      'Performance arts & foundational dance disciplines'
    ],
    audience: ['School learners', 'Adult enthusiasts & aspiring creative professionals'],
    modes: ['Studio Workshops', 'Online Guided Masterclasses', 'Private Tuition'],
    icon: 'Palette'
  },
  {
    slug: 'competitive-exam-prep',
    title: 'Competitive Examination Preparation',
    subtitle: 'Focused exam strategy and high-frequency problem workshops',
    category: 'Competitive Prep',
    description: 'Structured preparation programs led by veteran educators focused exclusively on syllabus mastery, time management, mock performance analytics, and error auditing.',
    features: [
      'Targeted topic breakdowns and high-yield question patterns',
      'Timed mock simulations with diagnostic performance reviews',
      'Formula synthesis notes & memory retention frameworks',
      'Small batch cohorts to ensure personal doubt resolution',
      'Psychological resilience and stress-reduction exam strategies'
    ],
    audience: ['Aspirants targeting national & regional entrance exams'],
    modes: ['Rigorous Online Bootcamps', 'Weekend Intensives'],
    icon: 'Target'
  }
];
