# Product Requirements Document — Nivó

**Version:** 2.0  
**Status:** Implementation baseline  
**Established:** 2020

## 1. Vision

Nivó is a modern education, professional training, HR and recruitment company. The website must make its services easy to understand and generate qualified enquiries. Its signature experience is a premium, futuristic visual language featuring a cosmic/black-hole-inspired hero, a cursor that responds to pointer movement, and carefully controlled animated backgrounds. The practical product is a first-party Resume Studio backed by Firebase.

## 2. Business pillars

### 2.1 Education & Training
- Kindergarten and foundational learning.
- Primary, middle, secondary and higher-secondary subjects.
- College, undergraduate and master's-level subject support.
- Competitive exam preparation where actually offered.
- Online and home tuition where available.
- Music, dance, drawing and visual arts.
- Foreign-language learning.

### 2.2 Professional Courses
- Coding and software development.
- Artificial intelligence and machine learning.
- UI/UX and graphic design.
- Video editing and creative production.
- Digital marketing and relevant professional skills.
- Training for working professionals and career changers.

Course availability, delivery mode, pricing, duration, credentials and outcomes must only be published when confirmed.

### 2.3 HR & Recruitment
- Kindergarten and school teacher recruitment.
- Subject-specialist teacher recruitment.
- College/faculty recruitment.
- Music, dance, art and language educator recruitment.
- Coding, AI/ML, design and other trainer recruitment.
- Corporate and professional recruitment.
- Staffing enquiries from schools, colleges, training centres and businesses.

The site is a lead-generation and service-information website, not an applicant tracking system.

### 2.4 Resume Studio
- Create a resume from scratch.
- Import PDF and DOCX files.
- Extract text and suggest structured fields.
- Let the user review and correct imported information.
- Choose from professionally designed templates.
- Edit and reorder sections.
- Preview multi-page output.
- Save resume data securely in Firebase.
- Reopen, edit, duplicate and delete saved resumes where supported.
- Export a text-based PDF.

## 3. Target audiences

- Parents and students looking for learning services.
- Learners and working professionals seeking training.
- Schools, kindergartens, colleges and educational institutions seeking staff.
- Businesses seeking recruitment support.
- Teachers and professionals who need a CV.
- Candidates who want to submit a resume for relevant opportunities.

## 4. Experience goals

- Establish trust and clarify the three service pillars quickly.
- Present Nivó as operating since 2020, without inventing unsupported business metrics.
- Create an expressive, memorable website without sacrificing readability.
- Make the cursor and background motion feel polished, not distracting.
- Keep public browsing and enquiries available without general visitor login.
- Make Resume Studio useful, secure and reliable.
- Ensure public pages are SEO-ready from launch.

## 5. Website scope

Core pages:
- `/`
- `/about`
- `/services`
- `/education`
- `/education/[service]`
- `/professional-courses`
- `/professional-courses/[course]`
- `/hr-and-recruitment`
- `/hr-and-recruitment/[service]`
- `/resume-studio`
- `/resume-studio/templates`
- `/resume-studio/create`
- `/resume-studio/import`
- `/resume-studio/editor/[resumeId]`
- `/resume-studio/preview/[resumeId]`
- `/contact`
- `/faq`
- `/resources`
- `/resources/[slug]`
- `/privacy`
- `/terms`

Avoid creating near-duplicate routes that compete for the same search intent.

## 6. Design requirements

- Fluid, editorial, asymmetric layouts; avoid a repetitive wall of cards.
- Dark cosmic hero with a distinctive black-hole-inspired visual.
- Light and dark sections used with intention.
- Custom desktop cursor: dot, outer ring, subtle glow, hover states and optional short trail.
- Pointer-responsive background light and restrained particle response.
- Magnetic button effect only on supported desktop pointers.
- Selective hover tilt on suitable visuals.
- Smooth page/section transitions.
- Simplified effects on touch devices.
- Honour `prefers-reduced-motion`.
- All content remains usable with effects disabled.
- Cursor overlays must never intercept clicks or text selection.

## 7. Resume Studio requirements

- PDF/DOCX upload validation and size limits.
- Import text extraction; OCR is optional for scanned PDFs and should be an explicitly scoped capability.
- User review before extracted data becomes final resume content.
- Structured, versioned resume schema.
- Multiple distinct templates.
- Live preview and template switching without data loss.
- Multi-page PDF output with correct page breaks and selectable text.
- Secure resume ownership and deletion.
- No general user dashboard.
- No public exposure of imported documents or resumes by default.

### Access model decision
The marketing site has no general authentication. Resume persistence must nevertheless have a real authorization model. Preferred implementation: a resume-specific secure workspace/access mechanism using high-entropy secrets stored safely and verified server-side, or a narrowly scoped authenticated resume workspace if secure anonymous persistence cannot meet requirements. Never rely on a sequential or merely random document ID as the only protection. Document the final selected model before implementation.

## 8. Enquiry requirements

Public forms:
- Education enquiry.
- Professional course enquiry.
- Employer staffing requirement.
- Candidate/resume submission.
- General contact.

Each form needs client and server validation, spam/rate controls, accessible errors, a clear success state, privacy notice and secure persistence.

## 9. SEO requirements

- Unique title, description, canonical and social metadata for each indexable public page.
- Server-rendered or statically generated service pages.
- XML sitemap and robots.txt.
- Correct status codes, redirects and canonical rules.
- Structured data only when it accurately matches visible content.
- Useful location pages only when real service coverage or meaningful local content exists.
- No custom SEO CMS.
- No automatic publication of every possible country/state/city/subject combination.
- Private resume editor, import and preview routes must not be indexed.
- No personal resume data in sitemap, analytics or public metadata.

## 10. Non-goals

No student/tutor/institute dashboards, general authentication system, LMS, virtual classroom, video calls, ATS, job tracking, payment system, or SEO CMS in this version.

## 11. Acceptance criteria

- Visitors can understand Nivó's education, training, recruitment and resume services.
- Contact and service enquiry forms work end-to-end.
- The moving cursor/background looks polished on desktop and degrades safely elsewhere.
- Reduced-motion mode works.
- Resume import, edit, save/reopen, template selection and PDF export work.
- Private resume files cannot be accessed by unauthorised users.
- Public pages have correct metadata and technical SEO.
- No fabricated claims, reviews, availability or metrics are displayed.
- The website remains responsive and accessible.
