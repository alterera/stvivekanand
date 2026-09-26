import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Curriculum",
  description:
    "Discover our comprehensive curriculum designed for holistic development, combining academic excellence with practical learning experiences at St. Vivekanand School.",
  path: "/academics/curriculum",
});

export default function CurriculumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
