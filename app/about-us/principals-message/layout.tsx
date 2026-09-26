import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Principal's Message",
  description:
    "Read the inspiring message from our Principal, Nidhi Gupta, about our school's vision, values, and commitment to holistic education in Bikaner.",
  path: "/about-us/principals-message",
});

export default function PrincipalsMessageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
