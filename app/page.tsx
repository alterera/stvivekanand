"use client";
import About from "@/components/About";
import Academics from "@/components/Academics";
import CoCurricular from "@/components/Cocurricular";
import Cta from "@/components/Cta";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Rankings from "@/components/Rankings";
import Sports from "@/components/Sports";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Academics />
      <Sports />
      <CoCurricular />
      <Rankings />
      <Events />
      <News />
      <Cta />
    </>
  );
}
