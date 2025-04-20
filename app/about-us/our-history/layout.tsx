import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our History | St. Vivekanand School Bikaner",
  description: "Explore the rich history of St. Vivekanand School, from its foundation in 1977 to becoming one of Bikaner's leading educational institutions.",
  keywords: [
    "school history",
    "St. Vivekanand School history",
    "school foundation",
    "educational legacy",
    "Bikaner school history",
    "best school in bikaner",
    "school establishment",
    "educational institution",
    "school development"
  ],
  openGraph: {
    title: "Our History | St. Vivekanand School Bikaner",
    description: "Explore the rich history of St. Vivekanand School, from its foundation in 1977 to becoming one of Bikaner's leading educational institutions.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our History | St. Vivekanand School Bikaner",
    description: "Explore the rich history of St. Vivekanand School, from its foundation in 1977 to becoming one of Bikaner's leading educational institutions.",
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

export default function OurHistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 