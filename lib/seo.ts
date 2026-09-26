import type { Metadata } from "next";

export const SITE_URL = "https://stvivekanandschool.com";
export const SITE_NAME = "St. Vivekanand School";
export const BRAND_SUFFIX = "St. Vivekanand School Bikaner";
export const DEFAULT_OG_IMAGE = "/st-og.jpg";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function truncate(text: string, max = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}

export function brandTitle(title: string) {
  return `${title} | ${BRAND_SUFFIX}`;
}

/** Metadata for slug pages whose document is missing; `notFound()` renders the 404. */
export function notFoundMetadata(label: string, description: string): Metadata {
  return {
    title: { absolute: brandTitle(label) },
    description,
    robots: { index: false, follow: true },
  };
}

/**
 * `title` is the short page title; the brand suffix is added here as an absolute
 * title because a string title in a nested layout (e.g. /news) would otherwise
 * drop the root template for every page below it.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  type = "website",
  noIndex = false,
}: PageMetadataInput): Metadata {
  const fullTitle = brandTitle(title);
  const url = absoluteUrl(path);

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      type,
      locale: "en_IN",
      siteName: SITE_NAME,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt ?? fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
