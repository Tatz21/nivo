import { MetadataRoute } from 'next';
import { EDUCATION_SERVICES } from '@/lib/data/services';
import { PROFESSIONAL_COURSES } from '@/lib/data/courses';
import { RECRUITMENT_SERVICES } from '@/lib/data/recruitment';
import { RESOURCE_ARTICLES } from '@/lib/data/resources';

/**
 * Technical SEO Sitemap
 * Compliant with PRD Section 9:
 * "Private resume editor, import and preview routes must not be indexed."
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nivo.education';

  // Static public pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/education`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/professional-courses`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hr-and-recruitment`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/resume-studio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/resume-studio/templates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }
  ];

  // Dynamic education services
  const educationRoutes: MetadataRoute.Sitemap = EDUCATION_SERVICES.map((s) => ({
    url: `${baseUrl}/education/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85
  }));

  // Dynamic course routes
  const courseRoutes: MetadataRoute.Sitemap = PROFESSIONAL_COURSES.map((c) => ({
    url: `${baseUrl}/professional-courses/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85
  }));

  // Dynamic recruitment routes
  const recruitmentRoutes: MetadataRoute.Sitemap = RECRUITMENT_SERVICES.map((r) => ({
    url: `${baseUrl}/hr-and-recruitment/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85
  }));

  // Dynamic resource articles
  const resourceRoutes: MetadataRoute.Sitemap = RESOURCE_ARTICLES.map((a) => ({
    url: `${baseUrl}/resources/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75
  }));

  return [
    ...staticRoutes,
    ...educationRoutes,
    ...courseRoutes,
    ...recruitmentRoutes,
    ...resourceRoutes
  ];
}
