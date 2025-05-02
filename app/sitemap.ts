import { MetadataRoute } from 'next';
import { sanityClient } from '@/lib/sanity';
import { ALL_BLOGS_QUERY, ALL_EVENTS_QUERY, ALL_CURRICULAR_QUERY } from '@/lib/queries';

interface Blog {
  slug: {
    current: string;
  };
  publishedAt: string;
}

interface Event {
  slug: {
    current: string;
  };
}

interface Curricular {
  slug: {
    current: string;
  };
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
    '/contact-us',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  try {
    // Fetch dynamic routes from Sanity
    const [blogs, events, curricular] = await Promise.all([
      sanityClient.fetch<Blog[]>(ALL_BLOGS_QUERY),
      sanityClient.fetch<Event[]>(ALL_EVENTS_QUERY),
      sanityClient.fetch<Curricular[]>(ALL_CURRICULAR_QUERY),
    ]);

    // Blog routes
    const blogRoutes = blogs?.map((blog) => ({
      url: `${baseUrl}/news/${blog.slug.current}`,
      lastModified: new Date(blog.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })) || [];

    // Event routes
    const eventRoutes = events?.map((event) => ({
      url: `${baseUrl}/events/${event.slug.current}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })) || [];

    // Curricular routes
    const curricularRoutes = curricular?.map((item) => ({
      url: `${baseUrl}/co-curricular/${item.slug.current}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })) || [];

    // Combine all routes
    return [...staticRoutes, ...blogRoutes, ...eventRoutes, ...curricularRoutes];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return only static routes if there's an error
    return staticRoutes;
  }
} 