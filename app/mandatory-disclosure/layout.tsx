import { Metadata } from "next";

const siteUrl = "https://stvivekanandschool.com";
const ogImage = `${siteUrl}/st-og.png`;

export const metadata: Metadata = {
  title: "Mandatory Disclosure | St. Vivekanand School Bikaner",
  description:
    "Mandatory disclosure of St. Vivekanand School as per CBSE norms: general information, documents, infrastructure, staff, and compliance.",
  alternates: {
    canonical: `${siteUrl}/mandatory-disclosure`,
  },
  keywords: [
    "mandatory disclosure",
    "CBSE compliance",
    "school documents",
    "school infrastructure",
    "St. Vivekanand School",
  ],
  openGraph: {
    title: "Mandatory Disclosure | St. Vivekanand School Bikaner",
    description:
      "Mandatory disclosure of St. Vivekanand School as per CBSE norms: general information, documents, infrastructure, staff, and compliance.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
    url: `${siteUrl}/mandatory-disclosure`,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "St. Vivekanand School Mandatory Disclosure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandatory Disclosure | St. Vivekanand School Bikaner",
    description:
      "Mandatory disclosure of St. Vivekanand School as per CBSE norms: general information, documents, infrastructure, staff, and compliance.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function MandatoryDisclosureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


