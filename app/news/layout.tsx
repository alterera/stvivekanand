import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News & Updates | St. Vivekanand School Bikaner",
  description: "Stay updated with the latest news, events, and announcements from St. Vivekanand School Bikaner. Read about our achievements, activities, and important updates.",
  keywords: [
    "school news",
    "school updates",
    "school announcements",
    "school achievements",
    "best school in bikaner",
    "school activities",
    "school events",
    "education news",
    "school blog"
  ],
  openGraph: {
    title: "Latest News & Updates | St. Vivekanand School Bikaner",
    description: "Stay updated with the latest news, events, and announcements from St. Vivekanand School Bikaner. Read about our achievements, activities, and important updates.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest News & Updates | St. Vivekanand School Bikaner",
    description: "Stay updated with the latest news, events, and announcements from St. Vivekanand School Bikaner. Read about our achievements, activities, and important updates.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 