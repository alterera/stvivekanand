import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum | St. Vivekanand School Bikaner",
  description: "Discover our comprehensive curriculum designed for holistic development, combining academic excellence with practical learning experiences at St. Vivekanand School.",
  alternates: {
    canonical: 'https://stvivekanandschool.com/academics/curriculum',
  },
  keywords: [
    "school curriculum",
    "educational syllabus",
    "academic program",
    "learning framework",
    "best school in bikaner",
    "holistic education",
    "student development",
    "academic excellence",
    "educational approach"
  ],
  openGraph: {
    title: "Curriculum | St. Vivekanand School Bikaner",
    description: "Discover our comprehensive curriculum designed for holistic development, combining academic excellence with practical learning experiences at St. Vivekanand School.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum | St. Vivekanand School Bikaner",
    description: "Discover our comprehensive curriculum designed for holistic development, combining academic excellence with practical learning experiences at St. Vivekanand School.",
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

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 