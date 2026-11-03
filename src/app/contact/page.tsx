'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, GraduationCap, Briefcase, Users, FileText, Mail, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { EDUCATION_SERVICES } from '@/lib/data/services';
import { PROFESSIONAL_COURSES } from '@/lib/data/courses';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'education' | 'course' | 'staffing' | 'candidate' | 'general'>('education');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    educationLevel: 'primary',
    subjectOrArea: '',
    deliveryMode: 'online',
    courseId: PROFESSIONAL_COURSES[0].id,
    organizationName: '',
    organizationType: 'school',
    roleCategory: 'school-teacher',
    positionsCount: 1,
    location: '',
    targetRole: '',
    yearsExperience: 2,
    portfolioOrLinkedIn: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let endpoint = '/api/enquiries';
      let payload: unknown = {};

      if (activeTab === 'education') {
        payload = {
          type: 'education',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          educationLevel: formData.educationLevel,
          subjectOrArea: formData.subjectOrArea,
          deliveryMode: formData.deliveryMode,
          notes: formData.message
        };
      } else if (activeTab === 'course') {
        payload = {
          type: 'course',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          courseId: formData.courseId,
          currentExperience: 'student',
          preferredSchedule: 'weekends',
          notes: formData.message
        };
      } else if (activeTab === 'staffing') {
        endpoint = '/api/recruitment-requirements';
        payload = {
          organizationName: formData.organizationName,
          contactPerson: formData.name,
          email: formData.email,
          phone: formData.phone,
          organizationType: formData.organizationType,
          roleCategory: formData.roleCategory,
          positionsCount: formData.positionsCount,
          location: formData.location || 'Undisclosed',
          targetStartDate: 'Immediate',
          jobDescriptionNotes: formData.message || 'Staffing request from contact portal'
        };
      } else if (activeTab === 'candidate') {
        endpoint = '/api/candidate-submissions';
        payload = {
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          primaryPillar: 'education',
          targetRole: formData.targetRole || 'Educator',
          yearsExperience: formData.yearsExperience,
          portfolioOrLinkedIn: formData.portfolioOrLinkedIn,
          summaryNotes: formData.message || 'Candidate submission profile'
        };
      } else {
        // general
        payload = {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'General Enquiry',
          message: formData.message
        };
      }

      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-xs text-red-600 dark:text-red-400 font-semibold">
          <Mail className="w-3.5 h-3.5" />
          <span>Direct Contact & Enquiries</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
          How Can We Support You?
        </h1>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          Operating continuously since 2020. Connect directly with our academic coordinators, cohort instructors, or institutional recruitment panel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct Info & Operating Ethics */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-surface rounded-3xl p-8 space-y-6">
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">Direct Communication</h2>
            
            <div className="space-y-4 text-xs text-zinc-700 dark:text-zinc-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/30 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-950 dark:text-white">General & Academic Enquiries</div>
                  <div className="text-zinc-500 dark:text-zinc-400 mt-0.5">contact@nivo.education</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-950 dark:text-white">Institutional Staffing Desk</div>
                  <div className="text-zinc-500 dark:text-zinc-400 mt-0.5">staffing@nivo.education</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/30 shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-950 dark:text-white">Course Admissions</div>
                  <div className="text-zinc-500 dark:text-zinc-400 mt-0.5">admissions@nivo.education</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Operating Standards</span>
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Nivó has been operating continuously since 2020. All correspondence is handled confidentially by designated subject advisors.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Tabbed Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="card-surface rounded-3xl p-8">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">Enquiry Received</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Nivó. An academic mentor or staffing coordinator will reach out within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="brand-primary-btn px-6 py-2.5 rounded-lg text-xs"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Tab buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 p-1 bg-zinc-100 dark:bg-zinc-950/80 rounded-xl border border-zinc-200 dark:border-white/10 mb-6 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveTab('education')}
                    className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'education' ? 'bg-red-600 text-white font-semibold shadow-sm' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                    }`}
                  >
                    Education
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('course')}
                    className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'course' ? 'bg-red-600 text-white font-semibold shadow-sm' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                    }`}
                  >
                    Courses
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('staffing')}
                    className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'staffing' ? 'bg-red-600 text-white font-semibold shadow-sm' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                    }`}
                  >
                    Staffing
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('candidate')}
                    className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'candidate' ? 'bg-red-600 text-white font-semibold shadow-sm' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                    }`}
                  >
                    Join Us
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('general')}
                    className={`py-2 px-1 text-center rounded-lg transition-colors col-span-2 sm:col-span-1 cursor-pointer ${
                      activeTab === 'general' ? 'bg-red-600 text-white font-semibold shadow-sm' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                    }`}
                  >
                    General
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                    />
                  </div>

                  {/* Specific fields */}
                  {activeTab === 'education' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Education Level</label>
                        <select
                          value={formData.educationLevel}
                          onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                        >
                          <option value="kindergarten">Kindergarten / Early Learning</option>
                          <option value="primary">Primary (Grades 1-5)</option>
                          <option value="middle">Middle (Grades 6-8)</option>
                          <option value="secondary">Secondary (Grades 9-10)</option>
                          <option value="higher-secondary">Higher Secondary (11-12)</option>
                          <option value="college-undergrad">College & Degree Support</option>
                          <option value="languages">Languages & Creative Arts</option>
                          <option value="competitive-exams">Competitive Examination Prep</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Subject Needed *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Physics, French, Calculus"
                          value={formData.subjectOrArea}
                          onChange={(e) => setFormData({ ...formData, subjectOrArea: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {activeTab === 'course' && (
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Select Program *</label>
                      <select
                        value={formData.courseId}
                        onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      >
                        {PROFESSIONAL_COURSES.map((c) => (
                          <option key={c.id} value={c.id}>{c.title}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {activeTab === 'staffing' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Organization Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.organizationName}
                          onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Location / City *</label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {activeTab === 'candidate' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Teaching Discipline *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mathematics, AI Trainer"
                          value={formData.targetRole}
                          onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">LinkedIn / Portfolio URL</label>
                        <input
                          type="url"
                          placeholder="https://..."
                          value={formData.portfolioOrLinkedIn}
                          onChange={(e) => setFormData({ ...formData, portfolioOrLinkedIn: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {activeTab === 'general' && (
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Subject</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Details & Schedule Notes</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your goals, academic board (CBSE, IB, Cambridge), or timelines..."
                      className="w-full p-3 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-300 dark:border-white/10 text-zinc-950 dark:text-white text-xs leading-relaxed focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="brand-primary-btn px-6 py-2.5 rounded-xl text-xs gap-2 disabled:opacity-50"
                    >
                      <span>{loading ? 'Sending...' : 'Submit Request'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
