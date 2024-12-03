import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nathanaelcherrier.dev/fr/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://nathanaelcherrier.dev/en/',
        },
      },
    },
    {
      url: 'https://nathanaelcherrier.dev/fr/developer/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: 'https://nathanaelcherrier.dev/en/developer/',
        },
      },
    },
    {
      url: 'https://nathanaelcherrier.dev/fr/trainer/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: 'https://nathanaelcherrier.dev/en/trainer/',
        },
      },
    },
    {
      url: 'https://nathanaelcherrier.dev/fr/influencer/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: 'https://nathanaelcherrier.dev/en/influencer/',
        },
      },
    },
    {
      url: 'https://nathanaelcherrier.dev/fr/mentor/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: 'https://nathanaelcherrier.dev/en/mentor/',
        },
      },
    },
  ]
}