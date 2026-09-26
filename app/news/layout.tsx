import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Latest News & Updates",
  description:
    "Stay updated with the latest news, events, and announcements from St. Vivekanand School Bikaner. Read about our achievements, activities, and important updates.",
  path: "/news",
});

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
