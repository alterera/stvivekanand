"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface SportCard {
  id: number;
  title: string;
  imageUrl: string;
}

const sportsContent: SportCard[] = [
  { id: 1, title: "Basketball", imageUrl: "/assets/sports/basketball.png" },
  { id: 2, title: "Table Tennis", imageUrl: "/assets/sports/tennis.png" },
  { id: 3, title: "Football", imageUrl: "/assets/sports/football.png" },
  { id: 4, title: "Cricket", imageUrl: "/assets/sports/cric.png" },
];

const Sports = () => {
  return (
    <motion.section 
      className="w-full bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full rounded-t-3xl bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Sports Excellence
        </motion.h2>
        <motion.p
        className=" mb-16"
        initial={{opacity: 0 ,y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.8}}
        viewport={{once: true}}
        >The largest gamut of in-house sports facilities for any school, right in the city centre.</motion.p>

        {/* Hero Section */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Image Container */}
          <div className="lg:w-full relative h-[200px] md:h-[100px] lg:h-[300px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/assets/sports/cricket.png"
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
              Welcome to St. Vivekanand&apos;s sports, the physical education department of our school. 
              We believe that sports is not just a thing, but a way of life that teaches discipline, 
              perseverance, and teamwork.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button 
                variant="destructive"
                className="w-fit text-white bg-[#E63946] hover:bg-[#E63946]/90"
              >
                Read More
              </Button>
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
              className="relative h-[200px] md:h-[300px] overflow-hidden group rounded-lg shadow-lg"
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
                <Button 
                  variant="outline"
                  className="w-fit bg-transparent text-white border-white hover:bg-white hover:text-[#1D3557]"
                >
                  Read More
                </Button>
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
