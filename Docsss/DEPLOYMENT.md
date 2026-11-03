# Deployment & Operations — Nivó

## 1. Environments

Use separate environments:
- Local development.
- Staging.
- Production.

Prefer separate Firebase projects for staging and production. Never test destructive migrations against production.

## 2. Environment variables

Example names only; populate them through the hosting platform's secret/environment settings.

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=

EMAIL_PROVIDER_API_KEY=
EMAIL_FROM_ADDRESS=
```

Only genuinely public Firebase web configuration belongs in `NEXT_PUBLIC_*`. Admin credentials and private provider keys must remain server-only. Do not commit `.env` files or service-account keys.

## 3. Firebase setup

- Create projects and web app.
- Configure Firestore.
- Configure Storage.
- Deploy restrictive rules.
- Create required indexes.
- Configure App Check where supported.
- Configure Functions if used.
- Set retention/cleanup jobs for temporary uploads.
- Verify region and data residency requirements.
- Test with Emulator Suite before deployment.

## 4. Build and release

Suggested checks:
1. Install locked dependencies.
2. Run formatting/lint.
3. Run TypeScript check.
4. Run unit and integration tests.
5. Run Firebase security-rule tests.
6. Run production build.
7. Run end-to-end smoke tests against staging.
8. Verify sitemap, robots, canonicals and metadata.
9. Verify cursor/motion fallback.
10. Deploy to staging.
11. Review logs and test core journeys.
12. Promote the tested build to production.

## 5. Hosting

Choose a host compatible with the selected Next.js runtime and server endpoints. Validate Firebase App Hosting or another suitable Next.js host against the actual app features. Do not assume static hosting can run server-side PDF generation or protected API routes.

## 6. Domain and SEO launch

- Configure the production domain and HTTPS.
- Set the canonical base URL.
- Redirect alternate hostnames to the canonical hostname.
- Verify sitemap URL.
- Configure Search Console.
- Verify Open Graph image.
- Check robots rules.
- Test 404 and redirects.
- Ensure private resume routes/files are protected, not merely hidden from crawlers.

## 7. Monitoring and rollback

Monitor:
- Server errors.
- Failed enquiries.
- Resume import/export failures.
- Firebase reads/writes and storage usage.
- Suspicious request volume.
- Core Web Vitals.
- Email delivery failures.

Keep the previous known-good deployment available for rollback. Document database/schema changes and avoid irreversible migrations without a recovery plan.
