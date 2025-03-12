"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "./Background";
import { Button } from "./ui/button";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import Preloader from "./Preloader";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface HeroData {
  title: string;
  description: string;
  buttonText: string;
  url: string;
  titleDirection: "left" | "right" | "top";
}

const Hero = () => {
  const [hero, setHero] = useState<HeroData[] | null>(null);
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus] = useState(false);

  // Fetch hero data from Sanity
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "hero"] | order(order asc)`)
      .then((data) => setHero(data));
  }, []);

  // Auto slide transition
  useEffect(() => {
    if (!hero) return;
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev + 1) % hero.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hero]);

  if (!hero) return <Preloader />;

  const handleDotClick = (index: number) => {
    setHeroCount(index);
  };

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
          <div className="bg-[#fefefe]/20 py-5 text-center text-white space-y-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${heroCount}`}
                initial={titleVariants[hero[heroCount]?.titleDirection]}
                animate={titleVariants.visible}
                exit={titleVariants[hero[heroCount]?.titleDirection]}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase"
                style={{ fontFamily: "var(--font-garamond)" }}
              >
                {hero[heroCount]?.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${heroCount}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="text-xs md:text-sm lg:text-base text-[gray-50] font-medium uppercase px-4"
                style={{ fontFamily: "var(--font-garamond)" }}
              >
                {hero[heroCount]?.description}
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
                <Link href={hero[heroCount]?.url || "#"}>
                  <Button className="text-white bg-[#85193C] hover:bg-[#0D3658] font-semibold hover:scale-105 transition-transform duration-300">
                    {hero[heroCount]?.buttonText}
                  </Button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {hero.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              heroCount === index
                ? "bg-[#85193C] scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-8 flex gap-4">
        <button
          onClick={() =>
            setHeroCount((prev) => (prev - 1 + hero.length) % hero.length)
          }
          className="bg-white/10 text-white p-3 rounded-full shadow-md hover:bg-[#85193C] transition-all"
        >
          <IoIosArrowBack />
        </button>

        <button
          onClick={() => setHeroCount((prev) => (prev + 1) % hero.length)}
          className="bg-white/10 text-white p-3 rounded-full shadow-md hover:bg-[#85193C] transition-all"
        >
          <IoIosArrowForward/>
        </button>
      </div>
    </section>
  );
};

export default Hero;
