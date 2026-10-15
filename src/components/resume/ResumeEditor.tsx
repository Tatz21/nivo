'use client';

import React, { useState, useEffect } from 'react';
import { ResumeData, TemplateType } from '@/lib/types/resume';
import { saveLocalResume } from '@/lib/resume/storage';
import { exportResumeToPDF } from '@/lib/resume/pdfExport';
import ResumePreview from '@/components/resume/ResumePreview';
import { 
  Download, Save, Key, Layout, Palette, User, FileText, 
  Briefcase, GraduationCap, Wrench, FolderGit2, Award, 
  Plus, Trash2, CheckCircle2, Copy, Sparkles, ZoomIn, ZoomOut
} from 'lucide-react';

interface ResumeEditorProps {
  initialData: ResumeData;
}

export default function ResumeEditor({ initialData }: ResumeEditorProps) {
  const [resume, setResume] = useState<ResumeData>(initialData);
  const [activeSection, setActiveSection] = useState<'personal' | 'summary' | 'experience' | 'education' | 'skills' | 'projects' | 'certifications'>('personal');
  const [scale, setScale] = useState(0.85);
  const [savedNotice, setSavedNotice] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  // Auto-save on edits
  useEffect(() => {
    saveLocalResume(resume);
  }, [resume]);

  const handleSave = () => {
    saveLocalResume(resume);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  const handleExportPDF = () => {
    exportResumeToPDF(resume);
  };

  const copyAccessKey = () => {
    navigator.clipboard.writeText(resume.accessKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  // Section managers
  const addExperience = () => {
    const newExp = {
      id: `exp-${Date.now()}`,
      role: 'Role / Job Title',
      company: 'Organization Name',
      location: 'City, Country',
      startDate: '2023',
      endDate: 'Present',
      current: true,
      highlights: ['Key measurable accomplishment or responsibility.']
    };
    setResume({ ...resume, experiences: [newExp, ...resume.experiences] });
  };

  const removeExperience = (id: string) => {
    setResume({ ...resume, experiences: resume.experiences.filter(e => e.id !== id) });
  };

  const addEducation = () => {
    const newEdu = {
      id: `edu-${Date.now()}`,
      degree: 'Degree or Diploma Name',
      institution: 'University / College',
      location: 'City',
      startDate: '2020',
      endDate: '2024',
      grade: 'Honors / GPA',
      highlights: []
    };
    setResume({ ...resume, education: [...resume.education, newEdu] });
  };

  const removeEducation = (id: string) => {
    setResume({ ...resume, education: resume.education.filter(e => e.id !== id) });
  };

  const addSkillCategory = () => {
    const newCat = {
      id: `cat-${Date.now()}`,
      categoryName: 'Skill Domain',
      skills: ['Skill 1', 'Skill 2', 'Skill 3']
    };
    setResume({ ...resume, skillCategories: [...resume.skillCategories, newCat] });
  };

  const removeSkillCategory = (id: string) => {
    setResume({ ...resume, skillCategories: resume.skillCategories.filter(c => c.id !== id) });
  };

  const addProject = () => {
    const newProj = {
      id: `proj-${Date.now()}`,
      title: 'Project Name',
      subtitle: 'Brief Tagline',
      url: 'https://...',
      description: 'Overview of deliverables, architecture, and impact.',
      technologies: ['Tech 1', 'Tech 2']
    };
    setResume({ ...resume, projects: [...resume.projects, newProj] });
  };

  const removeProject = (id: string) => {
    setResume({ ...resume, projects: resume.projects.filter(p => p.id !== id) });
  };

  const addCertification = () => {
    const newCert = {
      id: `cert-${Date.now()}`,
      name: 'Certification Name',
      issuer: 'Issuing Organization',
      issueDate: '2025'
    };
    setResume({ ...resume, certifications: [...resume.certifications, newCert] });
  };

  const removeCertification = (id: string) => {
    setResume({ ...resume, certifications: resume.certifications.filter(c => c.id !== id) });
  };

  return (
    <div className="min-h-screen bg-[#0d0c15] text-white flex flex-col pt-20">
      
      {/* Top Action Bar */}
      <div className="bg-[#161526] border-b border-white/10 px-4 py-3 sticky top-16 z-30 flex flex-wrap items-center justify-between gap-4">
        
        {/* Title & Saved status */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={resume.title}
            onChange={(e) => setResume({ ...resume, title: e.target.value })}
            className="bg-transparent font-bold text-sm sm:text-base border-b border-transparent hover:border-white/20 focus:border-violet-500 focus:outline-none px-1 py-0.5"
          />
          {savedNotice && (
            <span className="flex items-center gap-1 text-[11px] text-lime-400 bg-lime-950/40 px-2 py-0.5 rounded">
              <CheckCircle2 className="w-3 h-3" /> Saved Locally
            </span>
          )}
        </div>

        {/* Template & Color controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-[#11111B] p-1 rounded-lg border border-white/10 text-xs">
            <Layout className="w-3.5 h-3.5 text-zinc-400 ml-1" />
            {(['cosmic', 'executive', 'creative'] as TemplateType[]).map((t) => (
              <button
                key={t}
                onClick={() => setResume({ ...resume, template: t })}
                className={`px-2.5 py-1 rounded text-xs capitalize transition-colors ${
                  resume.template === t ? 'bg-violet-600 text-white font-medium' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 bg-[#11111B] p-1.5 rounded-lg border border-white/10">
            <Palette className="w-3.5 h-3.5 text-zinc-400" />
            {['#6554F5', '#A78BFA', '#2563EB', '#059669', '#E11D48', '#111827'].map((c) => (
              <button
                key={c}
                onClick={() => setResume({ ...resume, accentColor: c })}
                className={`w-4 h-4 rounded-full transition-transform ${
                  resume.accentColor === c ? 'scale-125 ring-2 ring-white' : 'opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: c }}
                title={`Accent ${c}`}
              />
            ))}
          </div>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowKeyModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-300 font-medium transition-colors"
            title="View secure cryptographic access key"
          >
            <Key className="w-3.5 h-3.5 text-lime-400" />
            <span className="hidden md:inline">Access Key</span>
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-200 font-medium transition-colors"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save</span>
          </button>

          <button
            onClick={handleExportPDF}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg cosmic-glow-btn text-xs font-semibold text-white shadow-md cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-lime-300" />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      {/* 3-Region Workspace Layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Region: Section Navigation & Field Editor */}
        <div className="w-full lg:w-[460px] xl:w-[500px] border-r border-white/10 bg-[#141322] flex flex-col shrink-0 max-h-[calc(100vh-120px)] overflow-y-auto">
          
          {/* Section Selector Tabs */}
          <div className="flex overflow-x-auto p-2 bg-[#100f1c] border-b border-white/5 gap-1 scrollbar-none text-xs">
            <button
              onClick={() => setActiveSection('personal')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeSection === 'personal' ? 'bg-violet-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>

            <button
              onClick={() => setActiveSection('summary')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeSection === 'summary' ? 'bg-violet-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Summary</span>
            </button>

            <button
              onClick={() => setActiveSection('experience')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeSection === 'experience' ? 'bg-violet-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </button>

            <button
              onClick={() => setActiveSection('education')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeSection === 'education' ? 'bg-violet-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveSection('skills')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeSection === 'skills' ? 'bg-violet-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Skills</span>
            </button>

            <button
              onClick={() => setActiveSection('projects')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeSection === 'projects' ? 'bg-violet-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Projects</span>
            </button>

            <button
              onClick={() => setActiveSection('certifications')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeSection === 'certifications' ? 'bg-violet-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Certificates</span>
            </button>
          </div>

          {/* Form Content per section */}
          <div className="p-6 space-y-5">
            {/* Personal Info */}
            {activeSection === 'personal' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact & Personal Details</h3>
                  <span className="text-[10px] text-zinc-400">ATS Primary Header</span>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    value={resume.personalInfo.fullName}
                    onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, fullName: e.target.value } })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0e0d17] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Target Professional Title</label>
                  <input
                    type="text"
                    value={resume.personalInfo.jobTitle}
                    onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, jobTitle: e.target.value } })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0e0d17] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Email</label>
                    <input
                      type="email"
                      value={resume.personalInfo.email}
                      onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, email: e.target.value } })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0e0d17] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Phone</label>
                    <input
                      type="text"
                      value={resume.personalInfo.phone}
                      onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, phone: e.target.value } })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0e0d17] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Location (City, Country)</label>
                    <input
                      type="text"
                      value={resume.personalInfo.location}
                      onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, location: e.target.value } })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0e0d17] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Portfolio / Website</label>
                    <input
                      type="text"
                      value={resume.personalInfo.website || ''}
                      onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, website: e.target.value } })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0e0d17] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">LinkedIn Profile</label>
                    <input
                      type="text"
                      value={resume.personalInfo.linkedin || ''}
                      onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, linkedin: e.target.value } })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0e0d17] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">GitHub / Code Link</label>
                    <input
                      type="text"
                      value={resume.personalInfo.github || ''}
                      onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, github: e.target.value } })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0e0d17] border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Summary */}
            {activeSection === 'summary' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Professional Summary</h3>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Highlight key years of experience, core domains, and major leadership or technical contributions.
                </p>
                <textarea
                  rows={6}
                  value={resume.summary}
                  onChange={(e) => setResume({ ...resume, summary: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#0e0d17] border border-white/10 text-white text-xs leading-relaxed focus:outline-none focus:border-violet-500"
                />
              </div>
            )}

            {/* Experience */}
            {activeSection === 'experience' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Work Experience</h3>
                  <button
                    onClick={addExperience}
                    className="flex items-center gap-1 text-xs text-lime-400 hover:text-lime-300 font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Position</span>
                  </button>
                </div>

                {resume.experiences.map((exp, index) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-[#0e0d17] border border-white/10 space-y-3 relative">
                    <button
                      onClick={() => removeExperience(exp.id)}
                      className="absolute top-3 right-3 text-zinc-500 hover:text-rose-400 p-1"
                      title="Remove position"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="text-[11px] font-bold text-violet-400 uppercase tracking-wider">
                      Position #{index + 1}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">Role Title</label>
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) => {
                            const updated = [...resume.experiences];
                            updated[index].role = e.target.value;
                            setResume({ ...resume, experiences: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">Company</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => {
                            const updated = [...resume.experiences];
                            updated[index].company = e.target.value;
                            setResume({ ...resume, experiences: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">Start Year</label>
                        <input
                          type="text"
                          value={exp.startDate}
                          onChange={(e) => {
                            const updated = [...resume.experiences];
                            updated[index].startDate = e.target.value;
                            setResume({ ...resume, experiences: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">End Year</label>
                        <input
                          type="text"
                          value={exp.endDate}
                          onChange={(e) => {
                            const updated = [...resume.experiences];
                            updated[index].endDate = e.target.value;
                            setResume({ ...resume, experiences: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">Location</label>
                        <input
                          type="text"
                          value={exp.location}
                          onChange={(e) => {
                            const updated = [...resume.experiences];
                            updated[index].location = e.target.value;
                            setResume({ ...resume, experiences: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-zinc-400 mb-1">Bullet Achievements (one per line)</label>
                      <textarea
                        rows={3}
                        value={exp.highlights.join('\n')}
                        onChange={(e) => {
                          const updated = [...resume.experiences];
                          updated[index].highlights = e.target.value.split('\n');
                          setResume({ ...resume, experiences: updated });
                        }}
                        className="w-full p-2 rounded bg-[#161526] border border-white/10 text-white text-xs leading-relaxed"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {activeSection === 'education' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Academic Qualifications</h3>
                  <button
                    onClick={addEducation}
                    className="flex items-center gap-1 text-xs text-lime-400 hover:text-lime-300 font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Degree</span>
                  </button>
                </div>

                {resume.education.map((edu, index) => (
                  <div key={edu.id} className="p-4 rounded-xl bg-[#0e0d17] border border-white/10 space-y-3 relative">
                    <button
                      onClick={() => removeEducation(edu.id)}
                      className="absolute top-3 right-3 text-zinc-500 hover:text-rose-400 p-1"
                      title="Remove education"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">Degree / Major</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => {
                            const updated = [...resume.education];
                            updated[index].degree = e.target.value;
                            setResume({ ...resume, education: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">Institution</label>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => {
                            const updated = [...resume.education];
                            updated[index].institution = e.target.value;
                            setResume({ ...resume, education: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">Start Year</label>
                        <input
                          type="text"
                          value={edu.startDate}
                          onChange={(e) => {
                            const updated = [...resume.education];
                            updated[index].startDate = e.target.value;
                            setResume({ ...resume, education: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">End Year</label>
                        <input
                          type="text"
                          value={edu.endDate}
                          onChange={(e) => {
                            const updated = [...resume.education];
                            updated[index].endDate = e.target.value;
                            setResume({ ...resume, education: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">GPA / Honors</label>
                        <input
                          type="text"
                          value={edu.grade || ''}
                          onChange={(e) => {
                            const updated = [...resume.education];
                            updated[index].grade = e.target.value;
                            setResume({ ...resume, education: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {activeSection === 'skills' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Skills Categories</h3>
                  <button
                    onClick={addSkillCategory}
                    className="flex items-center gap-1 text-xs text-lime-400 hover:text-lime-300 font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Category</span>
                  </button>
                </div>

                {resume.skillCategories.map((cat, index) => (
                  <div key={cat.id} className="p-4 rounded-xl bg-[#0e0d17] border border-white/10 space-y-3 relative">
                    <button
                      onClick={() => removeSkillCategory(cat.id)}
                      className="absolute top-3 right-3 text-zinc-500 hover:text-rose-400 p-1"
                      title="Remove category"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div>
                      <label className="block text-[11px] text-zinc-400 mb-1">Category Title</label>
                      <input
                        type="text"
                        value={cat.categoryName}
                        onChange={(e) => {
                          const updated = [...resume.skillCategories];
                          updated[index].categoryName = e.target.value;
                          setResume({ ...resume, skillCategories: updated });
                        }}
                        className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-zinc-400 mb-1">Skills (comma-separated)</label>
                      <input
                        type="text"
                        value={cat.skills.join(', ')}
                        onChange={(e) => {
                          const updated = [...resume.skillCategories];
                          updated[index].skills = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                          setResume({ ...resume, skillCategories: updated });
                        }}
                        className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {activeSection === 'projects' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Portfolio Projects</h3>
                  <button
                    onClick={addProject}
                    className="flex items-center gap-1 text-xs text-lime-400 hover:text-lime-300 font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Project</span>
                  </button>
                </div>

                {resume.projects.map((proj, index) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-[#0e0d17] border border-white/10 space-y-3 relative">
                    <button
                      onClick={() => removeProject(proj.id)}
                      className="absolute top-3 right-3 text-zinc-500 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">Project Title</label>
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => {
                            const updated = [...resume.projects];
                            updated[index].title = e.target.value;
                            setResume({ ...resume, projects: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">Project Link / URL</label>
                        <input
                          type="text"
                          value={proj.url || ''}
                          onChange={(e) => {
                            const updated = [...resume.projects];
                            updated[index].url = e.target.value;
                            setResume({ ...resume, projects: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-zinc-400 mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={proj.description}
                        onChange={(e) => {
                          const updated = [...resume.projects];
                          updated[index].description = e.target.value;
                          setResume({ ...resume, projects: updated });
                        }}
                        className="w-full p-2 rounded bg-[#161526] border border-white/10 text-white text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {activeSection === 'certifications' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Certifications</h3>
                  <button
                    onClick={addCertification}
                    className="flex items-center gap-1 text-xs text-lime-400 hover:text-lime-300 font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Certification</span>
                  </button>
                </div>

                {resume.certifications.map((cert, index) => (
                  <div key={cert.id} className="p-4 rounded-xl bg-[#0e0d17] border border-white/10 space-y-3 relative">
                    <button
                      onClick={() => removeCertification(cert.id)}
                      className="absolute top-3 right-3 text-zinc-500 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">Certification Name</label>
                        <input
                          type="text"
                          value={cert.name}
                          onChange={(e) => {
                            const updated = [...resume.certifications];
                            updated[index].name = e.target.value;
                            setResume({ ...resume, certifications: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-zinc-400 mb-1">Issuer & Year</label>
                        <input
                          type="text"
                          value={`${cert.issuer} (${cert.issueDate})`}
                          onChange={(e) => {
                            const updated = [...resume.certifications];
                            updated[index].issuer = e.target.value;
                            setResume({ ...resume, certifications: updated });
                          }}
                          className="w-full px-2.5 py-1.5 rounded bg-[#161526] border border-white/10 text-white text-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center Region: Live Paper Preview */}
        <div className="flex-1 bg-[#090810] p-6 lg:p-10 flex flex-col items-center overflow-auto relative">
          
          {/* Zoom controls */}
          <div className="sticky top-2 z-20 mb-4 flex items-center gap-2 bg-[#161526]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg text-xs">
            <button
              onClick={() => setScale(Math.max(0.5, scale - 0.1))}
              className="p-1 text-zinc-400 hover:text-white"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-zinc-300 w-12 text-center">{Math.round(scale * 100)}%</span>
            <button
              onClick={() => setScale(Math.min(1.2, scale + 0.1))}
              className="p-1 text-zinc-400 hover:text-white"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Paper View Container */}
          <div className="w-full flex justify-center pb-16">
            <ResumePreview resume={resume} scale={scale} />
          </div>
        </div>

      </div>

      {/* Access Key Authorization Modal (PRD Section 7 Compliance) */}
      {showKeyModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setShowKeyModal(false)}
        >
          <div 
            className="w-full max-w-md glass-panel rounded-2xl p-6 bg-[#161526] border border-violet-500/30 text-white space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 text-lime-300">
              <Key className="w-5 h-5" />
              <h3 className="font-bold text-base text-white">Your Secure Access Key</h3>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Nivó does not force you to create a public account. Instead, this resume is bound to a high-entropy secret key. Save this key to reopen or edit this resume from any device.
            </p>

            <div className="p-3 rounded-lg bg-[#0e0d17] border border-white/10 flex items-center justify-between gap-2 font-mono text-xs text-lime-300 break-all select-all">
              <span>{resume.accessKey}</span>
              <button
                onClick={copyAccessKey}
                className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white shrink-0"
                title="Copy Key"
              >
                {copiedKey ? <CheckCircle2 className="w-4 h-4 text-lime-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="text-[11px] text-zinc-500">
              Resume ID: <span className="font-mono text-zinc-400">{resume.id}</span>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-xs font-semibold text-white"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
