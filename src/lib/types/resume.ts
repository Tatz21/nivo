export type TemplateType = 'cosmic' | 'executive' | 'creative' | 'tech-mono';

export interface ResumePersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
}

export interface ResumeExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  highlights: string[];
}

export interface ResumeEducation {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
  highlights?: string[];
}

export interface ResumeProject {
  id: string;
  title: string;
  subtitle?: string;
  url?: string;
  description: string;
  technologies: string[];
}

export interface ResumeSkillCategory {
  id: string;
  categoryName: string;
  skills: string[];
}

export interface ResumeCertification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
}

export interface ResumeData {
  version: 1;
  id: string;
  accessKey: string;
  title: string;
  updatedAt: string;
  template: TemplateType;
  accentColor: string;
  personalInfo: ResumePersonalInfo;
  summary: string;
  experiences: ResumeExperience[];
  education: ResumeEducation[];
  skillCategories: ResumeSkillCategory[];
  projects: ResumeProject[];
  certifications: ResumeCertification[];
}
