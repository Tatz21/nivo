# API Specification — Nivó

All endpoints below are proposed application routes. Use consistent JSON responses and validate every request server-side.

## 1. Response format

Success:
```json
{ "ok": true, "data": {} }
```

Error:
```json
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please check the highlighted fields."
  }
}
```

Never return raw stack traces, secrets or private document contents in error responses.

## 2. Public enquiry

### `POST /api/enquiries`
Accepts education, course and general enquiries.

Example:
```json
{
  "type": "education",
  "name": "Example Name",
  "email": "person@example.com",
  "phone": "+91XXXXXXXXXX",
  "service": "school-tuition",
  "location": "Kolkata",
  "message": "I would like to know about available options.",
  "consentVersion": "privacy-2026-01"
}
```

Rules:
- Validate length, format and allowed `type`.
- Reject unexpected fields.
- Apply rate limiting and abuse checks.
- Store privately.
- Send notifications only through a configured provider.
- Return a submission reference, not the stored private document.

## 3. Recruitment requirement

### `POST /api/recruitment-requirements`
Validates and stores an employer staffing request.

Required fields: organisation name, contact name, business email, organisation type, role title/category, location and consent. Other fields may be optional.

Never allow public clients to read all recruitment requirements.

## 4. Candidate submission

### `POST /api/candidate-submissions`
Accepts candidate contact details and optionally a private resume upload reference.

Resume upload should use a separate signed/authorised upload flow with file size/type checks. Do not accept an arbitrary client-provided Storage path as proof of ownership.

## 5. Resume import

### `POST /api/resume/import`
Accepts an upload reference or a multipart file, depending on the chosen upload architecture.

Processing:
1. Verify access/ownership.
2. Validate file size and content.
3. Accept only PDF/DOCX initially.
4. Parse text in a controlled server environment.
5. Return structured suggestions.
6. Mark import as `needs_review`.
7. Never publish imported content automatically.

Return a safe error code when parsing fails.

## 6. Resume creation/update

### `POST /api/resume`
Creates a resume after validating the schema and ownership context.

### `GET /api/resume/[resumeId]`
Returns only a resume authorised for the current resume owner/session.

### `PATCH /api/resume/[resumeId]`
Updates permitted fields after validating ownership and schema version.

### `DELETE /api/resume/[resumeId]`
Deletes or schedules deletion of the resume and associated files. Revoke its access capability.

Do not expose these operations without an explicit authorization strategy.

## 7. Resume PDF export

### `POST /api/resume/[resumeId]/export`
Body:
```json
{
  "templateId": "teacher-modern",
  "format": "pdf"
}
```

The server must verify access, validate resume data and template, generate the PDF, validate output and return an authorised download response or short-lived download URL.

Do not return a permanent public URL to a private resume.

## 8. Templates

### `GET /api/resume/templates`
Returns published template metadata and preview references. No private resume data.

## 9. Operational requirements

- Enforce request body and upload limits.
- Validate on server.
- Rate-limit public endpoints.
- Use idempotency protection where duplicate submissions are costly.
- Log request IDs and safe error codes.
- Do not log personal resume content or access tokens.
- Apply CORS/CSRF protections appropriate to the hosting architecture.
