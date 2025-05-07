import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission & Vision | St. Vivekanand School Bikaner",
  description: "Discover our school's mission to provide holistic education and our vision to create transformative learning experiences for students in Bikaner.",
  alternates: {
    canonical: 'https://stvivekanandschool.com/about-us/mission-vision',
  },
  keywords: [
    "school mission",
    "educational vision",
    "St. Vivekanand School mission",
    "school values",
    "educational philosophy",
    "best school in bikaner",
    "holistic education",
    "student development",
    "educational excellence",
    "schools in bikaner",
    "cbse schools bikaner",
  ],
  openGraph: {
    title: "Mission & Vision | St. Vivekanand School Bikaner",
    description: "Discover our school's mission to provide holistic education and our vision to create transformative learning experiences for students in Bikaner.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission & Vision | St. Vivekanand School Bikaner",
    description: "Discover our school's mission to provide holistic education and our vision to create transformative learning experiences for students in Bikaner.",
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

export default function MissionVisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 