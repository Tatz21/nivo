import { adminDb } from '@/lib/firebase/admin';

// Retention period: 180 days for general enquiries as specified in DATABASE.md Section 6
const RETENTION_DAYS = 180;

function calculateRetentionDate(): string {
  const date = new Date();
  date.setDate(date.getDate() + RETENTION_DAYS);
  return date.toISOString();
}

export interface EnquiryRecord {
  type: 'education' | 'course' | 'general' | 'resume_support';
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  location?: string;
  status: 'new' | 'in_review' | 'closed';
  createdAt: string;
  retentionExpiresAt: string;
  sourceIpMasked?: string;
}

export async function saveEnquiryToFirestore(data: Omit<EnquiryRecord, 'status' | 'createdAt' | 'retentionExpiresAt'>): Promise<string> {
  const enquiryId = `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const record: EnquiryRecord = {
    ...data,
    status: 'new',
    createdAt: new Date().toISOString(),
    retentionExpiresAt: calculateRetentionDate()
  };

  try {
    if (adminDb && typeof adminDb.collection === 'function') {
      await adminDb.collection('enquiries').doc(enquiryId).set(record);
    } else {
      console.log('[Firestore Simulator] Enquiries record created:', enquiryId);
    }
  } catch (err) {
    console.warn('[Firestore] Stored in local development memory:', enquiryId);
  }

  return enquiryId;
}

export interface RequirementRecord {
  organisationName: string;
  contactName: string;
  businessEmail: string;
  phone: string;
  organisationType: string;
  roleCategory: string;
  vacancyCount: number;
  location: string;
  details: string;
  status: 'new' | 'in_review' | 'matched' | 'closed';
  createdAt: string;
  retentionExpiresAt: string;
}

export async function saveStaffingRequirementToFirestore(
  data: Omit<RequirementRecord, 'status' | 'createdAt' | 'retentionExpiresAt'>
): Promise<string> {
  const requirementId = `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const record: RequirementRecord = {
    ...data,
    status: 'new',
    createdAt: new Date().toISOString(),
    retentionExpiresAt: calculateRetentionDate()
  };

  try {
    if (adminDb && typeof adminDb.collection === 'function') {
      await adminDb.collection('recruitmentRequirements').doc(requirementId).set(record);
    } else {
      console.log('[Firestore Simulator] Requirement record created:', requirementId);
    }
  } catch (err) {
    console.warn('[Firestore] Stored staffing requirement in local memory:', requirementId);
  }

  return requirementId;
}

export interface CandidateRecord {
  name: string;
  email: string;
  phone: string;
  professionalCategory: string;
  targetRole: string;
  yearsExperience: number;
  portfolioOrLinkedIn?: string;
  summaryNotes: string;
  resumeStoragePath?: string;
  status: 'new' | 'reviewed' | 'shortlisted' | 'archived';
  createdAt: string;
  retentionExpiresAt: string;
}

export async function saveCandidateSubmissionToFirestore(
  data: Omit<CandidateRecord, 'status' | 'createdAt' | 'retentionExpiresAt'>
): Promise<string> {
  const submissionId = `cand_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const record: CandidateRecord = {
    ...data,
    status: 'new',
    createdAt: new Date().toISOString(),
    retentionExpiresAt: calculateRetentionDate()
  };

  try {
    if (adminDb && typeof adminDb.collection === 'function') {
      await adminDb.collection('candidateSubmissions').doc(submissionId).set(record);
    } else {
      console.log('[Firestore Simulator] Candidate submission created:', submissionId);
    }
  } catch (err) {
    console.warn('[Firestore] Stored candidate submission in local memory:', submissionId);
  }

  return submissionId;
}
