"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface CardProps {
  title: string;
  subtitle: string;
  backgroundColors: { top: string; bottom: string };
  image: string;
  link: string;
}

const activities: CardProps[] = [
  {
    title: "Vocal & Music",
    subtitle: "Dedicated coach for singing classes and instrumental music.",
    backgroundColors: { top: "#51D1F7", bottom: "#FFFFFF" },
    image: "/assets/background/bg-2.jpeg",
    link: "/co-curricular/vocal-and-instrumental-music"
  },
  {
    title: "Painting Workshops",
    subtitle: "Regular painting classes where students create different styles of art.",
    backgroundColors: { top: "#F85B6B", bottom: "#FFFFFF" },
    image: "/assets/co-curricular/paintings.webp",
    link: "/co-curricular/painting-workshops"
  },
  {
    title: "Kathak Chapter",
    subtitle: "Special classes by a renowned tutor hailing from the Jaipur Kathak Gharana.",
    backgroundColors: { top: "#28DFAB", bottom: "#FFFFFF" },
    image: "/assets/co-curricular/kathak.webp",
    link: "/co-curricular/kathak-chapter"
  },
  {
    title: "Textile & Embroidery",
    subtitle: "Textile & embroidery masterclasses by a resident tutor for those who opt for it.",
    backgroundColors: { top: "#6F3FF1", bottom: "#FFFFFF" },
    image: "/assets/background/bg-2.jpeg",
    link: "/co-curricular/textile-and-embroidery"
  },
  {
    title: "Clubs & Chapters",
    subtitle: "Passion-led clubs like Abacus, Hiking, Martial Arts, Skating & Calligraphy.",
    backgroundColors: { top: "#FBDA35", bottom: "#FFFFFF" },
    image: "/assets/background/bg-2.jpeg",
    link: "/co-curricular/clubs-and-chapters"
  },
  {
    title: "& Many More!",
    subtitle: " From music and dance to coding and debate, our co-curricular programs go beyond the classroom to inspire creativity, leadership, and lifelong skills.",
    backgroundColors: { top: "#6F3FF1", bottom: "#FBDA35" },
    image: "/assets/background/bg-2.jpeg",
    link: "#"
  },
];

const CoCurricular = () => {
  return (
    <motion.section
      className="w-full bg-white py-10 xl:px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{backgroundImage: `url('/assets/background/co-curricular.png')`, objectFit: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right top'}}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="relative text-3xl md:text-4xl font-bold text-[#1D3557] text-center mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Co-Curricular Activities
          <Image src="/assets/patterns/curvy.png" alt="hilly" height={100} width={120} className="absolute top-10 left-[55%]"/>
        </motion.h2>
        <motion.p
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Success beyond classroom
        </motion.p>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-6" >
          {activities.map((eachData, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card {...eachData} />
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Swiper */}
        <motion.div className="md:hidden w-full mt-6 px-4">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={15}
            pagination={{ clickable: true }}
            centeredSlides={true}
          >
            {activities.map((activity, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <Card {...activity} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CoCurricular;

const Card = ({ title, subtitle, backgroundColors, image, link }: CardProps) => {
  const { bottom } = backgroundColors;

  return (
    <motion.div
      // whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col justify-between p-6 rounded-lg shadow-lg w-full h-[320px] text-white overflow-hidden"
      style={{ background: `linear-gradient(to bottom, #0D3658, ${bottom})` }}
    >
      <div className="absolute inset-0 opacity-70 mix-blend-multiply">
        <Image src={image} alt={title} fill className="object-cover hover:scale-110 duration-500" />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2">{subtitle}</p>
      </div>

      <Link href={link} className="relative z-10 mt-4 rounded-md self-start">
        <Button className="bg-white text-black font-semibold hover:text-white">Learn More</Button>
      </Link>
    </motion.div>
  );
};
