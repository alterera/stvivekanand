import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "School Notices",
  description:
    "Official notices and announcements from St. Vivekanand School, Bikaner — dates, circulars, and updates for parents and students.",
  path: "/notices",
});

export default function NoticesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
