"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const gridItems = [
  {
    id: 1,
    title: "Science Laboratories",
    color: "bg-purple-500",
    link: "/academics/all-facilities/#science-laborities",
    image: "/assets/academics/science.webp",
  },
  {
    id: 2,
    title: "Space Lab",
    color: "bg-orange-500",
    link: "/academics/all-facilities/#space-lab",
    image: "/assets/academics/space.webp",
  },
  {
    id: 3,
    title: "Computer Department",
    color: "bg-blue-500",
    link: "/academics/all-facilities/#computer-department",
    image: "/assets/academics/computer.webp",
  },
  {
    id: 4,
    title: "Phonics Lab",
    color: "bg-red-400",
    link: "/academics/all-facilities/#phonic-lab",
    image: "/assets/academics/phonic.webp",
  },
  {
    id: 5,
    title: "AI / ML Lab",
    color: "bg-gray-500",
    link: "/academics/all-facilities/#ai-ml-lab",
    image: "/assets/academics/ai-ml.webp",
  },
  {
    id: 6,
    title: "Experiential Learning",
    color: "bg-green-500",
    link: "/academics/all-facilities/#experiential-learning",
    image: "/assets/academics/experiential.webp",
  },
  {
    id: 7,
    title: "Library",
    color: "bg-teal-500",
    link: "/academics/all-facilities/#library",
    image: "/assets/academics/library.webp",
  },
];

const Academics = () => {
  return (
    <section className="relative w-full xl:px-4 py-16 flex flex-col items-center bg-[#fff9f5] text-[#1D3557] overflow-hidden">
      <Image src="/assets/patterns/tri-dots.png" alt="hilly" height={100} width={140} className="absolute top-16 -right-5 rotate-90" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
        className="px-6"
      >
        <h2 className="relative text-4xl font-bold text-center mb-2">
          Academics - The Experential Learning
          <Image src="/assets/patterns/curvy.png" alt="hilly" height={100} width={120} className="absolute top-10 left-[60%]"/>
        </h2>
        <motion.p 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >Fostering curiosity and critical thinking through hands-on, real-world experiences that empower students to explore, innovate, and excel in their academic journey.
        </motion.p>
      </motion.div>

      {/* Desktop Grid Layout */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.5 }} 
        viewport={{ once: true }}
        className="hidden md:grid grid-cols-3 md:gap-6 w-full max-w-7xl text-white"
      >
        <div className="flex flex-col justify-center gap-6">
          {gridItems.slice(0, 2).map((item, index) => (
            <GridBox key={item.id} {...item} delay={index * 0.2} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {gridItems.slice(2, 5).map((item, index) => (
            <GridBox key={item.id} {...item} delay={index * 0.2} />
          ))}
        </div>
        <div className="flex flex-col justify-center gap-6">
          {gridItems.slice(5, 7).map((item, index) => (
            <GridBox key={item.id} {...item} delay={index * 0.2} />
          ))}
        </div>
      </motion.div>

      {/* Mobile Slider */}
      <div className="block md:hidden w-full px-4 h-auto min-h-[250px]">
        <Swiper modules={[Pagination]} slidesPerView={1.2} spaceBetween={15} pagination={{ clickable: true }} centeredSlides={true} loop={true}>
          {gridItems.map((box) => (
            <SwiperSlide key={box.id}>
              <div
                
                className="flex justify-center text-white"
              >
                <GridBox {...box} delay={0}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </section>
  );
};

const GridBox = ({ title, color, link, image, delay }: { title: string; color: string; link: string; image: string; delay: number }) => {
  return (
    <motion.div
      className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      <div className={`absolute inset-0 ${color} opacity-70 group-hover:opacity-60 transition-all duration-300`}></div>
      <Link href={link} className="absolute inset-0 flex items-center justify-center text-3xl font-bold" style={{ fontFamily: 'var(--font-garamond)' }}>
        {title}
      </Link>
    </motion.div>
  );
};

export default Academics;