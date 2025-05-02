import { MetadataRoute } from 'next';
import { sanityClient } from '@/lib/sanity';
import { ALL_BLOGS_QUERY, EVENT_QUERY, CURRICULAR_QUERY } from '@/lib/queries';

interface Blog {
  slug: string;
  publishedAt: string;
}

interface Event {
  slug: string;
}

interface Curricular {
  slug: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://stvivekanandschool.com';

  // Static routes
  const staticRoutes = [
    '',
    '/about-us/our-history',
    '/about-us/why-choose-us',
    '/about-us/mission-vision',
    '/about-us/principals-message',
    '/academics/overview',
    '/academics/all-facilities',
    '/academics/cbse-affiliation',
    '/academics/streams-offered',
    '/academics/sports',
    '/gallery',
    '/admissions/admission-process',
    '/admissions/fee-structure',
    '/admissions/career-counselling',
    '/mandatory-disclosure',
    '/news',
    '/events',
    '/contact-us',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  try {
    // Fetch dynamic routes from Sanity
    const [blogs, events, Curricular] = await Promise.all([
      sanityClient.fetch<Blog[]>(ALL_BLOGS_QUERY),
      sanityClient.fetch<Event[]>(EVENT_QUERY),
      sanityClient.fetch<Curricular[]>(CURRICULAR_QUERY),
    ]);

    // Blog routes
    const blogRoutes = blogs?.map((blog) => ({
      url: `${baseUrl}/news/${blog.slug}`,
      lastModified: new Date(blog.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })) || [];

    // Event routes
    const eventRoutes = events?.map((event) => ({
      url: `${baseUrl}/events/${event.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })) || [];

    // Event routes
    const curricularRoutes = Curricular?.map((curricular) => ({
      url: `${baseUrl}/co-curricular/${curricular.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })) || [];

    // Combine all routes
    return [...staticRoutes, ...blogRoutes, ...eventRoutes];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return only static routes if there's an error
    return staticRoutes;
  }
} 