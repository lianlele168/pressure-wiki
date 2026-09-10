import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pressure.robloxwikihub.com';
  const d = new Date().toISOString();

  return [
    { url: `${baseUrl}/`, lastModified: d, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/calculator/`, lastModified: d, changeFrequency: 'daily', priority: 0.95 },
    { url: `${baseUrl}/codes/`, lastModified: d, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/tier-list/`, lastModified: d, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/monster-index/`, lastModified: d, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/badge-guide/`, lastModified: d, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/beginner-guide/`, lastModified: d, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
