# Changelog — Nivó

All notable specification changes should be recorded here.

## 2.1.0 — 2026-10-15
### Built & Delivered
- Complete Next.js (App Router, TypeScript strict mode, Tailwind CSS) architecture.
- Cosmic visual language with custom desktop cursor (lerp physics, glow, magnetic button support).
- Pointer-reactive cosmic starlight canvas and signature relativistic Black Hole hero visual.
- Public web routes: `/`, `/about`, `/services`, `/education`, `/education/[service]`, `/professional-courses`, `/professional-courses/[course]`, `/hr-and-recruitment`, `/hr-and-recruitment/[service]`, `/contact`, `/faq`, `/resources`, `/resources/[slug]`, `/privacy`, `/terms`.
- First-party Resume Studio:
  - Multi-template live paper preview (`cosmic`, `executive`, `creative`).
  - 3-region workspace editor (`/resume-studio/editor/[resumeId]`) with real-time field editing.
  - Smart PDF/DOCX import pipeline with pre-save verification review screen.
  - Native selectable vector text PDF export via jsPDF.
  - Cryptographic high-entropy access key security model with zero mandatory account friction.
- Protected API endpoints for enquiries, staffing requirements, candidate profiles, and authorized resume retrieval.
- Technical SEO: metadata, OpenGraph, canonical URLs, dynamic XML `sitemap.ts`, and privacy-preserving `robots.ts`.

## 2.0.0 — 2026-10-15
### Added
- Clear scope for education, professional courses, HR/recruitment and Resume Studio.
- Nivó established in 2020.
- Custom moving cursor and animated background requirements.
- Black-hole-inspired hero visual and motion system.
- Firebase-backed resume data, private uploads and PDF export requirements.
- SEO-ready public pages, sitemap, canonical metadata and structured data.
- Security, testing, deployment and implementation rules.

### Removed from scope
- Student/tutor/institute dashboards.
- General authentication for the marketing website.
- LMS and video conferencing.
- Applicant tracking system.
- Custom SEO content management system.
- Automatic publication of thin location pages.

### Notes
- Resume-specific persistence remains in scope, but secure access/ownership strategy must be decided before implementation.
- OpenResume source reuse requires a current licence and integration review.
