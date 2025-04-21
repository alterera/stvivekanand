import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | St. Vivekanand School Bikaner",
  description: "Get in touch with St. Vivekanand School Bikaner. Find our contact information, location, and send us your queries through our contact form.",
  keywords: [
    "contact school",
    "school contact",
    "school address",
    "school phone number",
    "best school in bikaner",
    "school email",
    "school location",
    "school contact form",
    "school inquiry"
  ],
  openGraph: {
    title: "Contact Us | St. Vivekanand School Bikaner",
    description: "Get in touch with St. Vivekanand School Bikaner. Find our contact information, location, and send us your queries through our contact form.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | St. Vivekanand School Bikaner",
    description: "Get in touch with St. Vivekanand School Bikaner. Find our contact information, location, and send us your queries through our contact form.",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 