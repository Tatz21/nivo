# Development Phases — Nivó

## Phase 0 — Decisions and foundation
Deliver:
- Confirm Next.js version and hosting target.
- Create repository and environments.
- Configure linting, formatting and strict TypeScript.
- Define design tokens.
- Decide Resume Studio access/ownership model.
- Define upload limits, retention and PDF approach.
- Create Firebase projects and baseline security rules.

Exit criteria: architecture decisions are documented and local build works.

## Phase 1 — Visual system and motion
Deliver:
- Responsive layout and navigation.
- Typography and colour tokens.
- Custom cursor and hover states.
- Cursor glow/trail with caps.
- Cosmic animated background.
- Black-hole hero visual.
- Reduced-motion and mobile fallbacks.
- Magnetic CTA and selective scroll reveals.

Exit criteria: keyboard and touch use works; effects do not block interaction; basic performance checks pass.

## Phase 2 — Public website
Deliver:
- Homepage.
- About and history since 2020.
- Education pages.
- Professional course pages.
- HR/recruitment pages.
- Contact and enquiry forms.
- FAQ, privacy and terms.
- Footer and internal linking.

Exit criteria: all service pillars are clear; forms submit to a protected backend.

## Phase 3 — Firebase enquiries
Deliver:
- Firestore models.
- Server validation.
- Rate/abuse controls.
- Recruitment requirements.
- Candidate submissions and private file upload.
- Notifications if provider configured.
- Retention policy implementation.

Exit criteria: no public collection reads; form abuse and invalid input are tested.

## Phase 4 — Resume Studio MVP
Deliver:
- Template gallery.
- Manual resume editor.
- PDF/DOCX import and extraction.
- Review/correction screen.
- Structured schema.
- Live preview.
- PDF export.
- Secure save/reopen/delete.
- Private file storage.

Exit criteria: end-to-end tests pass for create, import, edit, save, reopen and export.

## Phase 5 — SEO and quality
Deliver:
- Metadata and canonicals.
- Sitemap and robots.
- Structured data.
- Correct error statuses.
- Accessibility checks.
- Image/font optimisation.
- Lighthouse and Core Web Vitals baseline.
- Search Console setup.

Exit criteria: no private routes/documents are indexed; public routes have correct metadata.

## Phase 6 — Production readiness
Deliver:
- Security review.
- Firebase rules tests.
- Visual regression and responsive testing.
- Backup/retention checks.
- Error monitoring.
- Production environment configuration.
- Rollback plan.
- Release checklist.

Exit criteria: launch blockers resolved and release approved.

## Deferred unless explicitly approved
AI resume writing, OCR for scanned PDFs, paid templates, payments, dashboards, ATS, LMS, video calls and a CMS.
