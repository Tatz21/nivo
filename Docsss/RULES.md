# Non-Negotiable Project Rules — Nivó

These rules apply to developers and AI coding agents.

## Product scope
1. Nivó is an education, professional training, HR/recruitment company established in 2020.
2. The website has four visible product/service themes: Education, Professional Courses, HR & Recruitment, Resume Studio.
3. Do not add student, tutor or institute dashboards.
4. Do not add a general authentication system for the marketing site.
5. Do not build an LMS, video conferencing product, ATS, job board, payment flow or SEO CMS.
6. Resume-specific save/reopen functionality is allowed, but its access model must be secure and documented.

## Visual direction
7. The website must not feel boxy or like a generic dashboard template.
8. Implement a moving custom cursor on supported desktop pointers.
9. Implement animated backgrounds and the black-hole-inspired signature visual.
10. Cursor and background effects must never block clicks, text selection or keyboard use.
11. Respect reduced-motion settings and provide touch/static fallbacks.
12. Do not sacrifice readability or performance for animation.
13. Do not add animation libraries redundantly.

## Content integrity
14. State that Nivó has operated since 2020.
15. Do not invent clients, employee counts, student counts, ratings, awards, office addresses, phone numbers, outcomes or placement guarantees.
16. Do not claim services are available in a location unless confirmed.
17. Do not publish fabricated testimonials or fake profiles.

## Resume engine
18. Store resume content as structured, versioned data.
19. Imported information must be reviewable and editable.
20. Templates must be independent from resume content.
21. PDF export must create a real document, not a screenshot.
22. Private resumes and candidate files must not be public by default.
23. A resume ID alone is not authorization.
24. Test multi-page documents, Unicode, page breaks and long content.

## Firebase/security
25. Validate all untrusted input on the server.
26. Keep service credentials server-side.
27. Use restrictive Firestore and Storage rules.
28. Do not permit public reads of private collections.
29. Test rules in the Firebase Emulator Suite.
30. Never deploy permissive development rules.

## SEO
31. Make public pages SEO-ready with unique metadata, canonical URLs and crawlable links.
32. Generate sitemap and robots configuration from approved public routes.
33. Keep private resume pages and documents out of search indexes.
34. Do not build an SEO CMS.
35. Do not bulk-generate thin or empty location pages.

## Engineering
36. TypeScript strict mode.
37. Accessible semantic HTML.
38. Validate forms with shared schemas.
39. Add loading, error, empty and success states.
40. Keep docs updated when architecture or scope changes.
41. Do not silently expand scope; record proposed changes in `CHANGELOG.md` or a decision note.
