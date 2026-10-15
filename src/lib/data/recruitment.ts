export interface RecruitmentService {
  slug: string;
  title: string;
  subtitle: string;
  targetRoleTypes: string[];
  description: string;
  vettingProcess: string[];
  forClients: string;
  forEducators: string;
}

export const RECRUITMENT_SERVICES: RecruitmentService[] = [
  {
    slug: 'school-and-k12-educators',
    title: 'School & K-12 Educator Staffing',
    subtitle: 'Vetted kindergarten, primary, middle, and secondary subject teachers',
    targetRoleTypes: [
      'Early Childhood & Kindergarten Teachers',
      'Primary & Middle School Subject Specialists',
      'High School & Senior Secondary Faculty (STEM & Humanities)',
      'Special Education Needs (SEN) Educators',
      'School Academic Coordinators & Headmistresses'
    ],
    description: 'We partner with leading academic institutions, private academies, and school groups to place pedagogically sound, background-verified educators who bring energy and structured instruction to classrooms.',
    vettingProcess: [
      'Credential & educational verification audit',
      'Pedagogical demonstration and classroom management evaluation',
      'Subject-matter proficiency assessment',
      'Comprehensive reference and background check'
    ],
    forClients: 'Hire dedicated, passionate teaching talent with verified qualifications and proven student engagement capability.',
    forEducators: 'Connect with reputable schools offering respectful work environments, fair compensation, and professional growth.'
  },
  {
    slug: 'higher-ed-and-college-faculty',
    title: 'College Faculty & Higher Education Recruitment',
    subtitle: 'Assistant professors, lecturers, and academic researchers',
    targetRoleTypes: [
      'Assistant Professors & Associate Professors',
      'College Lecturers & Department Heads',
      'Visiting Industry Faculty & Guest Lecturers',
      'Laboratory Instructors & Academic Researchers'
    ],
    description: 'Connecting universities, degree colleges, and polytechnics with qualified subject-matter experts possessing postgraduate qualifications (M.Tech, M.Sc, M.Phil, Ph.D, NET/SET qualifications).',
    vettingProcess: [
      'Academic publication & research portfolio review',
      'University eligibility standards validation',
      'Lecturing delivery assessment and syllabus alignment',
      'Direct interview facilitation with institutional leadership'
    ],
    forClients: 'Streamline your faculty search with qualified candidates who satisfy academic board criteria and research requirements.',
    forEducators: 'Advance your academic career in forward-thinking universities and colleges with clear research support.'
  },
  {
    slug: 'technical-and-creative-trainers',
    title: 'Technical, AI & Creative Trainers',
    subtitle: 'Industry practitioners for bootcamps, institutes, and corporate programs',
    targetRoleTypes: [
      'Software Engineering & Cloud Trainers',
      'AI, Machine Learning & Data Science Instructors',
      'UI/UX & Product Design Mentors',
      'Creative Media, Video Editing & Motion Graphics Trainers',
      'Corporate Upskilling & Executive Workshop Leaders'
    ],
    description: 'Finding certified industry practitioners who can bridge the gap between textbook concepts and production software development, creative design, and technical engineering.',
    vettingProcess: [
      'Hands-on portfolio and live repository evaluation',
      'Curriculum breakdown and workshop demonstration',
      'Student feedback history and industry track record verification',
      'Instructional clarity and mentorship approach review'
    ],
    forClients: 'Upskill your workforce or staff your training institute with battle-tested engineers and designers who know how to teach.',
    forEducators: 'Monetize your deep industry experience through lucrative part-time, cohort, or full-time training contracts.'
  },
  {
    slug: 'arts-music-and-language-instructors',
    title: 'Arts, Music & Language Specialist Placement',
    subtitle: 'Fine artists, musicians, choreographers, and linguists',
    targetRoleTypes: [
      'Certified Foreign Language Instructors (French, German, Spanish, Japanese)',
      'Classical & Contemporary Vocalists & Instrumentalists',
      'Fine Arts, Painting & Visual Art Teachers',
      'Choreographers & Dance Instructors'
    ],
    description: 'Sourcing dedicated cultural and creative educators who inspire student creativity across international schools, cultural academies, and private learning centres.',
    vettingProcess: [
      'Performance showreel and studio portfolio review',
      'Language certification validation (CEFR, JLPT, DELE, Goethe)',
      'Pedagogical demonstration with age-appropriate lesson planning',
      'Personality and student empathy screening'
    ],
    forClients: 'Enrich your curriculum with talented cultural educators who nurture artistic and linguistic excellence.',
    forEducators: 'Find consistent, prestigious teaching positions that respect your artistic discipline and commitment.'
  },
  {
    slug: 'corporate-and-professional-staffing',
    title: 'Corporate & Professional Staffing',
    subtitle: 'Tailored talent acquisition for startups, enterprises, and growth teams',
    targetRoleTypes: [
      'Operations & Project Coordinators',
      'HR Specialists & Talent Partners',
      'Marketing & Digital Campaign Managers',
      'Customer Experience & Educational Counselors'
    ],
    description: 'High-touch recruitment for growth-oriented businesses seeking reliable, self-starting professionals who fit into existing company culture and execute immediately.',
    vettingProcess: [
      'Competency-based scenario interviews',
      'Past performance and reference auditing',
      'Culture and operational readiness assessment',
      'Compensation alignment and onboarding facilitation'
    ],
    forClients: 'Fill crucial talent gaps quickly with transparent timelines, no hidden recruitment markups, and qualified candidates.',
    forEducators: 'Explore exciting career opportunities within dynamic teams and established companies.'
  }
];
