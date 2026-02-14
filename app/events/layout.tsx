import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Activities | St. Vivekanand School Bikaner",
  description:
    "Discover upcoming and past school events, celebrations, and activities at St. Vivekanand School Bikaner. Stay updated with our annual functions, sports events, and cultural programs.",
  alternates: {
    canonical: "https://stvivekanandschool.com/events",
  },
  keywords: [
    "school events",
    "school activities",
    "school celebrations",
    "annual function",
    "sports events",
    "cultural programs",
    "best school in bikaner",
    "school activities bikaner",
    "st vivekanand school events",
  ],
  openGraph: {
    title: "Events & Activities | St. Vivekanand School Bikaner",
    description:
      "Discover upcoming and past school events, celebrations, and activities at St. Vivekanand School Bikaner. Stay updated with our annual functions, sports events, and cultural programs.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Activities | St. Vivekanand School Bikaner",
    description:
      "Discover upcoming and past school events, celebrations, and activities at St. Vivekanand School Bikaner. Stay updated with our annual functions, sports events, and cultural programs.",
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

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
