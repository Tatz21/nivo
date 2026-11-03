# SEO Specification — Nivó

## 1. Objective

Make Nivó's service pages technically SEO-ready at launch. There is no custom SEO CMS. Page content and metadata are managed in version-controlled code using shared utilities.

## 2. Main search themes

- Education and tuition services.
- Kindergarten and school teacher recruitment.
- College/faculty recruitment.
- Music, dance, drawing and foreign-language learning.
- Professional courses for working professionals.
- Coding, AI/ML, design and video editing training.
- HR and recruitment services.
- Teacher CV maker.
- Academic CV/resume builder.
- Professional resume builder.

Keyword demand and local competition should be researched before prioritising new landing pages. Do not claim rankings or search volume without evidence.

## 3. Route and content rules

Each indexable page must have:
- One clear primary intent.
- Unique title and meta description.
- One primary H1.
- Useful, original copy.
- Relevant internal links.
- Accurate service claims.
- A canonical URL.
- Appropriate indexability.
- Responsive and accessible content.

Do not create thousands of near-identical city/state pages. Publish location pages only when Nivó has meaningful service coverage or useful local information.

## 4. Metadata

Use the Next.js metadata API or a shared metadata utility. Define:
- `title`
- `description`
- `alternates.canonical`
- Open Graph title/description/image/type
- Twitter/social card metadata where appropriate
- Robots directives

Use absolute canonical URLs from a single configured production base URL. Do not canonicalise all pages to the homepage.

## 5. Sitemap and robots

- Generate `sitemap.xml` from approved public routes and published resources.
- Exclude private resume editor, import, preview, export and temporary routes.
- Exclude internal API endpoints.
- Exclude drafts, error pages, query-string duplicates and non-canonical URLs.
- `robots.txt` should guide crawlers but is not an access-control mechanism.
- Protect private data with authorization, not robots directives alone.

## 6. Structured data

Use only valid, visible-content-matched structured data where applicable:
- Organization.
- BreadcrumbList.
- Article for genuine resources.
- Course only when eligibility and content requirements are met.
- EducationalOrganization only for a relevant, accurately represented entity.

Do not fabricate ratings, reviews, addresses, awards, placement rates or course details. Validate structured data before release.

## 7. Internal links

Create contextual links between:
- Main service overview and detailed service pages.
- Education categories and relevant course pages.
- HR overview and recruitment service pages.
- Resume Studio landing page and template pages.
- Resources and the services they genuinely support.

Avoid keyword stuffing and repeated exact-match anchor text.

## 8. Technical SEO

- Server-render or statically generate public content where appropriate.
- Use semantic HTML and crawlable links.
- Optimise image sizes and alt text.
- Set correct 200/301/404/410 statuses.
- Use one canonical URL convention.
- Avoid duplicate slash, case and query variants.
- Keep navigation crawlable.
- Monitor Search Console and Core Web Vitals after launch.

## 9. International readiness

Keep URLs and content architecture extensible, but do not publish country/state/city pages for markets where the service is unavailable or the page would be thin. Add localised versions only when content and service coverage justify them. Use `hreflang` only when genuine language/region alternatives exist.

## 10. Resume privacy and indexing

- Resume documents and generated PDFs are private by default.
- Add `noindex` to private tool routes where appropriate, but enforce access control separately.
- Never place resume data, access tokens or personal information in URLs, page titles, metadata, sitemap or analytics.
- Public template pages may be indexable; private user-specific previews may not.
