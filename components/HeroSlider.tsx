"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Background, { type Slide } from "./Background";
import { Button } from "./ui/button";

export type HeroText = {
  title: string;
  description: string;
  buttonText: string;
  url: string;
};

const slides: Slide[] = [
  {
    type: "image",
    url: "/assets/background/campus-main.webp",
    alt: "St. Vivekanand School campus in Bikaner",
  },
  {
    type: "video",
    url: "sZbjTP1OAN00kbRW3aekfYDgFJn3r01R02tHST6JBha9rg",
    alt: "Students and campus life at St. Vivekanand School",
  },
  {
    type: "image",
    url: "/assets/background/young.webp",
    alt: "Young students at St. Vivekanand School",
  },
];

const HeroSlider = ({ hero }: { hero: HeroText[] }) => {
  const [heroCount, setHeroCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  const text = hero[heroCount % hero.length];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Background slide={slides[heroCount]} isFirst={heroCount === 0} />

      <div className="absolute inset-0 flex items-center w-full">
        <div className="w-full">
          <div className="bg-[#fefefe]/20 py-5 text-center text-white space-y-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`text-${heroCount}`}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {heroCount === 0 ? (
                  <h1
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase"
                    style={{ fontFamily: "var(--font-garamond)" }}
                  >
                    {text?.title}
                  </h1>
                ) : (
                  <p
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase"
                    style={{ fontFamily: "var(--font-garamond)" }}
                  >
                    {text?.title}
                  </p>
                )}
                <p
                  className="text-xs md:text-sm lg:text-base text-gray-50 font-medium uppercase px-4"
                  style={{ fontFamily: "var(--font-garamond)" }}
                >
                  {text?.description}
                </p>
                {text?.buttonText && (
                  <Button
                    asChild
                    className="text-white bg-[#85193C] hover:bg-[#0D3658] font-semibold transition-transform duration-300"
                  >
                    <Link href={text.url || "/admissions/admission-process"}>{text.buttonText}</Link>
                  </Button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={heroCount === index}
            onClick={() => setHeroCount(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              heroCount === index ? "bg-[#85193C] scale-125" : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-8 flex gap-4">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setHeroCount((prev) => (prev - 1 + slides.length) % slides.length)}
          className="bg-white/10 text-white p-3 rounded-full shadow-md hover:bg-[#85193C] transition-all"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setHeroCount((prev) => (prev + 1) % slides.length)}
          className="bg-white/10 text-white p-3 rounded-full shadow-md hover:bg-[#85193C] transition-all"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
