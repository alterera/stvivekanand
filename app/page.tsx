import type { Metadata } from "next";
import About from "@/components/About";
import Academics from "@/components/Academics";
import CoCurricular from "@/components/Cocurricular";
import Cta from "@/components/Cta";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Rankings from "@/components/Rankings";
import Sports from "@/components/Sports";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const title = "St. Vivekanand School | Best CBSE School in Bikaner";
const description =
  "St. Vivekanand School is a CBSE school in Bikaner, since 1977, offering quality education from Nursery to Class 12, with sports, arts, and modern facilities.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Academics />
      <Sports />
      <CoCurricular />
      <Rankings />
      <Events />
      <News />
      <Cta />
    </main>
  );
}
