# Database & Storage — Nivó

## 1. Principles

- Firestore is the primary database.
- Keep public content separate from private submissions and resume data.
- Store resume content as structured, versioned data.
- Keep uploaded documents private.
- Minimise personal data.
- Define ownership and deletion behaviour before implementation.
- Use server timestamps and stable IDs.
- Do not store secrets in Firestore documents accessible to clients.

## 2. Collections

### `enquiries/{enquiryId}`
Fields:
- `type`: `education | course | general | resume_support`
- `name`
- `email`
- `phone` (optional)
- `service`
- `message`
- `location` (optional)
- `consentVersion`
- `status`: `new | in_review | closed`
- `createdAt`
- `sourcePath`
- `spamSignals` (minimal internal metadata only)

Private; client must not be able to read the full collection.

### `recruitmentRequirements/{requirementId}`
Fields:
- `organisationName`
- `contactName`
- `businessEmail`
- `phone`
- `organisationType`
- `roleTitle`
- `recruitmentCategory`
- `vacancyCount` (optional)
- `location`
- `qualificationRequirements`
- `experienceRequirements`
- `details`
- `status`
- `createdAt`
- `consentVersion`

Private; server-controlled access.

### `candidateSubmissions/{submissionId}`
Fields:
- `name`
- `email`
- `phone` (optional)
- `professionalCategory`
- `experienceSummary` (optional)
- `preferredLocation` (optional)
- `resumeStoragePath` (optional)
- `message` (optional)
- `status`
- `createdAt`
- `consentVersion`

Private; candidate files must not be public.

### `resumeDocuments/{resumeId}`
Logical fields:
- `ownerRef` or a secure ownership binding
- `title`
- `templateId`
- `schemaVersion`
- `personalDetails`
- `summary`
- `experience[]`
- `education[]`
- `qualifications[]`
- `skills[]`
- `certifications[]`
- `languages[]`
- `achievements[]`
- `customSections[]`
- `createdAt`
- `updatedAt`
- `lastExportedAt`
- `deletedAt` (if soft-delete is used)

The ownership model must be finalised before client writes are enabled. No public read access.

### `resumeTemplates/{templateId}`
Fields:
- `name`
- `slug`
- `category`
- `version`
- `previewAssetPath`
- `isPublished`
- `sortOrder`
- `layoutConfig`
- `createdAt`
- `updatedAt`

Template rendering code must validate configuration; do not execute arbitrary template code stored in Firestore.

### `resumeImports/{importId}`
Fields:
- secure owner binding
- `originalStoragePath`
- `fileType`
- `status`: `uploaded | processing | needs_review | complete | failed`
- `errorCode` (safe code, not raw stack trace)
- `createdAt`
- `expiresAt`

Temporary import records and files require expiration cleanup.

### `siteContent/{contentId}`
Only lightweight editable site copy/configuration if genuinely needed. This is not an SEO CMS. Most page content and metadata should remain version-controlled in code.

### `adminAuditLogs/{logId}`
Restricted audit events for privileged actions. Do not log resume contents or secrets.

## 3. Storage paths

Private:
- `resume-uploads/{ownerKey}/{resumeId}/{fileId}`
- `resume-exports/{ownerKey}/{resumeId}/{exportId}.pdf`
- `candidate-resumes/{submissionId}/{fileId}`

Public marketing assets must be stored separately. Do not make the whole bucket public.

## 4. Ownership and access

Because general authentication is out of scope, the resume product needs a deliberately chosen secure access strategy. Options:
1. Narrowly scoped authentication for Resume Studio.
2. Resume-specific high-entropy access capability verified server-side, with secure cookie/session handling and rotation/revocation.

A resume ID alone is not authorization. Do not store raw access tokens in readable documents or logs. Do not allow public listing of resume documents.

## 5. Indexes and query patterns

Create indexes only for actual queries, for example:
- `resumeImports`: owner binding + status + createdAt.
- `resumeDocuments`: owner binding + updatedAt.
- `resumeTemplates`: isPublished + sortOrder.
- Internal enquiry views: status + createdAt.

Do not expose unrestricted collection queries.

## 6. Retention and deletion

Define retention periods before launch for:
- Failed imports.
- Original uploaded resumes.
- Generated PDFs.
- Candidate submissions.
- Unresolved enquiries.
- Deleted resumes.

Deleting a resume must also delete associated private files or schedule their deletion reliably. Account/session revocation must invalidate resume access.
