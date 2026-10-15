export interface ProfessionalCourse {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  track: string;
  level: string;
  duration: string;
  description: string;
  learningOutcomes: string[];
  syllabusModules: {
    week: string;
    title: string;
    topics: string[];
  }[];
  prerequisites: string;
  idealFor: string[];
}

export const PROFESSIONAL_COURSES: ProfessionalCourse[] = [
  {
    id: 'course-coding-fullstack',
    slug: 'software-engineering-fullstack',
    title: 'Modern Full-Stack Software Engineering',
    subtitle: 'From core computational logic to scalable cloud-native architectures',
    track: 'Engineering & Technology',
    level: 'Beginner to Intermediate',
    duration: '16 Weeks Intensive',
    description: 'A comprehensive curriculum covering software architecture, modern TypeScript, Next.js, distributed databases, REST & GraphQL APIs, automated testing, and CI/CD pipelines.',
    learningOutcomes: [
      'Write clean, modular, production-tested TypeScript and React code',
      'Architect robust relational and NoSQL database schemas with secure access layers',
      'Deploy resilient containerized services with automated verification',
      'Build real-world multi-tier applications ready for technical code review'
    ],
    syllabusModules: [
      {
        week: 'Weeks 1-4',
        title: 'Core Foundations & Modern Web Architecture',
        topics: ['Advanced JavaScript/TypeScript', 'Functional & Object-Oriented paradigms', 'DOM & Network lifecycle', 'Modern Git & team workflows']
      },
      {
        week: 'Weeks 5-8',
        title: 'Frontend Systems & State Engineering',
        topics: ['React 19 internals & Server Components', 'Next.js App Router', 'Tailwind & Design Systems', 'Accessible UI & keyboard navigation']
      },
      {
        week: 'Weeks 9-12',
        title: 'Backend Services, Databases & Security',
        topics: ['Node.js runtime & RESTful endpoints', 'PostgreSQL & Firestore data modelling', 'JWT/OAuth authentication', 'Rate limiting & API security']
      },
      {
        week: 'Weeks 13-16',
        title: 'Production Capstone, DevOps & Deployment',
        topics: ['End-to-end testing with Playwright', 'Docker & serverless deployment', 'Performance budgeting & Core Web Vitals', 'Portfolio capstone defence']
      }
    ],
    prerequisites: 'Basic computer literacy and enthusiasm for structured problem-solving. Prior coding experience helpful but not required.',
    idealFor: ['Aspiring software engineers', 'Career switchers targeting developer roles', 'Technical founders']
  },
  {
    id: 'course-ai-ml',
    slug: 'artificial-intelligence-machine-learning',
    title: 'Applied AI & Machine Learning Engineering',
    subtitle: 'Practical neural systems, LLM application architecture, and data engineering',
    track: 'Artificial Intelligence',
    level: 'Intermediate',
    duration: '14 Weeks Intensive',
    description: 'Bridge the gap between academic machine learning theory and shipping real-world AI applications. Master Python data science stacks, neural architectures, retrieval-augmented generation (RAG), and model evaluation.',
    learningOutcomes: [
      'Master data preparation, statistical inference and feature engineering in Python',
      'Train, fine-tune and evaluate classical ML and deep learning models',
      'Architect enterprise RAG pipelines with vector databases and evaluation harnesses',
      'Deploy quantized models with cost-efficient inference APIs'
    ],
    syllabusModules: [
      {
        week: 'Weeks 1-3',
        title: 'Data Science & Mathematical Intuition',
        topics: ['NumPy, Pandas & exploratory analysis', 'Linear algebra & probability essentials', 'Feature scaling and data sanitization']
      },
      {
        week: 'Weeks 4-7',
        title: 'Supervised & Unsupervised Machine Learning',
        topics: ['Regression, classification & ensemble models', 'Cross-validation & hyperparameter tuning', 'Scikit-learn production pipelines']
      },
      {
        week: 'Weeks 8-11',
        title: 'Deep Learning & Foundation Models',
        topics: ['PyTorch neural network mechanics', 'Embeddings, transformers & attention', 'Fine-tuning open weights & prompt engineering']
      },
      {
        week: 'Weeks 12-14',
        title: 'Enterprise AI Architecture & Agents',
        topics: ['RAG architecture with pgvector & Pinecone', 'Agentic workflows & tool calling', 'Model safety, evaluation & latency optimization']
      }
    ],
    prerequisites: 'Comfortable with foundational programming concepts (Python or JavaScript) and high-school mathematics.',
    idealFor: ['Software developers upskilling to AI', 'Data analysts', 'Product engineers building intelligent workflows']
  },
  {
    id: 'course-ui-ux',
    slug: 'ui-ux-product-design',
    title: 'UI/UX & Modern Product Design',
    subtitle: 'Human-centred research, design systems, and high-fidelity interactive prototypes',
    track: 'Design & Creative',
    level: 'Beginner to Intermediate',
    duration: '12 Weeks',
    description: 'Learn how to transform ambiguous user problems into validated, visually breathtaking digital products. Master Figma, tokenized design systems, accessibility standards (WCAG 2.2), and usability auditing.',
    learningOutcomes: [
      'Conduct rigorous qualitative and quantitative user research interviews',
      'Construct scalable design systems with multi-brand design tokens in Figma',
      'Design accessible, responsive web and mobile interfaces that meet WCAG 2.2 AA',
      'Present design decisions convincingly to engineering and business stakeholders'
    ],
    syllabusModules: [
      {
        week: 'Weeks 1-3',
        title: 'Research, Information Architecture & Discovery',
        topics: ['User interviews & heuristic evaluations', 'Journey mapping & service blueprints', 'Information architecture & wireframing']
      },
      {
        week: 'Weeks 4-6',
        title: 'Visual Hierarchy, Typography & Layout',
        topics: ['Colour theory & editorial typography', 'Spatial rhythm & micro-interactions', 'Dark mode & brand token systems']
      },
      {
        week: 'Weeks 7-9',
        title: 'Advanced Figma & Component Engineering',
        topics: ['Auto-layout 5.0, variables & component sets', 'Interactive prototyping & conditional states', 'Developer handoff specs']
      },
      {
        week: 'Weeks 10-12',
        title: 'Usability Testing & Portfolio Capstone',
        topics: ['Unmoderated & moderated usability testing', 'Accessibility auditing (contrast, focus states)', 'Crafting an industry-ready case study']
      }
    ],
    prerequisites: 'No technical coding knowledge required; an eye for visual detail and passion for user empathy.',
    idealFor: ['Graphic designers transitioning to product design', 'Marketers & founders', 'Aspiring UX professionals']
  },
  {
    id: 'course-creative-production',
    slug: 'video-editing-creative-production',
    title: 'Creative Video Production & Motion Design',
    subtitle: 'Cinematic storytelling, motion graphics, and editorial pacing',
    track: 'Creative Media',
    level: 'Beginner to Intermediate',
    duration: '10 Weeks',
    description: 'Master the craft of commercial video editing, sound design, colour grading, and motion graphics. Work with industry-standard NLE software, kinetic typography, and multi-camera post-production.',
    learningOutcomes: [
      'Master timeline pacing, narrative arcs, and dynamic audio mastering',
      'Design kinetic typography and brand motion assets in After Effects',
      'Execute professional colour grading and LUT workflows',
      'Deliver optimized assets for social campaigns, corporate films, and documentaries'
    ],
    syllabusModules: [
      {
        week: 'Weeks 1-2',
        title: 'Editorial Principles & Storytelling',
        topics: ['Narrative pacing & cut types', 'Media management & ingest pipelines', 'Rough cut to fine cut workflows']
      },
      {
        week: 'Weeks 3-5',
        title: 'Motion Graphics & Kinetic Systems',
        topics: ['Keyframe interpolation & easing curves', 'Logo animation & lower thirds', 'Dynamic text tracking & masking']
      },
      {
        week: 'Weeks 6-8',
        title: 'Sound Design & Colour Grading',
        topics: ['Audio balancing, EQ & dialogue cleanup', 'Scopes, colour spaces & CDL', 'Stylized commercial looks']
      },
      {
        week: 'Weeks 9-10',
        title: 'Commercial Deliverables & Showreel',
        topics: ['Multi-platform aspect ratio deliverables', 'Client revision management', 'Polished personal director showreel']
      }
    ],
    prerequisites: 'A workstation capable of running modern video editing software.',
    idealFor: ['Content creators', 'Marketing specialists', 'Aspiring commercial video editors']
  },
  {
    id: 'course-digital-marketing',
    slug: 'digital-marketing-growth-strategy',
    title: 'Digital Marketing & Growth Strategy',
    subtitle: 'Data-driven performance marketing, SEO architecture, and brand strategy',
    track: 'Business & Growth',
    level: 'All Levels',
    duration: '10 Weeks',
    description: 'Develop comprehensive acquisition and retention marketing engines. Learn organic search optimization, paid media efficiency, conversion rate optimization (CRO), and attribution modeling.',
    learningOutcomes: [
      'Build end-to-end organic search and technical SEO content hubs',
      'Structure paid search and paid social campaigns with clear ROI benchmarks',
      'Set up web analytics, event tracking, and customer conversion funnels',
      'Formulate retention and lifecycle email marketing workflows'
    ],
    syllabusModules: [
      {
        week: 'Weeks 1-3',
        title: 'Brand Positioning & Audience Research',
        topics: ['Customer persona development', 'Value proposition design', 'Competitor audits & category benchmarking']
      },
      {
        week: 'Weeks 4-6',
        title: 'Search Engine Optimization & Content Systems',
        topics: ['Technical SEO, crawlability & schema', 'Keyword intent mapping & content hubs', 'Authority building & PR outreach']
      },
      {
        week: 'Weeks 7-8',
        title: 'Performance Marketing & Paid Acquisition',
        topics: ['Meta Ads & Google Ads campaign setup', 'Creative testing frameworks', 'Budget pacing and ROAS analysis']
      },
      {
        week: 'Weeks 9-10',
        title: 'Analytics, Retention & CRO',
        topics: ['GA4 event tagging & dashboarding', 'A/B landing page testing', 'Lifecycle email automations']
      }
    ],
    prerequisites: 'Basic analytical mind and interest in consumer psychology.',
    idealFor: ['Marketing professionals', 'Small business owners', 'Entrepreneurs looking to scale acquisition']
  }
];
