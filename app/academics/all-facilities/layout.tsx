import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Facilities | St. Vivekanand School Bikaner",
  description: "Explore our state-of-the-art academic facilities including science labs, computer labs, library, and specialized learning spaces at St. Vivekanand School.",
  alternates: {
    canonical: 'https://stvivekanandschool.com/academics/all-facilities',
  },
  keywords: [
    "school facilities",
    "academic infrastructure",
    "science labs",
    "computer labs",
    "best school in bikaner",
    "learning spaces",
    "educational facilities",
    "school infrastructure",
    "modern classrooms"
  ],
  openGraph: {
    title: "Academic Facilities | St. Vivekanand School Bikaner",
    description: "Explore our state-of-the-art academic facilities including science labs, computer labs, library, and specialized learning spaces at St. Vivekanand School.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Facilities | St. Vivekanand School Bikaner",
    description: "Explore our state-of-the-art academic facilities including science labs, computer labs, library, and specialized learning spaces at St. Vivekanand School.",
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

export default function AllFacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 