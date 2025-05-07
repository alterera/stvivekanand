import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Streams | St. Vivekanand School Bikaner",
  description: "Discover our specialized academic streams in Science and Commerce, offering comprehensive education and career-focused learning at St. Vivekanand School.",
  alternates: {
    canonical: 'https://stvivekanandschool.com/academics/streams-offered',
  },
  keywords: [
    "academic streams",
    "science stream",
    "commerce stream",
    "educational programs",
    "best school in bikaner",
    "career-focused education",
    "subject choices",
    "academic specialization",
    "stream selection"
  ],
  openGraph: {
    title: "Academic Streams | St. Vivekanand School Bikaner",
    description: "Discover our specialized academic streams in Science and Commerce, offering comprehensive education and career-focused learning at St. Vivekanand School.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Streams | St. Vivekanand School Bikaner",
    description: "Discover our specialized academic streams in Science and Commerce, offering comprehensive education and career-focused learning at St. Vivekanand School.",
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

export default function StreamsOfferedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 