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
    title: '1-on-1 Foundational & K-12 Student Tuition',
    subtitle: 'Private one-to-one coaching from early childhood through 12th standard',
    category: 'School Education',
    description: 'Dedicated one-to-one academic coaching designed around the individual child. We replace the stress of crowded tuition centers with patient concept instruction, personalized diagnostic roadmaps, and disciplined study habits.',
    features: [
      'One dedicated educator to one student with undivided attention',
      'Personalized learning pacing matched directly to your child\'s speed',
      'Primary and middle school conceptual foundations (Math, Science, Social Studies, English)',
      'Cambridge IGCSE, Cambridge A-Levels, IB Diploma, and CBSE board exam prep',
      'Regular one-on-one progress debriefs with parents on conceptual milestones'
    ],
    audience: ['Kindergarten to 12th-grade students', 'Parents seeking dedicated one-on-one private tuition'],
    modes: ['One-on-one Online Mentoring', 'Dedicated Home Tuition (selected zones)', 'Hybrid Academic Sessions'],
    icon: 'GraduationCap'
  },
  {
    slug: 'undergraduate-and-college',
    title: '1-on-1 Undergraduate & College STEM Support',
    subtitle: 'Private one-to-one subject mentorship for demanding university courses',
    category: 'Higher Education',
    description: 'Personalized one-to-one technical tutoring for university students tackling advanced calculus, engineering mechanics, computer science theory, physics, and economics.',
    features: [
      'One-on-one deep dives into complex university theorem proofs and problem sets',
      'Direct code debugging and algorithmic walkthroughs in data structures',
      'Advanced calculus, differential equations, and computational mathematics',
      'University past-paper walkthroughs and exam strategy guidance',
      'Dedicated faculty matching based on your university degree track'
    ],
    audience: ['B.Tech, B.Sc, B.Com, and BBA undergraduates', 'Post-graduate candidates seeking subject clarity'],
    modes: ['1:1 Expert Live Online Mentorship', 'Private Study Cohorts'],
    icon: 'BookOpen'
  },
  {
    slug: 'languages-and-creative-arts',
    title: '1-on-1 Languages & Creative Arts Academy',
    subtitle: 'Individualized instruction in world languages and expressive arts',
    category: 'Creative & Global Skills',
    description: 'Immersive one-to-one instruction in global languages alongside fine arts, drawing, classical and contemporary dance, and instrumental music taught by practicing artists.',
    features: [
      'One-on-one conversational foreign language coaching (French, German, Spanish, Japanese)',
      'English fluency, phonetics, and academic writing labs',
      'Fine arts, sketching, acrylics, watercolours, and visual perspective',
      'Private vocal and instrumental tuition (Keyboard, Guitar, Violin)',
      'Personalized artistic portfolio development for creative school admissions'
    ],
    audience: ['School learners seeking private arts tuition', 'Adult enthusiasts and aspiring creative professionals'],
    modes: ['Studio Workshops', 'Online Guided Masterclasses', 'Private 1:1 Tuition'],
    icon: 'Palette'
  },
  {
    slug: 'competitive-exam-prep',
    title: '1-on-1 Competitive Examination Coaching',
    subtitle: 'Individualized exam strategy and high-frequency problem walkthroughs',
    category: 'Competitive Prep',
    description: 'Targeted one-to-one exam preparation led by veteran educators. Focus exclusively on the specific problem types, time-budgeting weaknesses, and error patterns of the individual student.',
    features: [
      'One-to-one diagnostic audit of previous mock scores and error patterns',
      'Targeted topic breakdowns and high-yield question patterns',
      'Timed mock simulations with personal performance reviews',
      'Formula synthesis notes and memory retention frameworks',
      'Stress reduction and focused psychological exam strategies'
    ],
    audience: ['Students targeting national, regional, and international entrance exams'],
    modes: ['Rigorous 1:1 Online Bootcamps', 'Weekend Intensives'],
    icon: 'Target'
  }
];
