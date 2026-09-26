import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Why Choose Us",
  description:
    "Discover why St. Vivekanand School is the preferred choice for education in Bikaner, offering experiential learning, modern infrastructure, and a strong cultural foundation.",
  path: "/about-us/why-choose-us",
});

export default function WhyChooseUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
