import { groq } from "next-sanity";
import { sanityFetch } from "./sanity";
import { Sport } from "@/types/index";

export const SPORTS_QUERY = groq`
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
`;

export function getSportsData(): Promise<Sport[]> {
  return sanityFetch<Sport[]>({ query: SPORTS_QUERY, tags: ["sports"] });
}

export const HERO_QUERY = groq`
  *[_type == "hero"] | order(order asc) {
    title,
    description,
    buttonText,
    url
  }
`;

export const GALLERY_QUERY = groq`
  *[_type == "gallery"] {
    title,
    "images": images[].asset->url
  }
`;

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

export const ALL_CURRICULAR_QUERY = groq`
  *[_type == "curricular"] {
    title,
    slug {
      current
    },
    _updatedAt,
    description,
    image {
      asset-> {
        url
      }
    }
  }
`;

export const ALL_BLOGS_QUERY = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    title,
    slug {
      current
    },
    featuredImage {
      asset-> {
        url
      }
    },
    publishedAt,
    _updatedAt
  }
`;

export const BLOG_QUERY = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    title,
    excerpt,
    article,
    featuredImage {
      asset-> {
        url
      }
    },
    publishedAt,
    _updatedAt
  }
`;

export const HOME_BLOGS_QUERY = groq`
  *[_type == "blog"] | order(publishedAt desc) [0...4] {
    title,
    slug,
    excerpt,
    featuredImage {
      asset-> {
        url
      }
    },
    publishedAt
  }
`;

export const ALL_EVENTS_QUERY = groq`
  *[_type == "event"] | order(_createdAt desc) {
    title,
    slug {
      current
    },
    _updatedAt,
    subtitle,
    description,
    images[] {
      asset-> {
        _id,
        url
      }
    }
  }
`;

export const HOME_EVENTS_QUERY = groq`
  *[_type == "event"] | order(_createdAt desc) {
    _id,
    title,
    "imageUrl": images[0].asset->url,
    "slug": slug.current
  }
`;

export const LATEST_BLOGS_QUERY = groq`
  *[_type == "blog"] | order(publishedAt desc) [0...4] {
    title,
    slug
  }
`;

export const EVENT_QUERY = groq`
  *[_type == "event" && slug.current == $slug][0] {
    title,
    subtitle,
    description,
    _createdAt,
    _updatedAt,
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

export const MANDATORY_DISCLOSURE_QUERY = groq`
  *[_type == "mandatoryDisclosure"][0] {
    title,
    description,
    tables[] | order(order asc) {
      order,
      tableName,
      tableType,
      content[] {
        srNo,
        information,
        detail,
        file {
          asset-> {
            url
          }
        },
        link
      }
    }
  }
`;

export const FEE_STRUCTURE_QUERY = groq`
  *[_type == "feeStructure"] | order(order asc) {
    _id,
    title,
    order,
    fees[] {
      class,
      emi1,
      emi2,
      emi3,
      yearly
    }
  }
`;

export const ALL_LEGAL_PAGES_QUERY = groq`
  *[_type == "legal"] | order(lastUpdated desc) {
    title,
    slug {
      current
    },
    pageType,
    lastUpdated
  }
`;

export const LEGAL_PAGE_QUERY = groq`
  *[_type == "legal" && slug.current == $slug][0] {
    title,
    metaDescription,
    content,
    lastUpdated,
    effectiveDate,
    pageType
  }
`;

export const TC_UPDATES_QUERY = groq`
  *[_type == "transferCertificate"] | order(serialNo asc) {
    serialNo,
    studentName,
    "pdfUrl": certificate.asset->url,
    "fileName": certificate.asset->originalFilename
  }
`;

export const SLUGS_QUERY = groq`*[_type == $type && defined(slug.current)].slug.current`;

export function getSlugs(type: "blog" | "event" | "curricular" | "legal") {
  return sanityFetch<string[]>({ query: SLUGS_QUERY, params: { type }, tags: [type] });
}
