"use client";

import React from "react";
import { motion } from "framer-motion";
import { BiWorld, BiBookReader, BiBuildings } from "react-icons/bi";
import { FaChalkboardTeacher, FaWifi, FaTrophy } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdSupportAgent, MdSportsGymnastics } from "react-icons/md";

interface WhyUsCard {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const whyUsContent: WhyUsCard[] = [
  { id: 1, icon: BiBuildings, title: "6-acre campus", description: "Bikaner in tranquil and verdant environs." },
  { id: 2, icon: BiWorld, title: "Outstanding Academics", description: "Record-Breaking Results." },
  { id: 3, icon: BiBookReader, title: "Innovative Learning", description: "Experiential Learning Practices." },
  { id: 4, icon: BsPeopleFill, title: "Comfortable Boarding", description: "Spacious Home-like Boarding Houses." },
  { id: 5, icon: FaChalkboardTeacher, title: "Respected Faculty", description: "The Faculty of our school is highly respected." },
  { id: 6, icon: MdSupportAgent, title: "Friendly Management", description: "Friendly and Approachable Management." },
  { id: 7, icon: FaWifi, title: "Smart Campus", description: "Wi-Fi, Smart Classrooms and Secure Campus." },
  { id: 8, icon: MdSportsGymnastics, title: "Career Guidance", description: "Dedicated career guidance department." },
  { id: 9, icon: FaTrophy, title: "Olympic Sports", description: "10+ Sports including Gymnastics, Skating etc." },
];

const WhyUs = () => {
  return (
    <motion.section 
      className="w-full bg-[#002147] py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Title */}
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why St. Vivekanand School?
        </motion.h2>

        {/* Cards Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {whyUsContent.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                className="bg-white px-4 p-4 rounded-lg shadow-lg flex items-center gap-4 cursor-pointer 
                           transition-all duration-300 transform hover:scale-105 hover:bg-[#457B9D] group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                
              >
                {/* Icon with Glow Effect */}
                <motion.div
                  className="p-3 rounded-full bg-[#002147] text-white text-4xl flex items-center justify-center shadow-lg 
                             group-hover:bg-white group-hover:text-[#002147] transition-colors duration-300"
                  whileHover={{ rotate: 10, scale: 1.2 }}
                >
                  <Icon />
                </motion.div>

                {/* Text Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#1D3557] group-hover:text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#1D3557] group-hover:text-white transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyUs;
