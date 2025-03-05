"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "./Background";
import { Button } from "./ui/button";
import Link from "next/link";

const heroData: { 
  subTitle: string; 
  title: string; 
  description: string; 
  buttonText: string; 
  url: string; 
  titleDirection: "left" | "right" | "top"; // Restrict titleDirection type
}[] = [
  {
    subTitle: "Unlock Your Potential",
    title: "WATER THE ROOTS OF THE TREE AND THE WHOLE TREE IS WATERED",
    description: "Ensuring holistic development for every student.",
    buttonText: "Explore More",
    url: "/academics/overview",
    titleDirection: "left", // Now TypeScript recognizes it correctly
  },
  {
    subTitle: "Excellence in Leadership",
    title: "Where Learning Meets Leadership",
    description: "We believe in fostering curiosity, critical thinking, and resilience, shaping students.",
    buttonText: "Join Us Today",
    url: "#",
    titleDirection: "right",
  },
  {
    subTitle: "A Legacy of Learning",
    title: "Nurturing Young Minds Since 1977",
    description: "We believe in holistic development, fostering curiosity, creativity, and confidence in every student.",
    buttonText: "Discover More",
    url: "#",
    titleDirection: "top",
  },
];


const Hero = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Determine animation direction for title
  const titleVariants = {
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    top: { opacity: 0, y: -50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Background playStatus={playStatus} heroCount={heroCount} />

      <div className="absolute inset-0 flex items-center w-full">
        <div className="w-full">
          <div className="bg-white/20 py-5 text-center text-white space-y-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${heroCount}`}
                initial={titleVariants[heroData[heroCount].titleDirection]}
                animate={titleVariants.visible}
                exit={titleVariants[heroData[heroCount].titleDirection]}
                className="text-2xl md:text-4xl lg:text-5xl font-medium uppercase"
                style={{ fontFamily: "var(--font-garamond)" }}
              >
                {heroData[heroCount].title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${heroCount}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="text-sm md:text-base lg:text-lg text-gray-200 uppercase"
              >
                {heroData[heroCount].description}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`btn-${heroCount}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 1.2 }}
              >
                <Link href={heroData[heroCount].url}>
                  <Button className="text-white bg-[#85193C] hover:bg-[#0D3658] font-semibold hover:scale-105 transition-transform duration-300">
                    {heroData[heroCount].buttonText}
                  </Button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
