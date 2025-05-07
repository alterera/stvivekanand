import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CBSE Affiliation | St. Vivekanand School Bikaner",
  description: "Learn about our CBSE affiliation and how we maintain high educational standards following the Central Board of Secondary Education guidelines at St. Vivekanand School.",
  alternates: {
    canonical: 'https://stvivekanandschool.com/academics/cbse-affiliation',
  },
  keywords: [
    "CBSE school",
    "CBSE affiliation",
    "Central Board of Secondary Education",
    "educational standards",
    "best school in bikaner",
    "CBSE curriculum",
    "school certification",
    "academic excellence",
    "educational accreditation"
  ],
  openGraph: {
    title: "CBSE Affiliation | St. Vivekanand School Bikaner",
    description: "Learn about our CBSE affiliation and how we maintain high educational standards following the Central Board of Secondary Education guidelines at St. Vivekanand School.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "CBSE Affiliation | St. Vivekanand School Bikaner",
    description: "Learn about our CBSE affiliation and how we maintain high educational standards following the Central Board of Secondary Education guidelines at St. Vivekanand School.",
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

export default function CbseAffiliationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 