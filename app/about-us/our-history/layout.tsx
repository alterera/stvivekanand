import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our History",
  description:
    "Explore the rich history of St. Vivekanand School, from its foundation in 1977 to becoming one of Bikaner's leading educational institutions.",
  path: "/about-us/our-history",
});

export default function OurHistoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
