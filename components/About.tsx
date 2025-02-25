"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "./ui/button";
import Link from 'next/link';

// Define types for our content
interface ContentCard {
  id: number;
  title: string;
  description?: string;
  url: string,
  imageUrl?: string;
  type: "text" | "image";
}

// Content data
const aboutContent: ContentCard[] = [
  {
    id: 1,
    type: "text",
    title: "Our Vision",
    description:
      "At St. Vivekanand Sr. Sec. School, we are guided by the timeless wisdom of Swami Vivekananda, a beacon of education and social reform. We believe that true education transcends mere academics, aiming to awaken the inherent potential within every student and nurture well-rounded individuals who are responsible global citizens.",
    url: "/about-us/mission-vision"
  },
  {
    id: 2,
    type: "image",
    title: "From Principal's Desk",
    imageUrl: "/assets/faculty/principal.jpg",
    url: "about-us/principals-message"
  },
  {
    id: 3,
    type: "image",
    title: "Academic Excellence",
    imageUrl: "/assets/background/why-shpuld.jpg",
    url: "/academics/overview"
  },
];

const About = () => {
  const renderCard = (card: ContentCard) => {
    return (
      <motion.div
        key={card.id}
        className="flex-1 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {card.type === "text" ? (
          <div
            className="aspect-square w-full bg-transparent p-6 border-2 border-white 
                  transition-transform hover:scale-[1.02] duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {card.title}
              </h2>
              <p className="text-gray-200 text-sm md:text-base">
                {card.description}
              </p>
            </div>
            <Link href={card.url} >
            <Button
              variant="destructive"
              className="text-white bg-[#E63946] hover:scale-110 transition-transform duration-300 w-fit"
            >
              Read More
            </Button>
            </Link>
          </div>
        ) : (
          <div className="aspect-square transition-transform hover:scale-[1.02] duration-300 w-full relative group overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center transition-transform"
              style={{ backgroundImage: `url('${card.imageUrl}')` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end gap-4">
                <h2 className="text-2xl font-semibold text-white">
                  {card.title}
                </h2>
                <Link href={card.url}>
                <Button
                  variant="destructive"
                  className="text-white bg-[#E63946] hover:scale-110 transition-transform duration-300 w-fit"
                  >
                  Read More
                </Button>
                  </Link>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="w-full bg-[#002147]">
      <motion.div
        className="relative max-w-7xl mx-auto bg-[#002147] py-12 px-6 md:px-0"
        style={{
          backgroundImage: "url('/assets/background/stvivek.png')",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h1
          className="text-xl md:text-4xl font-bold text-white pb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About St. Vivekanand School
        </motion.h1>

        {/* Description */}
        <motion.p
          className="md:w-[50%] text-white text-sm md:text-base pb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our school is well-known for its high-quality education, providing a
          co-educational Day cum Boarding school environment.
        </motion.p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {aboutContent.map((card) => renderCard(card))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
