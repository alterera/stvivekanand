"use client";

import React from "react";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import { NumberTicker } from "./magicui/number-ticker";

interface RankingCard {
  id: number;
  rank: number;
  suffix: string;
  description: string;
}

const rankingContent: RankingCard[] = [
  { id: 1, rank: 55, suffix: "K+", description: "Students Enrolled Since 1977" },
  { id: 2, rank: 6, suffix: "K+", description: "Total Students Passed 12th Boards" },
  { id: 3, rank: 500, suffix: "+", description: "Students Cracked IIT-JEE & NEET" },
  { id: 4, rank: 50, suffix: "+", description: "Represent at the National Level Sports" },
];

const Rankings = () => {
  return (
    <motion.section 
      className="w-full bg-[#002147] py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Title Section */}
          <motion.div 
            className="md:w-[300px] flex flex-col items-center text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FaTrophy className="text-6xl md:text-7xl text-white mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Rankings</h2>
          </motion.div>

          {/* Rankings Grid */}
          <motion.div 
            className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {rankingContent.map((rank) => (
              <motion.div
                key={rank.id}
                className="bg-gray-100 rounded-md p-6 flex flex-col items-center text-center 
                group hover:bg-[#457B9D] transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#7B243D] mb-2 
                group-hover:text-white ">
                  <NumberTicker value={rank.rank} className="text-[#7B243D] group-hover:text-white"/><span>{rank.suffix}</span>
                </h3>
                <p className="text-sm md:text-base text-gray-600
                group-hover:text-white/90 transition-colors duration-300">
                  {rank.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Rankings;
