import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Academic Facilities",
  description:
    "Explore our state-of-the-art academic facilities including science labs, computer labs, library, and specialized learning spaces at St. Vivekanand School.",
  path: "/academics/all-facilities",
});

export default function AllFacilitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
