import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission Process | St. Vivekanand School Bikaner",
  description: "Learn about our streamlined admission process, eligibility criteria, and required documents for joining St. Vivekanand School, one of the best schools in Bikaner.",
  keywords: [
    "school admission",
    "admission process",
    "school admission criteria",
    "admission requirements",
    "best school in bikaner",
    "school enrollment",
    "admission documents",
    "school registration",
    "admission eligibility"
  ],
  openGraph: {
    title: "Admission Process | St. Vivekanand School Bikaner",
    description: "Learn about our streamlined admission process, eligibility criteria, and required documents for joining St. Vivekanand School, one of the best schools in Bikaner.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admission Process | St. Vivekanand School Bikaner",
    description: "Learn about our streamlined admission process, eligibility criteria, and required documents for joining St. Vivekanand School, one of the best schools in Bikaner.",
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

export default function AdmissionProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 