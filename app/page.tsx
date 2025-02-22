'use client'
import About from "@/components/About";
import Approach from "@/components/Approach";
import Cta from "@/components/Cta";
import Events from "@/components/Events";
import Footer from "@/components/common/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import News from "@/components/News";
// import SmoothScroll from "@/components/providers/SmoothScroll";
import Rankings from "@/components/Rankings";
import Sports from "@/components/Sports";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      {/* <SmoothScroll> */}
        <Hero />
        <About />
        <Approach />
        <Highlights />
        <WhyUs />
        <Sports />
        <Cta />
        <Events />
        <Rankings />
        <News />
        <Footer />
      {/* </SmoothScroll> */}
    </>
  );
}
