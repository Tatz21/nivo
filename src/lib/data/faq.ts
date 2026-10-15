export interface FAQItem {
  id: string;
  category: 'general' | 'education' | 'courses' | 'recruitment' | 'resume-studio';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'gen-1',
    category: 'general',
    question: 'What is Nivó and how long have you been operating?',
    answer: 'Nivó was established in 2020 as a modern education, professional training, and HR recruitment organization. We bridge learning and career opportunities through tailored academic coaching, industry-focused training tracks, specialized educator recruitment, and our first-party Resume Studio tool.'
  },
  {
    id: 'gen-2',
    category: 'general',
    question: 'Do I need an account to browse services or make an enquiry?',
    answer: 'No. Nivó is deliberately designed with no general visitor login requirement. You can explore all our services, curricula, recruitment capabilities, and submit enquiries freely.'
  },
  {
    id: 'edu-1',
    category: 'education',
    question: 'How do you match students with tutors or subject teachers?',
    answer: 'We evaluate the student’s current academic level, syllabus board, individual learning style, and specific focus areas. We then connect you with an experienced educator who specializes in that exact curriculum, offering either live interactive online tuition or home tuition where available.'
  },
  {
    id: 'edu-2',
    category: 'education',
    question: 'Are home tuitions available in all cities?',
    answer: 'Home tuition is currently available only in select verified operational zones where our background-verified faculty are physically located. For all other locations, our high-touch live online mentoring is accessible globally.'
  },
  {
    id: 'course-1',
    category: 'courses',
    question: 'Are your professional courses self-paced or mentor-led?',
    answer: 'All Nivó professional courses are mentor-led cohorts featuring weekly live interactive labs, code/design reviews, structured assignments, and capstone project defences. We believe real skills are developed through feedback, not passive video consumption.'
  },
  {
    id: 'course-2',
    category: 'courses',
    question: 'Will I receive a credential upon course completion?',
    answer: 'Yes. Students who successfully complete all module assignments and satisfactorily defend their final capstone project receive a verified Nivó Certificate of Completion detailing their competencies and repository deliverables.'
  },
  {
    id: 'rec-1',
    category: 'recruitment',
    question: 'How does Nivó vet educators for school and college recruitment?',
    answer: 'Our vetting process is rigorous. We verify academic credentials, conduct structured teaching demonstrations, evaluate classroom management and communication skills, and perform thorough reference checks before presenting candidate profiles to partner institutions.'
  },
  {
    id: 'rec-2',
    category: 'recruitment',
    question: 'Can educators submit their CV to Nivó for future openings?',
    answer: 'Yes! Certified teachers, college faculty, technical trainers, and creative instructors can submit their profiles via our Candidate Submission form. Our recruitment team reviews every profile and reaches out when matching institutional mandates arise.'
  },
  {
    id: 'res-1',
    category: 'resume-studio',
    question: 'What is Resume Studio and how does it protect my privacy?',
    answer: 'Resume Studio is our built-in application allowing you to create, import (from PDF/DOCX), edit, preview, and export ATS-compliant text-based PDF resumes. Unlike generic websites, your resume is protected using high-entropy access keys. Resumes are never public and are not indexed by search engines.'
  },
  {
    id: 'res-2',
    category: 'resume-studio',
    question: 'Can I export a real text-based vector PDF rather than an image screenshot?',
    answer: 'Yes. Resume Studio compiles your structured data into clean, selectable vector text with real typography and proper pagination, ensuring automated Applicant Tracking Systems (ATS) can parse your information without glitches.'
  }
];
