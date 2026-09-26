import { cache } from "react";
import { createClient, type QueryParams } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "vynrfzal";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: true,
});

/** Fallback window; publishes also revalidate on demand via /api/revalidate. */
const REVALIDATE_SECONDS = 3600;

const cachedFetch = cache(
  (query: string, paramsKey: string, tagsKey: string): Promise<unknown> =>
    sanityClient.fetch(query, JSON.parse(paramsKey) as QueryParams, {
      next: { revalidate: REVALIDATE_SECONDS, tags: JSON.parse(tagsKey) as string[] },
    }),
);

/**
 * Cached, tagged Sanity query for server components. Wrapped in React `cache`
 * so `generateMetadata` and the page share one request per render.
 */
export function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<T> {
  return cachedFetch(query, JSON.stringify(params), JSON.stringify(tags)) as Promise<T>;
}

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
