"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface SportCard {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

const sportsContent: SportCard[] = [
  {
    id: 1,
    title: "Basketball Court",
    imageUrl: "/assets/sports/basketball.jpeg",
    link: "/academics/sports/#1",
  },
  {
    id: 2,
    title: "Gymnasium",
    imageUrl: "/assets/sports/gymnasium.jpeg",
    link: "/academics/sports/#2",
  },
  {
    id: 3,
    title: "Cricket Turf",
    imageUrl: "/assets/sports/cricket.jpeg",
    link: "#",
  },
  {
    id: 4,
    title: "Lawn Tennis Court",
    imageUrl: "/assets/sports/tennis.jpeg",
    link: "#",
  },
];

const Sports = () => {
  return (
    <motion.section
      className="w-full bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full rounded-t-3xl py-10 md:py-16" style={{backgroundImage: `url('/assets/background/cricket-2.png')`, objectFit: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'top right'}}>
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          {/* Title */}
          <motion.h2
            className="relative text-3xl md:text-4xl font-bold text-[#1D3557] mb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Sports Facilities
            <Image src="/assets/patterns/curvy.png" alt="hilly" height={100} width={120} className="absolute top-10 left-40"/>
          </motion.h2>
          <motion.p
            className=" mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The largest gamut of in-house sports facilities for any school,
            right in the city centre.
          </motion.p>

          {/* Hero Section */}
          <motion.div
            className="flex flex-col lg:flex-row gap-8 mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image Container */}
            <div className="lg:w-full relative h-[200px] md:h-[100px] lg:h-[300px] overflow-hidden rounded-sm shadow-lg">
              <Image
                src="/assets/sports/sports.jpeg"
                alt="Sports at St. Vivekanand"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
              />
            </div>

            {/* Content Container */}
            <div className="lg:w-[40%] flex flex-col justify-between">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-[#1D3557] mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Welcome to St. Vivekanand&apos;s Sports
              </motion.h3>

              <motion.p
                className="text-gray-600 mb-6 text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Welcome to St. Vivekanand&apos;s sports, the physical education
                department of our school. We believe that sports is not just a
                thing, but a way of life that teaches discipline, perseverance,
                and teamwork.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Link href={"/academics/sports/"}>
                  <Button className="w-fit text-white bg-[#7B243D] hover:bg-[#1D3557] font-bold">
                    Read More
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Sports Cards Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {sportsContent.map((sport, index) => (
              <motion.div
                key={sport.id}
                className="relative h-[200px] md:h-[300px] overflow-hidden group rounded-sm shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {/* Background Image */}
                <Image
                  src={sport.imageUrl}
                  alt={sport.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40 transition-opacity duration-300 
                group-hover:bg-black/60"
                  whileHover={{ opacity: 0.8 }}
                />

                {/* Content */}
                <motion.div
                  className="absolute inset-0 p-4 flex flex-col justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    {sport.title}
                  </h4>

                  <Link href={sport.link}>
                    <Button
                      variant="outline"
                      className="w-fit bg-transparent text-white border-white hover:bg-[#7B243D] font-bold hover:text-white hover:border-none"
                    >
                      Read More
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Sports;
