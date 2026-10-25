import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Academics - All Facilities",
  description:
    "Explore academics at St. Vivekanand School, Bikaner — labs, library, experiential learning, and facilities that support every learner.",
  path: "/academics/all-facilities",
});

export default function AcademicsHubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
