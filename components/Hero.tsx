"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "./Background";
import { Button } from "./ui/button";

const heroData = [
  {
    subTitle: "Unlock Your Potential",
    title: "Welcome to Saint Vivekanand School",
    description: "A premier educational institution in Bikaner, Rajasthan, shaping young minds with excellence, discipline, and innovation.",
    buttonText: "Explore More",
    url: "#",
  },
  {
    subTitle: "Excellence in Education",
    title: "Empowering Future Leaders",
    description: "Our mission is to provide top-tier education with a balance of academics, sports, and extracurricular activities.",
    buttonText: "Join Us Today",
    url: "#",
  },
  {
    subTitle: "A Legacy of Learning",
    title: "Nurturing Young Minds Since 1995",
    description: "We believe in holistic development, fostering curiosity, creativity, and confidence in every student.",
    buttonText: "Discover More",
    url: "#",
  }
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
    <section className="relative w-full h-[500px] lg:h-[700px] overflow-hidden">
      <Background playStatus={playStatus} heroCount={heroCount} />

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-3xl text-left text-white space-y-4">
            <AnimatePresence mode="wait">
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
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${heroCount}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
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
                className="text-base md:text-lg lg:text-xl text-gray-200"
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
                <Button
                  variant="destructive"
                  className="text-white bg-[#E63946] hover:scale-105 transition-transform duration-300"
                >
                  {heroData[heroCount].buttonText}
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
