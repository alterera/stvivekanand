import { MetadataRoute } from 'next';
import { sanityClient } from '@/lib/sanity';
import { ALL_BLOGS_QUERY, EVENT_QUERY } from '@/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://stvivekanandschool.com';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/admissions',
    '/admissions/admission-process',
    '/admissions/fee-structure',
    '/admissions/career-counselling',
    '/academics',
    '/co-curricular',
    '/facilities',
    '/news',
    '/events',
    '/contact-us',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch dynamic routes from Sanity
  const [blogs, events] = await Promise.all([
    sanityClient.fetch(ALL_BLOGS_QUERY),
    sanityClient.fetch(EVENT_QUERY),
  ]);

  // Blog routes
  const blogRoutes = blogs.map((blog: any) => ({
    url: `${baseUrl}/news/${blog.slug}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Event routes
  const eventRoutes = events.map((event: any) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Combine all routes
  return [...staticRoutes, ...blogRoutes, ...eventRoutes];
} 