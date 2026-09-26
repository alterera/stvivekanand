import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mission & Vision",
  description:
    "Discover our school's mission to provide holistic education and our vision to create transformative learning experiences for students in Bikaner.",
  path: "/about-us/mission-vision",
});

export default function MissionVisionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
