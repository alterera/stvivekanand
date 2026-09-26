import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Academic Streams",
  description:
    "Discover our specialized academic streams in Science and Commerce, offering comprehensive education and career-focused learning at St. Vivekanand School.",
  path: "/academics/streams-offered",
});

export default function StreamsOfferedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
