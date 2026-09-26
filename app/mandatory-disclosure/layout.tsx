import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mandatory Disclosure",
  description:
    "Mandatory disclosure of St. Vivekanand School as per CBSE norms: general information, documents, infrastructure, staff, and compliance.",
  path: "/mandatory-disclosure",
  imageAlt: "St. Vivekanand School Mandatory Disclosure",
});

export default function MandatoryDisclosureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
