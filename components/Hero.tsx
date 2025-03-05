"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "./Background";
import { Button } from "./ui/button";
import Link from "next/link";

const heroData = [
  {
    subTitle: "Unlock Your Potential",
    title: "WATER THE ROOTS OF THE TREE AND THE WHOLE TREE IS WATERED",
    description:
      "Ensuring holistic development for every student.",
    buttonText: "Explore More",
    url: "/academics/overview",
  },
  {
    subTitle: "Excellence in Leadership",
    title: "Where Learning Meets Leadership",
    description:
      "We believe in fostering curiosity, critical thinking, and resilience, shaping students.",
    buttonText: "Join Us Today",
    url: "#",
  },
  {
    subTitle: "A Legacy of Learning",
    title: "Nurturing Young Minds Since 1977",
    description:
      "We believe in holistic development, fostering curiosity, creativity, and confidence in every student.",
    buttonText: "Discover More",
    url: "#",
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

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Background playStatus={playStatus} heroCount={heroCount} />

      <div className="absolute inset-0 flex items-center w-full">
        <div className="w-full">
          <div className="bg-white/20 py-5 text-center text-white space-y-4">
            {/* <AnimatePresence mode="wait">
              <motion.span
                key={heroCount}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-sm uppercase tracking-widest text-gray-300"
              >
                {heroData[heroCount].subTitle}
              </motion.span>
            </AnimatePresence> */}

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${heroCount}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-4xl lg:text-5xl font-medium uppercase"
                style={{fontFamily: 'var(--font-garamond)'}}
              >
                {heroData[heroCount].title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${heroCount}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="text-sm md:text-base lg:text-lg text-gray-200 uppercase"
              >
                {heroData[heroCount].description}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`btn-${heroCount}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.2 }}
              >
                <Link href={heroData[heroCount].url}>
                  <Button
                    className="text-white bg-[#85193C] hover:scale-105 transition-transform duration-300"
                  >
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
