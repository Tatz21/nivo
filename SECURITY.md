# Security & Privacy — Nivó

## 1. Security objectives

Protect enquiry records, candidate resumes, imported files, saved resume data and any access capability used by Resume Studio.

## 2. Threats to address

- Public form spam and automated abuse.
- Unauthorized access to private resumes.
- Guessable or leaked resume URLs/tokens.
- Malicious or malformed uploaded files.
- Oversized uploads and parser resource exhaustion.
- Stored or reflected XSS from imported resume text.
- Privilege escalation through client-controlled fields.
- Exposed Firebase service credentials.
- Publicly readable Storage buckets.
- Personal data leaking through analytics/logs.
- Duplicate or fraudulent submissions.

## 3. Access control

- Main marketing site does not require general authentication.
- Private resume data still requires authorization.
- Select a documented Resume Studio access model before coding.
- Never treat a resume ID as an authorization credential.
- Verify ownership server-side for read, update, export and delete.
- Use least-privilege Firebase rules.
- Keep private candidate submissions and recruitment requirements inaccessible to public collection reads.
- Do not allow client-controlled role or approval fields.

## 4. Upload security

- Accept PDF and DOCX only initially.
- Enforce maximum file size and page/processing limits.
- Check actual file signatures/content where practical.
- Do not trust filename or MIME header alone.
- Parse in a controlled environment with timeouts.
- Never execute macros, scripts or embedded active content.
- Sanitize extracted text before rendering.
- Use random storage names.
- Keep original uploads private.
- Apply expiration/cleanup for temporary files.
- Consider malware scanning where operationally appropriate.

## 5. Firebase

- Use separate development/staging/production projects.
- Test rules in the Emulator Suite.
- Never use permissive production rules.
- Keep Admin SDK/service credentials server-side.
- Use App Check where supported.
- Limit callable/server operations and validate all inputs.
- Review Storage rules independently from Firestore rules.

## 6. Public forms

- Server-side validation and allowlisted fields.
- Rate limits and anti-abuse signals.
- Honeypot or challenge mechanisms as appropriate.
- Safe error messages.
- No arbitrary Storage path acceptance.
- Consent/privacy text appropriate to the submission purpose.
- Avoid storing unnecessary personal data.

## 7. Resume privacy

- Private by default.
- No public resume listing.
- Secure access, revocation and deletion.
- No sensitive resume text in logs or analytics.
- Avoid putting tokens in query strings where possible.
- Set suitable cache controls on private responses.
- Prevent search indexing of private pages and files.
- Document retention and deletion policies.
- Do not send resume content to third-party AI services unless explicitly added, disclosed and consented to.

## 8. Web security

- Use HTTPS.
- Apply suitable security headers and Content Security Policy.
- Protect server routes from CSRF where applicable.
- Encode untrusted content.
- Keep dependencies patched.
- Restrict CORS.
- Do not expose environment variables to the browser unless intended to be public.
- Avoid leaking internal errors.

## 9. Privacy operations

Provide a privacy notice describing:
- Data collected.
- Why it is collected.
- Storage and processing.
- Retention.
- How users can request deletion or correction.
- Contact route for privacy requests.

Review applicable Indian and other relevant privacy requirements before launch. This document is an engineering specification, not legal advice.
