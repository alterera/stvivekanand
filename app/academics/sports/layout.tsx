import { Metadata } from "next";

const siteUrl = "https://stvivekanandschool.com";
const ogImage = `${siteUrl}/st-og.png`;

export const metadata: Metadata = {
  title: "Sports at St. Vivekanand | Facilities, Training, Achievements",
  description:
    "Discover the sports program at St. Vivekanand School: facilities, coaching, teams, and achievements that foster holistic development.",
  alternates: {
    canonical: `${siteUrl}/academics/sports`,
  },
  keywords: [
    "school sports",
    "sports facilities",
    "student athletics",
    "Bikaner school sports",
    "St. Vivekanand School",
  ],
  openGraph: {
    title: "Sports at St. Vivekanand | Facilities, Training, Achievements",
    description:
      "Discover the sports program at St. Vivekanand School: facilities, coaching, teams, and achievements that foster holistic development.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
    url: `${siteUrl}/academics/sports`,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "St. Vivekanand School Sports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports at St. Vivekanand | Facilities, Training, Achievements",
    description:
      "Discover the sports program at St. Vivekanand School: facilities, coaching, teams, and achievements that foster holistic development.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function SportsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


