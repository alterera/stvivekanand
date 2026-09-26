import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Schedule a Call",
  description:
    "Schedule a call with the St. Vivekanand School admissions team in Bikaner. Share your child's details and we will contact you to discuss admission.",
  path: "/schedule-a-call",
});

export default function ScheduleCallLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
