import { z } from 'zod';

export const educationEnquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  educationLevel: z.string().min(1, 'Please select an education level'),
  subjectOrArea: z.string().min(2, 'Please specify the subject or domain'),
  deliveryMode: z.string().min(1, 'Please choose a preferred delivery mode'),
  locationCity: z.string().optional(),
  notes: z.string().max(1000, 'Notes cannot exceed 1000 characters').optional(),
});

export const courseEnquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  courseId: z.string().min(1, 'Please select a course'),
  currentExperience: z.enum(['student', 'entry-level', 'mid-career', 'career-switcher']),
  preferredSchedule: z.enum(['weekdays', 'weekends', 'flexible']),
  notes: z.string().max(1000).optional(),
});

export const staffingRequirementSchema = z.object({
  organizationName: z.string().min(2, 'Organization name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(7, 'Valid phone number is required'),
  organizationType: z.enum(['school', 'college', 'training-center', 'corporate', 'edtech']),
  roleCategory: z.enum(['school-teacher', 'specialist-educator', 'college-faculty', 'tech-trainer', 'creative-trainer', 'corporate-staff']),
  positionsCount: z.coerce.number().min(1, 'Must specify at least 1 position'),
  location: z.string().min(2, 'Location is required'),
  targetStartDate: z.string().min(1, 'Target timeline is required'),
  jobDescriptionNotes: z.string().min(10, 'Please provide brief details of the requirement'),
});

export const candidateSubmissionSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(7, 'Valid phone number is required'),
  primaryPillar: z.enum(['education', 'professional-trainer', 'corporate-professional']),
  targetRole: z.string().min(2, 'Target role is required'),
  yearsExperience: z.coerce.number().min(0, 'Years of experience required'),
  portfolioOrLinkedIn: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  summaryNotes: z.string().min(10, 'Please share a brief summary of your qualifications'),
  resumeFileName: z.string().optional(),
});

export const generalContactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
