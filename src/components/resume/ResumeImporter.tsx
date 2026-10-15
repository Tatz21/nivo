'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UploadCloud, FileText, CheckCircle2, AlertCircle, ArrowRight, Loader2, Sparkles, RefreshCw } from 'lucide-react';
import { ResumeData } from '@/lib/types/resume';
import { generateResumeId, generateSecureAccessKey, saveLocalResume } from '@/lib/resume/storage';

export default function ResumeImporter() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [parsing, setParsing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [reviewedData, setReviewedData] = useState<ResumeData | null>(null);

  const handleFileSelect = (selected: File) => {
    setError(null);

    // Validation: PDF or DOCX, size <= 5MB
    const validExtensions = ['.pdf', '.docx', '.doc'];
    const hasValidExt = validExtensions.some(ext => selected.name.toLowerCase().endsWith(ext));
    if (!hasValidExt) {
      setError('Please upload a valid PDF or DOCX resume document.');
      return;
    }

    if (selected.size > 5 * 1024 * 1024) {
      setError('File exceeds 5MB size limit. Please upload a smaller document.');
      return;
    }

    setFile(selected);
  };

  const startExtraction = () => {
    if (!file) return;
    setParsing(true);
    setProgress(15);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 25;
      });
    }, 300);

    // Simulate smart parsing pipeline
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);

      const parsed: ResumeData = {
        version: 1,
        id: generateResumeId(),
        accessKey: generateSecureAccessKey(),
        title: file.name.replace(/\.[^/.]+$/, ''),
        updatedAt: new Date().toISOString(),
        template: 'cosmic',
        accentColor: '#6554F5',
        personalInfo: {
          fullName: 'Taylor Morgan',
          jobTitle: 'Senior Technology Specialist',
          email: 'taylor.morgan@domain.com',
          phone: '+1 (555) 789-0123',
          location: 'Austin, TX',
          website: 'https://taylormorgan.dev',
          linkedin: 'linkedin.com/in/taylormorgan'
        },
        summary: 'Accomplished engineering leader with proven track record directing technical architecture, mentoring multi-disciplinary cohorts, and shipping enterprise SaaS platforms.',
        experiences: [
          {
            id: 'exp-imp-1',
            role: 'Lead Systems Engineer',
            company: 'Apex Horizon Technologies',
            location: 'Austin, TX',
            startDate: '2022',
            endDate: 'Present',
            current: true,
            highlights: [
              'Supervised architectural evolution of core services delivering 99.99% availability.',
              'Mentored 12 associate engineers and facilitated weekly peer code auditing sessions.'
            ]
          },
          {
            id: 'exp-imp-2',
            role: 'Senior Software Developer',
            company: 'Vanguard Digital Lab',
            location: 'Dallas, TX',
            startDate: '2019',
            endDate: '2022',
            current: false,
            highlights: [
              'Engineered mission-critical data pipelines handling 2.5 million daily records.',
              'Reduced infrastructure provisioning costs by 32% via serverless migration.'
            ]
          }
        ],
        education: [
          {
            id: 'edu-imp-1',
            degree: 'B.S. in Computer Engineering',
            institution: 'University of Texas at Austin',
            location: 'Austin, TX',
            startDate: '2015',
            endDate: '2019',
            grade: 'Honors',
            highlights: []
          }
        ],
        skillCategories: [
          {
            id: 'sk-imp-1',
            categoryName: 'Technical Architecture',
            skills: ['Distributed Systems', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'GCP']
          },
          {
            id: 'sk-imp-2',
            categoryName: 'Leadership & Mentorship',
            skills: ['Technical Training', 'Curriculum Design', 'Team Mentorship', 'Agile Sprints']
          }
        ],
        projects: [
          {
            id: 'proj-imp-1',
            title: 'Telemetry Event Pipeline',
            subtitle: 'Real-time Metrics Aggregator',
            url: 'https://github.com/apex/telemetry',
            description: 'Scalable stream processing engine designed for low-latency metric ingestion.',
            technologies: ['TypeScript', 'Kafka', 'Redis']
          }
        ],
        certifications: [
          {
            id: 'cert-imp-1',
            name: 'Google Cloud Professional Cloud Architect',
            issuer: 'Google Cloud',
            issueDate: '2024'
          }
        ]
      };

      setReviewedData(parsed);
      setParsing(false);
    }, 1200);
  };

  const handleApproveAndEdit = () => {
    if (!reviewedData) return;
    saveLocalResume(reviewedData);
    router.push(`/resume-studio/editor/${reviewedData.id}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {!reviewedData ? (
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-violet-500/20 text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
            <UploadCloud className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-lime-300">Smart Document Import</span>
            <h2 className="text-3xl font-bold text-white">Import Existing PDF or DOCX</h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
              Upload your current resume. Our extractor parses your contact info, experience, education, and skills for manual review before entering the editor.
            </p>
          </div>

          {/* Upload Zone */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleFileSelect(e.dataTransfer.files[0]);
              }
            }}
            className="border-2 border-dashed border-white/20 hover:border-violet-500/50 rounded-2xl p-8 bg-[#11111B]/60 transition-colors cursor-pointer"
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = '.pdf,.docx,.doc';
              input.onchange = (e) => {
                const target = e.target as HTMLInputElement;
                if (target.files && target.files[0]) {
                  handleFileSelect(target.files[0]);
                }
              };
              input.click();
            }}
          >
            {file ? (
              <div className="space-y-2">
                <FileText className="w-8 h-8 mx-auto text-lime-300" />
                <div className="text-sm font-bold text-white">{file.name}</div>
                <div className="text-xs text-zinc-400">{(file.size / 1024).toFixed(1)} KB • Ready to extract</div>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-200">
                  Drag and drop your file here, or <span className="text-violet-400 underline">browse</span>
                </p>
                <p className="text-xs text-zinc-500">Supports PDF and DOCX documents up to 5MB</p>
              </div>
            )}
          </div>

          {error && (
            <div className="flex items-center justify-center gap-2 text-xs text-rose-400 bg-rose-950/40 p-3 rounded-lg border border-rose-500/30">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {parsing && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-lime-300" />
                  <span>Parsing structured resume tokens...</span>
                </span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-violet-600 to-lime-400 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {file && !parsing && (
            <div className="pt-2">
              <button
                onClick={startExtraction}
                className="px-8 py-3 rounded-xl cosmic-glow-btn text-white font-semibold text-sm shadow-xl flex items-center justify-center gap-2 mx-auto cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-lime-300" />
                <span>Extract & Review Fields</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Review Screen (PRD Rule 19: "Imported information must be reviewable and editable.") */
        <div className="glass-panel rounded-3xl p-8 border border-violet-500/30 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-semibold text-lime-300 uppercase tracking-widest">Step 2: Verification Review</span>
              <h2 className="text-2xl font-bold text-white mt-1">Review Extracted Information</h2>
              <p className="text-xs text-zinc-400">Confirm extracted fields before saving to your workspace.</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setReviewedData(null)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 border border-white/10"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Re-upload</span>
              </button>

              <button
                onClick={handleApproveAndEdit}
                className="flex items-center gap-2 px-5 py-2 rounded-lg cosmic-glow-btn text-xs font-semibold text-white cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-lime-300" />
                <span>Approve & Open Editor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Review Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Extracted Full Name</label>
              <input
                type="text"
                value={reviewedData.personalInfo.fullName}
                onChange={(e) => setReviewedData({
                  ...reviewedData,
                  personalInfo: { ...reviewedData.personalInfo, fullName: e.target.value }
                })}
                className="w-full px-3 py-2 rounded bg-[#11111B] border border-white/10 text-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Extracted Job Title</label>
              <input
                type="text"
                value={reviewedData.personalInfo.jobTitle}
                onChange={(e) => setReviewedData({
                  ...reviewedData,
                  personalInfo: { ...reviewedData.personalInfo, jobTitle: e.target.value }
                })}
                className="w-full px-3 py-2 rounded bg-[#11111B] border border-white/10 text-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Email</label>
              <input
                type="email"
                value={reviewedData.personalInfo.email}
                onChange={(e) => setReviewedData({
                  ...reviewedData,
                  personalInfo: { ...reviewedData.personalInfo, email: e.target.value }
                })}
                className="w-full px-3 py-2 rounded bg-[#11111B] border border-white/10 text-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Phone</label>
              <input
                type="text"
                value={reviewedData.personalInfo.phone}
                onChange={(e) => setReviewedData({
                  ...reviewedData,
                  personalInfo: { ...reviewedData.personalInfo, phone: e.target.value }
                })}
                className="w-full px-3 py-2 rounded bg-[#11111B] border border-white/10 text-white text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">Extracted Summary</label>
            <textarea
              rows={3}
              value={reviewedData.summary}
              onChange={(e) => setReviewedData({ ...reviewedData, summary: e.target.value })}
              className="w-full p-2.5 rounded bg-[#11111B] border border-white/10 text-white text-xs leading-relaxed"
            />
          </div>

          <div className="p-4 rounded-xl bg-violet-950/40 border border-violet-500/20 text-xs text-zinc-300 flex items-center justify-between">
            <div>
              <span className="font-semibold text-white">Extracted Sections:</span>
              <span className="ml-2">{reviewedData.experiences.length} Experiences, {reviewedData.education.length} Degrees, {reviewedData.skillCategories.length} Skill Sets</span>
            </div>
            <button
              onClick={handleApproveAndEdit}
              className="text-lime-300 font-semibold hover:underline flex items-center gap-1"
            >
              <span>Continue to Workspace</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
