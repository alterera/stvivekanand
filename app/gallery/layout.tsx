import { Metadata } from "next";

const siteUrl = "https://stvivekanandschool.com";
const ogImage = `${siteUrl}/st-og.png`;

export const metadata: Metadata = {
  title: "Gallery | St. Vivekanand School Bikaner",
  description:
    "Explore the photo and video gallery of St. Vivekanand School, showcasing campus life, events, sports, and student achievements.",
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
  keywords: [
    "school gallery",
    "campus photos",
    "events gallery",
    "St. Vivekanand School",
    "best school in bikaner",
  ],
  openGraph: {
    title: "Gallery | St. Vivekanand School Bikaner",
    description:
      "Explore the photo and video gallery of St. Vivekanand School, showcasing campus life, events, sports, and student achievements.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
    url: `${siteUrl}/gallery`,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "St. Vivekanand School Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | St. Vivekanand School Bikaner",
    description:
      "Explore the photo and video gallery of St. Vivekanand School, showcasing campus life, events, sports, and student achievements.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


