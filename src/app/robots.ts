import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nivo.education';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/resume-studio/editor/',
          '/resume-studio/preview/',
          '/resume-studio/import'
        ]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
