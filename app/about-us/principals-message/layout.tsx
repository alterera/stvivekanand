import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Principal's Message | St. Vivekanand School Bikaner",
  description: "Read the inspiring message from our Principal, Nidhi Gupta, about our school's vision, values, and commitment to holistic education in Bikaner.",
  alternates: {
    canonical: 'https://stvivekanandschool.com/about-us/principals-message',
  },
  keywords: [
    "Principal's message",
    "St. Vivekanand School principal",
    "Nidhi Gupta",
    "school leadership",
    "educational vision",
    "Bikaner school principal",
    "best school in bikaner",
    "school values",
    "educational leadership"
  ],
  openGraph: {
    title: "Principal's Message | St. Vivekanand School Bikaner",
    description: "Read the inspiring message from our Principal, Nidhi Gupta, about our school's vision, values, and commitment to holistic education in Bikaner.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Principal's Message | St. Vivekanand School Bikaner",
    description: "Read the inspiring message from our Principal, Nidhi Gupta, about our school's vision, values, and commitment to holistic education in Bikaner.",
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

export default function PrincipalMessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 