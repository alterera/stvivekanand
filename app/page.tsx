import { Metadata } from "next";
import About from "@/components/About";
import Academics from "@/components/Academics";
import CoCurricular from "@/components/Cocurricular";
import Cta from "@/components/Cta";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Rankings from "@/components/Rankings";
import Sports from "@/components/Sports";

export const metadata: Metadata = {
  title: "St. Vivekanand School | Best School in Bikaner",
  description: "St. Vivekanand School is a premier educational institution in Bikaner offering quality education, sports, and extracurricular activities. Discover our academic programs, achievements, and student life.",
  keywords: ["best school in bikaner", "saint vivekanand", "top cbse school bikaner", "best school bikaner", "school bikaner city", "cbse school in bikaner", "bikaner school", "vivekanand school", "svs bikaner", "cbse school in bikaner rajasthan"],
  authors: [{ name: "St. Vivekanand School" }],
  openGraph: {
    title: "St. Vivekanand School | Best School in Bikaner",
    description: "St. Vivekanand School is a premier educational institution in Bikaner offering quality education, sports, and extracurricular activities.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Vivekanand School",
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Vivekanand School | Best School in Bikaner",
    description: "St. Vivekanand School is a premier educational institution in Bikaner offering quality education, sports, and extracurricular activities.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
