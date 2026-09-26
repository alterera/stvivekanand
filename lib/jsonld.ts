import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "./seo";

export const SCHOOL_ID = `${SITE_URL}/#school`;

export function schoolJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["School", "EducationalOrganization"],
    "@id": SCHOOL_ID,
    name: SITE_NAME,
    alternateName: "Saint Vivekanand School Bikaner",
    url: SITE_URL,
    logo: absoluteUrl("/assets/logo/stlogo.png"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description:
      "CBSE-affiliated school in Bikaner offering education from Nursery to Class 12, with modern facilities, sports, and co-curricular programmes.",
    foundingDate: "1977",
    email: "st.vivekanand@yahoo.com",
    telephone: ["+91-151-2231906", "+91-9571665859"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Statue Circle, JNV Main Rd, Sector 3, Jai Narayan Vyas Colony",
      addressLocality: "Bikaner",
      addressRegion: "Rajasthan",
      postalCode: "334001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.010102,
      longitude: 73.3491114,
    },
    hasMap: "https://www.google.com/maps/search/?api=1&query=Saint+Vivekanand+School+Bikaner",
  };
}

export function breadcrumbJsonLd(pathname: string, currentLabel?: string) {
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", url: SITE_URL }];

  segments.forEach((segment, index) => {
    const isLast = index === segments.length - 1;
    const name =
      isLast && currentLabel
        ? currentLabel
        : segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    items.push({ name, url: absoluteUrl(`/${segments.slice(0, index + 1).join("/")}`) });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleJsonLd({
  type = "Article",
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: {
  type?: "Article" | "NewsArticle";
  headline: string;
  description?: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: headline.slice(0, 110),
    description,
    mainEntityOfPage: absoluteUrl(path),
    image: image ? [image] : [absoluteUrl(DEFAULT_OG_IMAGE)],
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      "@id": SCHOOL_ID,
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: absoluteUrl("/assets/logo/stlogo.png") },
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
