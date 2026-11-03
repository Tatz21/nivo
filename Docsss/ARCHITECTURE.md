# Architecture — Nivó

## 1. System overview

Nivó is a public marketing and lead-generation website plus a focused resume application. The architecture intentionally avoids a general account platform.

### Layers
1. **Presentation:** Next.js pages, accessible components, motion and responsive design.
2. **Application services:** validated server actions/route handlers for enquiries, resume imports, resume persistence and exports.
3. **Data:** Firestore documents and private Cloud Storage objects.
4. **Trusted operations:** Cloud Functions or protected server routes for privileged work.
5. **External capabilities:** optional OCR/parser and email provider, added only when configured and reviewed.

## 2. Request flow

Public page:
Browser → Next.js route → server/static rendering → SEO metadata → page response.

Public enquiry:
Browser form → validation → protected server endpoint → abuse/rate checks → Firestore write → notification/email if configured → confirmation.

Resume import:
Browser upload → file-size/type checks → private temporary storage or controlled upload endpoint → extraction/parser → sanitised structured data → user review → save approved resume data.

Resume export:
Editor state → schema validation → template renderer → PDF generation → output validation → authorised download.

## 3. Rendering strategy

- Static generation for stable marketing pages.
- Server rendering for pages that need current server-side data.
- Dynamic rendering for private resume editor routes.
- Never statically generate private resume content.
- Keep heavy 3D/canvas components client-only and lazy-loaded.
- Use a static fallback if WebGL/Canvas is unavailable.

## 4. Suggested source layout

```text
src/
  app/
    (marketing)/
      page.tsx
      about/page.tsx
      services/page.tsx
      education/
      professional-courses/
      hr-and-recruitment/
      resume-studio/
      contact/page.tsx
      faq/page.tsx
      resources/
      privacy/page.tsx
      terms/page.tsx
    api/
      enquiries/route.ts
      recruitment-requirements/route.ts
      candidate-submissions/route.ts
      resume/import/route.ts
      resume/route.ts
      resume/[resumeId]/route.ts
      resume/[resumeId]/export/route.ts
  components/
    layout/
    marketing/
    motion/
    cursor/
    resume/
    forms/
    seo/
  lib/
    firebase/
    validation/
    seo/
    security/
    resume/
    rate-limit/
  content/
    services/
    resources/
  styles/
```

Adapt the exact route-handler strategy to the selected Next.js version; do not duplicate business logic between client and server.

## 5. Animation architecture

- `CustomCursor`: desktop pointer only, `pointer-events:none`.
- `CursorGlow`: pointer-position radial gradient.
- `CursorTrail`: capped, short-lived particles.
- `CosmicBackground`: layered CSS gradients and optional Canvas particles.
- `BlackHoleScene`: lazy-loaded hero visual; Three.js only if needed.
- `MagneticButton`: restrained translation on fine pointers.
- `ScrollReveal`: intersection-triggered reveal, disabled/reduced under reduced-motion.
- `PageTransition`: short transitions that never delay navigation.

Animation state must not be coupled to Firestore or resume data state.

## 6. Firebase boundaries

Client SDK may be used for operations explicitly permitted by security rules. Privileged writes, ownership verification, import processing, administrative operations and protected exports must be performed through trusted server code.

Never ship service-account credentials or Admin SDK secrets to the browser.

## 7. Error handling

- Return safe, user-readable error messages.
- Keep detailed exceptions in protected server logs.
- Never log resume content, uploaded text, access tokens or contact data unnecessarily.
- Support retry for transient import/export failures.
- Preserve unsaved editor state locally while safe to do so, and warn before destructive navigation.

## 8. Scalability boundaries

Firestore is not a full-text search engine. The initial website can use static content and curated service pages. If a searchable public catalogue is introduced later, define its requirements and evaluate a search service separately. Do not build an unrequested tutor marketplace or dashboard.
