import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Career Counselling",
  description:
    "Discover our comprehensive career counselling services, helping students make informed decisions about their future through expert guidance and annual career fairs at St. Vivekanand School.",
  path: "/admissions/career-counselling",
});

export default function CareerCounsellingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
