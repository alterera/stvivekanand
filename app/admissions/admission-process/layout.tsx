import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Admission Process",
  description:
    "Learn about our streamlined admission process, eligibility criteria, and required documents for joining St. Vivekanand School, one of the best schools in Bikaner.",
  path: "/admissions/admission-process",
});

export default function AdmissionProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
