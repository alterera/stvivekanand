import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "TC Updates",
  description:
    "Download transfer certificates for students of St. Vivekanand School, Bikaner. Search by student name to find and download TC documents.",
  path: "/admissions/tc-updates",
});

export default function TCUpdatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
