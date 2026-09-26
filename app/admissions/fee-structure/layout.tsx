import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Fee Structure 2026-27",
  description:
    "Explore our transparent and structured fee system for the academic year 2026-27, offering flexible payment options and clear fee breakdowns at St. Vivekanand School.",
  path: "/admissions/fee-structure",
});

export default function FeeStructureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
