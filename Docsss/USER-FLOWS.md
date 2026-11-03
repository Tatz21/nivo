# User Flows — Nivó

## 1. Visitor discovers services
Homepage → Choose Education / Professional Courses / HR & Recruitment → Read relevant service page → Submit enquiry → Confirmation.

## 2. Parent/student education enquiry
Education page → Choose learning area → Fill required contact and learning fields → Review privacy notice → Submit → Server validation/rate checks → Confirmation reference.

Do not force account creation.

## 3. Employer staffing request
HR & Recruitment → Select recruitment service → Complete organisation and role details → Submit → Nivó receives private requirement → Confirmation.

No employer dashboard or applicant tracking system is created.

## 4. Candidate submits interest
Recruitment page → Candidate enquiry form → Add relevant details → Optional secure resume upload → Consent → Submit → Confirmation.

Candidate documents remain private and are retained only according to the documented policy.

## 5. Create resume from scratch
Resume Studio → Start from scratch → Enter personal details → Add sections → Select template → Preview → Edit → Save → Export PDF.

## 6. Import existing resume
Resume Studio → Upload PDF/DOCX → Validate file → Extract text → Suggest structured fields → User reviews and corrects → Choose template → Preview → Save → Export PDF.

If extraction fails, show a helpful message and offer manual entry. Never silently discard user data.

## 7. Resume access without general website accounts
The implementation must choose one secure model:
- A narrowly scoped Resume Studio authentication/workspace, or
- A secure resume-specific access capability verified server-side.

For a capability model, create a high-entropy secret, show it only when appropriate, protect it from logs/referrers, store only a safe verifier where possible, support revocation and deletion, and use secure cookies/session protections where feasible. A public resume ID alone is insufficient.

## 8. Resume editing
Open authorised resume link/session → Load structured data → Edit fields → Autosave or explicit Save → Confirm saved state → Preview.

Show unsaved changes clearly and protect against accidental data loss.

## 9. Export resume
Authorise access → Validate current schema → Render selected template → Generate PDF → Validate page count/content → Return secure download → Record export timestamp.

## 10. Reduced-motion flow
If reduced motion is enabled, use static/low-motion backgrounds, no cursor trail, no magnetic movement and short simple transitions. All navigation and actions remain available.
