# Technology Stack — Nivó

## 1. Frontend

- Next.js using App Router.
- React.
- TypeScript with strict mode.
- Tailwind CSS.
- Accessible component primitives, optionally shadcn/ui as a starting point.
- Motion for React for UI animation.
- CSS/SVG/Canvas for visual effects.
- Optional Three.js for the black-hole hero, only if justified.
- React Hook Form and Zod for forms.
- A maintained PDF/DOCX parsing and PDF-generation solution selected after a proof of concept.

## 2. Backend

- Firebase Cloud Firestore.
- Firebase Cloud Storage.
- Firebase Cloud Functions or protected Next.js server routes.
- Firebase App Check.
- Firebase Emulator Suite for local tests.
- Email provider only after credentials and sending domain are configured.

Firebase Authentication is not required for the general website. If selected for secure resume persistence, limit it to Resume Studio and document the UX implications.

## 3. Validation and types

- Zod schemas for client and server payloads.
- Shared TypeScript types generated or inferred from schemas.
- Validate all untrusted data on the server even when the client validates too.
- Version the resume data schema.

## 4. Resume document processing

The import pipeline must:
- Accept only explicitly supported formats.
- Validate MIME/content and size; do not trust extension alone.
- Extract text from PDF and DOCX.
- Treat extracted values as suggestions requiring user review.
- Isolate parsing from public page rendering.
- Add OCR only when required and with explicit processing/cost/security review.

PDF export must render structured data to a real PDF, not screenshot the preview. Test text selection, fonts, Unicode and page breaks.

## 5. SEO and rendering

- Next.js metadata API.
- Static generation for stable public pages.
- Server rendering where needed.
- XML sitemap and robots generation.
- Canonical URL helpers.
- Structured data helpers with validation.
- Image optimisation and responsive images.

No SEO CMS.

## 6. Hosting

Use a platform compatible with the selected Next.js runtime, such as Vercel or Firebase App Hosting, after validating server routes, caching and deployment behaviour. Firebase remains the backend.

## 7. Development tools

- ESLint.
- Prettier.
- TypeScript checks.
- Unit tests with Vitest or equivalent.
- Component tests where useful.
- Playwright for end-to-end tests.
- Firebase Emulator Suite for data/security tests.
- Lighthouse and field Core Web Vitals monitoring.

## 8. Dependency policy

- Pin compatible versions.
- Review licence, maintenance and security status before adding libraries.
- Avoid multiple animation libraries for the same job.
- Do not integrate OpenResume source code without reviewing its current licence and obligations. It has been identified in prior exploration as AGPL-3.0; verify the exact current licence before reuse.
- Keep third-party APIs optional behind adapters.
