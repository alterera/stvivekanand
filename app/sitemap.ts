import type { MetadataRoute } from "next";
import { sanityFetch } from "@/lib/sanity";
import {
  ALL_BLOGS_QUERY,
  ALL_EVENTS_QUERY,
  ALL_CURRICULAR_QUERY,
  ALL_LEGAL_PAGES_QUERY,
} from "@/lib/queries";
import { SITE_URL } from "@/lib/seo";

type SlugDoc = {
  slug: { current: string };
  _updatedAt?: string;
  publishedAt?: string;
  lastUpdated?: string;
};

/** Bump when copy on the hardcoded pages changes. */
const STATIC_LAST_MODIFIED = new Date("2026-09-26");

const STATIC_ROUTES = [
  "/about-us/our-history",
  "/about-us/why-choose-us",
  "/about-us/mission-vision",
  "/about-us/principals-message",
  "/academics/overview",
  "/academics/all-facilities",
  "/academics/cbse-affiliation",
  "/academics/streams-offered",
  "/academics/curriculum",
  "/academics/sports",
  "/gallery",
  "/admissions/admission-process",
  "/admissions/fee-structure",
  "/admissions/tc-updates",
  "/mandatory-disclosure",
  "/contact-us",
  "/schedule-a-call",
];

function toDate(...values: (string | undefined)[]) {
  const value = values.find(Boolean);
  return value ? new Date(value) : undefined;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/news`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/events`, changeFrequency: "weekly", priority: 0.8 },
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  try {
    const [blogs, events, curricular, legalPages] = await Promise.all([
      sanityFetch<SlugDoc[]>({ query: ALL_BLOGS_QUERY, tags: ["blog"] }),
      sanityFetch<SlugDoc[]>({ query: ALL_EVENTS_QUERY, tags: ["event"] }),
      sanityFetch<SlugDoc[]>({ query: ALL_CURRICULAR_QUERY, tags: ["curricular"] }),
      sanityFetch<SlugDoc[]>({ query: ALL_LEGAL_PAGES_QUERY, tags: ["legal"] }),
    ]);

    const toEntries = (
      docs: SlugDoc[] | null,
      prefix: string,
      changeFrequency: "weekly" | "monthly" | "yearly",
      priority: number,
    ): MetadataRoute.Sitemap =>
      (docs ?? [])
        .filter((doc) => doc.slug?.current)
        .map((doc) => ({
          url: `${SITE_URL}${prefix}/${doc.slug.current}`,
          lastModified: toDate(doc._updatedAt, doc.lastUpdated, doc.publishedAt),
          changeFrequency,
          priority,
        }));

    return [
      ...staticRoutes,
      ...toEntries(blogs, "/news", "monthly", 0.7),
      ...toEntries(events, "/events", "monthly", 0.7),
      ...toEntries(curricular, "/co-curricular", "monthly", 0.7),
      ...toEntries(legalPages, "", "yearly", 0.3),
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticRoutes;
  }
}
