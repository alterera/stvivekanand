import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us | St. Vivekanand School Bikaner",
  description: "Discover why St. Vivekanand School is the preferred choice for education in Bikaner, offering experiential learning, modern infrastructure, and a strong cultural foundation.",
  keywords: [
    "why choose St. Vivekanand",
    "best school in bikaner",
    "experiential learning",
    "modern school infrastructure",
    "quality education",
    "school facilities",
    "educational excellence",
    "student development",
    "school advantages"
  ],
  openGraph: {
    title: "Why Choose Us | St. Vivekanand School Bikaner",
    description: "Discover why St. Vivekanand School is the preferred choice for education in Bikaner, offering experiential learning, modern infrastructure, and a strong cultural foundation.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Us | St. Vivekanand School Bikaner",
    description: "Discover why St. Vivekanand School is the preferred choice for education in Bikaner, offering experiential learning, modern infrastructure, and a strong cultural foundation.",
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

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 