import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with St. Vivekanand School Bikaner. Find our contact information, location, and send us your queries through our contact form.",
  path: "/contact-us",
});

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
