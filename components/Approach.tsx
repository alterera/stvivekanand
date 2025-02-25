"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

interface ApproachCard {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const approachContent: ApproachCard[] = [
  {
    id: 1,
    title: "Holistic Development",
    description:
      "Fostering well-rounded individuals through a comprehensive approach to education, emphasizing robust minds, healthy bodies, and ethical characters. Explore our diverse curriculum, sports programs, and vibrant arts initiatives.",
    imageUrl: "/assets/approach/holistic.png",
    url: "/academics/our-approach#holistic-development",
  },
  {
    id: 2,
    title: "Transformative Education",
    description:
      "Empowering students to thrive in a rapidly evolving world, our enriching environment prepares them for tomorrow's challenges. Discover an immersive learning experience beyond the classroom at St. Vivekanand.",
    imageUrl: "/assets/approach/transform.png",
    url: "/academics/our-approach#transformative-education",
  },
  {
    id: 3,
    title: "Physical Education",
    description:
      "Emphasizing teamwork and leadership, our cricket facilities offer enthusiasts the perfect setting to hone their skills and foster a lifelong love for the sport.",
    imageUrl: "/assets/approach/sports.png",
    url: "/academics/our-approach#sports-physical-education",
  },
  {
    id: 4,
    title: "Fitness & Wellbeing",
    description:
      "Promoting physical health and well-being, our programs offer diverse activities from badminton, yoga, and more.",
    imageUrl: "/assets/approach/yoga.png",
    url: "/academics/our-approach#physical-fitness",
  },
];

const Approach = () => {
  return (
    <section className="w-full bg-[#F1EEE9] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Approach
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We follow a comprehensive approach to education that focuses on
          academic excellence, character development, and overall growth of our
          students.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full px-4 md:px-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {approachContent.map((card) => (
            <motion.div
              key={card.id}
              className="flex flex-col bg-[#002147] shadow-md h-[500px] w-full border transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15 }}
              viewport={{ once: true }}
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden">
                <motion.div className="relative h-full w-full">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-200 mb-6 flex-grow line-clamp-3">
                  {card.description}
                </p>
                <Link href={card.url}>
                  <Button
                    variant="destructive"
                    className="w-full text-white hover:bg-white hover:text-[#1D3557] transition-colors duration-300"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
