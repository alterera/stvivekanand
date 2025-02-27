"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaMusic, FaPalette, FaTheaterMasks, FaUsers } from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "Vocal & Instrumental Music",
    description: "Dedicated coach for singing classes and instrumental music.",
    icon: <FaMusic className="text-5xl text-[#E63946]" />,
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "Painting Workshops",
    description: "Regular painting classes where students create different styles of art.",
    icon: <FaPalette className="text-5xl text-[#E63946]" />,
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Kathak Chapter",
    description: "Special classes by a renowned tutor hailing from the Jaipur Kathak Gharana.",
    icon: <FaTheaterMasks className="text-5xl text-[#E63946]" />,
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Textile - Embroidery Workshops",
    description: "Textile & embroidery masterclasses by a resident tutor for those who opt for it.",
    icon: <FaMusic className="text-5xl text-[#E63946]" />,
    color: "bg-yellow-500",
  },
  {
    id: 5,
    title: "Clubs & Chapters",
    description:
      "Passion-led clubs like Abacus, Hiking, Martial Arts, Skating & Calligraphy.",
    icon: <FaUsers className="text-5xl text-[#E63946]" />,
    color: "bg-purple-500",
  },
];

const CoCurricular = () => {
  return (
    <motion.section 
      className="w-full bg-gray-100 py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#1D3557] text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Co-Curricular Activities
        </motion.h2>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              className={`relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${activity.color} text-white`}
              whileHover={{ scale: 1.05 }}
            >
              {activity.icon}
              <h3 className="text-xl font-bold mt-4">{activity.title}</h3>
              <p className="text-center mt-2">{activity.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden w-full mt-6">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.2}
            spaceBetween={15}
            pagination={{ clickable: true }}
            centeredSlides={true}
          >
            {activities.map((activity) => (
              <SwiperSlide key={activity.id} className="flex justify-center">
                <div className={`relative w-full p-6 rounded-lg shadow-lg ${activity.color} text-white`}>
                  <div className="flex flex-col items-center justify-center">
                    {activity.icon}
                    <h3 className="text-xl font-bold mt-4">{activity.title}</h3>
                    <p className="text-center mt-2">{activity.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default CoCurricular;
