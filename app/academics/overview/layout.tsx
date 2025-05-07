import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics Overview | St. Vivekanand School Bikaner",
  description: "Explore our comprehensive academic programs, state-of-the-art facilities, and innovative learning approaches at St. Vivekanand School, Bikaner's premier educational institution.",
  alternates: {
    canonical: 'https://stvivekanandschool.com/academics/overview',
  },
  keywords: [
    "academics overview",
    "school facilities",
    "educational programs",
    "learning environment",
    "best school in bikaner",
    "academic excellence",
    "school infrastructure",
    "educational facilities",
    "student development"
  ],
  openGraph: {
    title: "Academics Overview | St. Vivekanand School Bikaner",
    description: "Explore our comprehensive academic programs, state-of-the-art facilities, and innovative learning approaches at St. Vivekanand School, Bikaner's premier educational institution.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academics Overview | St. Vivekanand School Bikaner",
    description: "Explore our comprehensive academic programs, state-of-the-art facilities, and innovative learning approaches at St. Vivekanand School, Bikaner's premier educational institution.",
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

export default function AcademicsOverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 