import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Counselling | St. Vivekanand School Bikaner",
  description: "Discover our comprehensive career counselling services, helping students make informed decisions about their future through expert guidance and annual career fairs at St. Vivekanand School.",
  alternates: {
    canonical: 'https://stvivekanandschool.com/admissions/career-counselling',
  },
  keywords: [
    "career counselling",
    "career guidance",
    "student counselling",
    "career planning",
    "best school in bikaner",
    "career development",
    "educational counselling",
    "career fair",
    "student support"
  ],
  openGraph: {
    title: "Career Counselling | St. Vivekanand School Bikaner",
    description: "Discover our comprehensive career counselling services, helping students make informed decisions about their future through expert guidance and annual career fairs at St. Vivekanand School.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Counselling | St. Vivekanand School Bikaner",
    description: "Discover our comprehensive career counselling services, helping students make informed decisions about their future through expert guidance and annual career fairs at St. Vivekanand School.",
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

export default function CareerCounsellingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 