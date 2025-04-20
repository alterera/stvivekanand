import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fee Structure 2025-26 | St. Vivekanand School Bikaner",
  description: "Explore our transparent and structured fee system for the academic year 2025-26, offering flexible payment options and clear fee breakdowns at St. Vivekanand School.",
  keywords: [
    "school fees",
    "fee structure",
    "academic fees",
    "school payment",
    "best school in bikaner",
    "education cost",
    "school expenses",
    "fee payment",
    "academic year fees"
  ],
  openGraph: {
    title: "Fee Structure 2025-26 | St. Vivekanand School Bikaner",
    description: "Explore our transparent and structured fee system for the academic year 2025-26, offering flexible payment options and clear fee breakdowns at St. Vivekanand School.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fee Structure 2025-26 | St. Vivekanand School Bikaner",
    description: "Explore our transparent and structured fee system for the academic year 2025-26, offering flexible payment options and clear fee breakdowns at St. Vivekanand School.",
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

export default function FeeStructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 