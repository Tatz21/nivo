'use client';

import React from 'react';
import { ResumeData } from '@/lib/types/resume';
import { Mail, Phone, MapPin, Globe, Link2, Code2 } from 'lucide-react';

interface ResumePreviewProps {
  resume: ResumeData;
  scale?: number;
}

export default function ResumePreview({ resume, scale = 1 }: ResumePreviewProps) {
  const accentColor = resume.accentColor || '#6554F5';
  const template = resume.template || 'cosmic';

  // Render template-specific layouts
  if (template === 'executive') {
    return (
      <div 
        className="w-[210mm] min-h-[297mm] bg-white text-zinc-900 p-12 shadow-2xl mx-auto selection:bg-zinc-200 transition-all font-serif"
        style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
      >
        {/* Executive Header */}
        <div className="text-center border-b border-zinc-300 pb-6 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 uppercase">{resume.personalInfo.fullName || 'Full Name'}</h1>
          <div className="text-sm font-medium tracking-wide uppercase mt-1 text-zinc-600">{resume.personalInfo.jobTitle || 'Professional Title'}</div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-600 mt-3 font-sans">
            {resume.personalInfo.email && <span>{resume.personalInfo.email}</span>}
            {resume.personalInfo.phone && <span>• {resume.personalInfo.phone}</span>}
            {resume.personalInfo.location && <span>• {resume.personalInfo.location}</span>}
            {resume.personalInfo.website && <span>• {resume.personalInfo.website}</span>}
          </div>
        </div>

        {/* Executive Summary */}
        {resume.summary && (
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-800 border-b border-zinc-200 pb-1 mb-2">Executive Summary</h2>
            <p className="text-xs leading-relaxed text-zinc-700 font-sans">{resume.summary}</p>
          </div>
        )}

        {/* Executive Experience */}
        {resume.experiences.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-800 border-b border-zinc-200 pb-1 mb-3">Professional Experience</h2>
            <div className="space-y-4 font-sans">
              {resume.experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-xs text-zinc-900">{exp.role}</span>
                    <span className="text-[11px] text-zinc-500">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <div className="text-xs text-zinc-700 italic">{exp.company} {exp.location && `| ${exp.location}`}</div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-zinc-600">
                    {exp.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Executive Education */}
        {resume.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-800 border-b border-zinc-200 pb-1 mb-3">Education</h2>
            <div className="space-y-3 font-sans">
              {resume.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-xs text-zinc-900">{edu.degree}</span>
                    <span className="text-[11px] text-zinc-500">{edu.startDate} – {edu.endDate}</span>
                  </div>
                  <div className="text-xs text-zinc-700">{edu.institution} {edu.location && `| ${edu.location}`}</div>
                  {edu.grade && <div className="text-[11px] text-zinc-500">{edu.grade}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Executive Skills */}
        {resume.skillCategories.length > 0 && (
          <div className="font-sans">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-800 border-b border-zinc-200 pb-1 mb-2 font-serif">Core Competencies</h2>
            <div className="space-y-1.5">
              {resume.skillCategories.map((cat) => (
                <div key={cat.id} className="text-xs text-zinc-700">
                  <span className="font-semibold text-zinc-900">{cat.categoryName}: </span>
                  <span>{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (template === 'creative') {
    return (
      <div 
        className="w-[210mm] min-h-[297mm] bg-white text-zinc-900 shadow-2xl mx-auto flex font-sans transition-all"
        style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
      >
        {/* Left Sidebar */}
        <div className="w-[72mm] bg-zinc-900 text-white p-8 flex flex-col justify-between shrink-0">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white">{resume.personalInfo.fullName || 'Your Name'}</h1>
              <div className="text-xs font-semibold mt-1" style={{ color: accentColor }}>{resume.personalInfo.jobTitle || 'Your Title'}</div>
            </div>

            {/* Contact details */}
            <div className="space-y-2 text-xs text-zinc-400">
              {resume.personalInfo.email && <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-zinc-400" /><span>{resume.personalInfo.email}</span></div>}
              {resume.personalInfo.phone && <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-zinc-400" /><span>{resume.personalInfo.phone}</span></div>}
              {resume.personalInfo.location && <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-zinc-400" /><span>{resume.personalInfo.location}</span></div>}
              {resume.personalInfo.website && <div className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-zinc-400" /><span>{resume.personalInfo.website}</span></div>}
            </div>

            {/* Skills */}
            {resume.skillCategories.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-zinc-800">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">Skills</div>
                {resume.skillCategories.map((cat) => (
                  <div key={cat.id} className="space-y-1">
                    <div className="text-[10px] text-zinc-400 font-medium">{cat.categoryName}</div>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((s, i) => (
                        <span key={i} className="text-[9px] bg-zinc-800 text-zinc-200 px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {resume.certifications.length > 0 && (
              <div className="space-y-2 pt-4 border-t border-zinc-800 text-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">Certifications</div>
                {resume.certifications.map((c) => (
                  <div key={c.id}>
                    <div className="text-[11px] font-semibold text-white">{c.name}</div>
                    <div className="text-[10px] text-zinc-400">{c.issuer} ({c.issueDate})</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Main Body */}
        <div className="flex-1 p-8 space-y-6">
          {resume.summary && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>Profile</h2>
              <p className="text-xs leading-relaxed text-zinc-700">{resume.summary}</p>
            </div>
          )}

          {resume.experiences.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accentColor }}>Experience</h2>
              <div className="space-y-4">
                {resume.experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-xs text-zinc-900">{exp.role}</span>
                      <span className="text-[10px] text-zinc-400">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                    </div>
                    <div className="text-xs font-medium text-zinc-600">{exp.company} {exp.location && `• ${exp.location}`}</div>
                    <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-zinc-600">
                      {exp.highlights.map((hl, i) => (
                        <li key={i}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resume.education.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Education</h2>
              <div className="space-y-2">
                {resume.education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-xs text-zinc-900">{edu.degree}</span>
                      <span className="text-[10px] text-zinc-400">{edu.startDate} – {edu.endDate}</span>
                    </div>
                    <div className="text-xs text-zinc-600">{edu.institution} {edu.grade && `• ${edu.grade}`}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resume.projects.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Key Projects</h2>
              <div className="space-y-2">
                {resume.projects.map((proj) => (
                  <div key={proj.id}>
                    <div className="font-bold text-xs text-zinc-900">{proj.title}</div>
                    <div className="text-xs text-zinc-600">{proj.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default: Cosmic Modern
  return (
    <div 
      className="w-[210mm] min-h-[297mm] bg-white text-zinc-900 p-10 shadow-2xl mx-auto font-sans transition-all selection:bg-violet-100"
      style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
    >
      {/* Header with Brand Accent Line */}
      <div className="border-b-2 pb-5 mb-5" style={{ borderColor: accentColor }}>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
              {resume.personalInfo.fullName || 'Candidate Name'}
            </h1>
            <div className="text-sm font-semibold mt-1" style={{ color: accentColor }}>
              {resume.personalInfo.jobTitle || 'Target Position'}
            </div>
          </div>
          <div className="text-right text-[10px] font-mono text-zinc-400">
            ATS-READY
          </div>
        </div>

        {/* Contact info row */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 mt-3">
          {resume.personalInfo.email && <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-zinc-400" /><span>{resume.personalInfo.email}</span></div>}
          {resume.personalInfo.phone && <div className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-zinc-400" /><span>{resume.personalInfo.phone}</span></div>}
          {resume.personalInfo.location && <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-zinc-400" /><span>{resume.personalInfo.location}</span></div>}
          {resume.personalInfo.website && <div className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-zinc-400" /><span>{resume.personalInfo.website}</span></div>}
          {resume.personalInfo.linkedin && <div className="flex items-center gap-1.5"><Link2 className="w-3.5 h-3.5 text-zinc-400" /><span>{resume.personalInfo.linkedin}</span></div>}
          {resume.personalInfo.github && <div className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5 text-zinc-400" /><span>{resume.personalInfo.github}</span></div>}
        </div>
      </div>

      {/* Summary */}
      {resume.summary && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>
            Professional Summary
          </h2>
          <p className="text-xs leading-relaxed text-zinc-700">{resume.summary}</p>
        </div>
      )}

      {/* Experience */}
      {resume.experiences.length > 0 && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider mb-2.5 pb-1 border-b border-zinc-200" style={{ color: accentColor }}>
            Experience
          </h2>
          <div className="space-y-3.5">
            {resume.experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-xs text-zinc-900">{exp.role}</span>
                  <span className="text-[10px] text-zinc-500 font-medium">
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-xs text-zinc-600 font-medium">{exp.company} {exp.location && `• ${exp.location}`}</div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs text-zinc-600">
                  {exp.highlights.map((hl, i) => (
                    <li key={i}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {resume.education.length > 0 && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b border-zinc-200" style={{ color: accentColor }}>
            Education
          </h2>
          <div className="space-y-2">
            {resume.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-xs text-zinc-900">{edu.degree}</span>
                  <span className="text-[10px] text-zinc-500">{edu.startDate} – {edu.endDate}</span>
                </div>
                <div className="text-xs text-zinc-600">{edu.institution} {edu.grade && `• Grade: ${edu.grade}`}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {resume.skillCategories.length > 0 && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b border-zinc-200" style={{ color: accentColor }}>
            Skills & Expertise
          </h2>
          <div className="space-y-1.5">
            {resume.skillCategories.map((cat) => (
              <div key={cat.id} className="text-xs text-zinc-700">
                <span className="font-semibold text-zinc-900">{cat.categoryName}: </span>
                <span>{cat.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {resume.projects.length > 0 && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b border-zinc-200" style={{ color: accentColor }}>
            Key Projects
          </h2>
          <div className="space-y-2.5">
            {resume.projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-xs text-zinc-900">{proj.title}</span>
                  {proj.url && <span className="text-[10px] text-violet-600">{proj.url}</span>}
                </div>
                <div className="text-xs text-zinc-600 mt-0.5">{proj.description}</div>
                {proj.technologies && proj.technologies.length > 0 && (
                  <div className="text-[10px] text-zinc-500 mt-0.5">
                    Stack: {proj.technologies.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {resume.certifications.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b border-zinc-200" style={{ color: accentColor }}>
            Certifications
          </h2>
          <div className="space-y-1 text-xs text-zinc-700">
            {resume.certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between">
                <span className="font-medium text-zinc-800">{cert.name}</span>
                <span className="text-zinc-500 text-[11px]">{cert.issuer} ({cert.issueDate})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
