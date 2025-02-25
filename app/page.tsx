"use client";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Cta from "@/components/Cta";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import News from "@/components/News";
import Rankings from "@/components/Rankings";
import Sports from "@/components/Sports";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
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
    </>
  );
}
