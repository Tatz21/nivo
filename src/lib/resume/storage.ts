import { ResumeData } from '@/lib/types/resume';
import { SAMPLE_RESUME_DATA } from '@/lib/data/sampleResume';

const STORAGE_PREFIX = 'nivo_resume_';

/**
 * Generates a cryptographically random high-entropy access key.
 * Following PRD Section 7: "Never rely on a sequential or merely random document ID as the only protection."
 */
export function generateSecureAccessKey(): string {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const array = new Uint8Array(24);
    window.crypto.getRandomValues(array);
    const hex = Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
    return `nivo_sec_${hex}`;
  }
  return `nivo_sec_${Math.random().toString(36).substring(2)}${Date.now().toString(36)}`;
}

export function generateResumeId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `res-${timestamp}-${randomPart}`;
}

export function getLocalResume(resumeId: string): ResumeData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${resumeId}`);
    if (!raw) return null;
    return JSON.parse(raw) as ResumeData;
  } catch (err) {
    console.error('Failed to retrieve resume from localStorage', err);
    return null;
  }
}

export function saveLocalResume(data: ResumeData): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const updated: ResumeData = {
      ...data,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(`${STORAGE_PREFIX}${data.id}`, JSON.stringify(updated));
    // Also track list of local resume IDs for easy reopening
    const listRaw = localStorage.getItem('nivo_user_resumes') || '[]';
    const list: { id: string; title: string; updatedAt: string; accessKey: string }[] = JSON.parse(listRaw);
    const existingIdx = list.findIndex(item => item.id === data.id);
    const entry = { id: data.id, title: data.title || 'Untitled Resume', updatedAt: updated.updatedAt, accessKey: data.accessKey };
    if (existingIdx >= 0) {
      list[existingIdx] = entry;
    } else {
      list.unshift(entry);
    }
    localStorage.setItem('nivo_user_resumes', JSON.stringify(list.slice(0, 20)));
    return true;
  } catch (err) {
    console.error('Failed to save resume locally', err);
    return false;
  }
}

export function listLocalResumes(): { id: string; title: string; updatedAt: string; accessKey: string }[] {
  if (typeof window === 'undefined') return [];
  try {
    const listRaw = localStorage.getItem('nivo_user_resumes');
    if (!listRaw) return [];
    return JSON.parse(listRaw);
  } catch {
    return [];
  }
}

export function deleteLocalResume(resumeId: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${resumeId}`);
    const listRaw = localStorage.getItem('nivo_user_resumes') || '[]';
    const list = JSON.parse(listRaw).filter((item: { id: string }) => item.id !== resumeId);
    localStorage.setItem('nivo_user_resumes', JSON.stringify(list));
  } catch (err) {
    console.error('Failed to delete resume', err);
  }
}

export function createNewResume(title = 'New Resume', fromSample = true): ResumeData {
  const newId = generateResumeId();
  const accessKey = generateSecureAccessKey();
  
  if (fromSample) {
    const clone: ResumeData = JSON.parse(JSON.stringify(SAMPLE_RESUME_DATA));
    clone.id = newId;
    clone.accessKey = accessKey;
    clone.title = title || clone.title;
    clone.updatedAt = new Date().toISOString();
    saveLocalResume(clone);
    return clone;
  }

  const empty: ResumeData = {
    version: 1,
    id: newId,
    accessKey,
    title: title || 'Untitled Resume',
    updatedAt: new Date().toISOString(),
    template: 'cosmic',
    accentColor: '#6554F5',
    personalInfo: {
      fullName: '',
      jobTitle: '',
      email: '',
      phone: '',
      location: ''
    },
    summary: '',
    experiences: [],
    education: [],
    skillCategories: [],
    projects: [],
    certifications: []
  };

  saveLocalResume(empty);
  return empty;
}
