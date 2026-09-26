import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Events & Activities",
  description:
    "Discover upcoming and past school events, celebrations, and activities at St. Vivekanand School Bikaner. Stay updated with our annual functions, sports events, and cultural programs.",
  path: "/events",
});

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
