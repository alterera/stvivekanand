import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Academics Overview",
  description:
    "Explore our comprehensive academic programs, state-of-the-art facilities, and innovative learning approaches at St. Vivekanand School, Bikaner's premier educational institution.",
  path: "/academics/overview",
});

export default function AcademicsOverviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
