import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  description:
    "Explore the photo and video gallery of St. Vivekanand School, showcasing campus life, events, sports, and student achievements.",
  path: "/gallery",
  imageAlt: "St. Vivekanand School Gallery",
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
