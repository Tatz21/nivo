export type EducationLevel = 
  | 'kindergarten'
  | 'primary'
  | 'middle'
  | 'secondary'
  | 'higher-secondary'
  | 'college-undergrad'
  | 'college-postgrad'
  | 'competitive-exams'
  | 'languages'
  | 'creative-arts';

export type DeliveryMode = 'online' | 'home-tuition' | 'hybrid' | 'institutional';

export interface EducationEnquiryInput {
  name: string;
  email: string;
  phone: string;
  educationLevel: EducationLevel;
  subjectOrArea: string;
  deliveryMode: DeliveryMode;
  locationCity?: string;
  notes?: string;
}

export interface CourseEnquiryInput {
  name: string;
  email: string;
  phone: string;
  courseId: string;
  currentExperience: 'student' | 'entry-level' | 'mid-career' | 'career-switcher';
  preferredSchedule: 'weekdays' | 'weekends' | 'flexible';
  notes?: string;
}

export interface StaffingRequirementInput {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  organizationType: 'school' | 'college' | 'training-center' | 'corporate' | 'edtech';
  roleCategory: 'school-teacher' | 'specialist-educator' | 'college-faculty' | 'tech-trainer' | 'creative-trainer' | 'corporate-staff';
  positionsCount: number;
  location: string;
  targetStartDate: string;
  jobDescriptionNotes: string;
}

export interface CandidateSubmissionInput {
  fullName: string;
  email: string;
  phone: string;
  primaryPillar: 'education' | 'professional-trainer' | 'corporate-professional';
  targetRole: string;
  yearsExperience: number;
  portfolioOrLinkedIn?: string;
  summaryNotes: string;
  resumeFileName?: string;
}

export interface GeneralContactInput {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
