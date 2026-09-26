import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CBSE Affiliation",
  description:
    "Learn about our CBSE affiliation and how we maintain high educational standards following the Central Board of Secondary Education guidelines at St. Vivekanand School.",
  path: "/academics/cbse-affiliation",
});

export default function CbseAffiliationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
