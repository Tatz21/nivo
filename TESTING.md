# Testing Strategy — Nivó

## 1. Test layers

- Unit tests: validation, metadata helpers, resume schema and template utilities.
- Component tests: forms, cursor states, template selection and editor controls.
- Integration tests: API handlers with Firebase Emulator Suite.
- End-to-end tests: critical visitor and resume journeys.
- Visual regression: main pages, template gallery and editor.
- Manual tests: pointer effects, touch devices, reduced motion and assistive technology.
- Performance: Lighthouse and real-user Core Web Vitals after launch.

## 2. Public website tests

- Navigation links work.
- All service pages are reachable.
- Responsive layouts work at mobile, tablet and desktop widths.
- Contact and enquiry forms validate required fields.
- Success/error/loading states are clear.
- No fabricated or placeholder business claims remain in production.
- External links are safe and intentional.

## 3. Cursor and motion tests

- Custom cursor only appears on appropriate fine-pointer devices.
- Cursor never blocks clicks or text selection.
- Hover states work on buttons, links and supported visuals.
- Trail particle count is bounded.
- Background animation does not create horizontal overflow.
- No motion is required to reveal essential content.
- `prefers-reduced-motion` disables nonessential effects.
- Touch devices do not show a fake cursor.
- Test unsupported Canvas/WebGL fallback.
- Check frame pacing on representative low/mid-range hardware.

## 4. Resume Studio tests

- Manual resume creation.
- PDF import.
- DOCX import.
- Invalid file rejection.
- Oversized file rejection.
- Malformed PDF/DOCX handling.
- Extraction failure fallback.
- User can correct extracted fields.
- Template switching preserves all data.
- Long names and long section text.
- Unicode and non-English characters.
- Empty optional fields.
- Multiple pages and page breaks.
- Selectable text in exported PDF.
- Reopen saved resume.
- Delete resume and associated files.
- Export authorisation.
- No private cache/public URL leakage.

## 5. Security tests

- User/session A cannot read or modify resume B.
- Guessed resume IDs do not grant access.
- Revoked access no longer works.
- Public clients cannot read enquiries or candidate submissions.
- Client cannot set privileged status fields.
- Upload path ownership is verified.
- Firebase rules reject unauthorised reads/writes.
- Logs contain no resume content, raw tokens or credentials.
- Rate limits work for public forms.

## 6. SEO tests

- Every indexable page has a unique title and description.
- Canonical URL is correct.
- Sitemap contains only approved public URLs.
- Private editor/import/preview routes are excluded.
- Correct 404 status for unknown slugs.
- No accidental `noindex` on public service pages.
- Structured data matches visible content.
- Open Graph metadata is correct.
- No duplicate route variants.

## 7. Release gates

Do not launch if:
- Private resumes can be accessed without authorization.
- Production Firestore/Storage rules are permissive.
- Resume PDF export corrupts or clips content.
- Main forms fail.
- Reduced-motion mode is broken.
- Major mobile layout failures exist.
- Secrets are included in client bundles.
