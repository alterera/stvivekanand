// lib/queries.ts
import { groq } from 'next-sanity';
import { sanityClient } from './sanity';
import { Sport } from '@/types/index';

export async function getSportsData(): Promise<Sport[]> {
  return sanityClient.fetch(groq`
    *[_type == "sports"] {
      _id,
      title,
      intro,
      atSchoolTitle,
      atSchoolIntro,
      images[] {
        asset-> {
          _id,
          url
        }
      },
      faqs[] {
        faq,
        answer
      },
      sportId {
        current
      }
    }
  `);
}

export const GALLERY_QUERY = `*[_type == "gallery"]{
  title,
  "images": images[].asset->url,
  category
}`;

export const CURRICULAR_QUERY = groq`
  *[_type == "curricular" && slug.current == $slug][0] {
    title,
    subtitle,
    description,
    image {
      asset-> {
        url
      }
    }
  }
`;

// Fetch all blog posts
export const ALL_BLOGS_QUERY = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    title,
    slug,
    featuredImage {
      asset-> {
        url
      }
    },
    publishedAt
  }
`;

// Fetch a single blog post by slug
export const BLOG_QUERY = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    title,
    article,
    featuredImage {
      asset-> {
        url
      }
    },
    publishedAt
  }
`;

export const EVENT_QUERY = groq`
  *[_type == "event" && slug.current == $slug][0] {
    title,
    subtitle,
    description,
    images[] {
      asset-> {
        _id,
        url
      }
    },
    relatedPosts[]-> {
      title,
      slug {
        current
      }
    }
  }
`;

// Fetch latest blog posts (for the "Latest Posts" section)
export const LATEST_BLOGS_QUERY = groq`
  *[_type == "blog"] | order(publishedAt desc) [0...4] {
    title,
    slug
  }
`;
