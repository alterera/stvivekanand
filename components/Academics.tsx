"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const gridItems = [
  {
    id: 1,
    title: "Science Laborities",
    color: "bg-purple-500",
    link: "#",
    image: "/assets/academics/science.webp",
  },
  {
    id: 2,
    title: "Space Lab",
    color: "bg-orange-500",
    link: "#",
    image: "/assets/academics/space.webp",
  },
  {
    id: 3,
    title: "Computer Department",
    color: "bg-blue-500",
    link: "#",
    image: "/assets/academics/computer.webp",
  },
  {
    id: 4,
    title: "Phonics Lab",
    color: "bg-red-400",
    link: "#",
    image: "/assets/academics/phonic.webp",
  },
  {
    id: 5,
    title: "AI / ML Lab",
    color: "bg-gray-500",
    link: "#",
    image: "/assets/academics/ai-ml.webp",
  },
  {
    id: 6,
    title: "Experiential Learning",
    color: "bg-green-500",
    link: "#",
    image: "/assets/academics/experiential.webp",
  },
  {
    id: 7,
    title: "Library",
    color: "bg-teal-500",
    link: "#",
    image: "/assets/academics/library.webp",
  },
];

const Academics = () => {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-[#fff9f5] text-[#1D3557]">
      <div className="px-6">
        <h2 className="relative text-4xl font-bold text-center mb-2">
          Academic Facilities
          <Image src="/assets/patterns/curvy.png" alt="hilly" height={100} width={120} className="absolute top-10 left-[60%]"/>
        </h2>
        <p className="text-center mb-16">
          Fully equipped classrooms, a majority of them have been transformed
          into digital learning classrooms.
        </p>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-3 md:gap-6 w-full max-w-7xl text-white">
        {/* First Column (2 Boxes) */}
        <div className="flex flex-col justify-center gap-6">
          {gridItems.slice(0, 2).map((item) => (
            <GridBox key={item.id} {...item} />
          ))}
        </div>

        {/* Second Column (3 Boxes) */}
        <div className="flex flex-col gap-6">
          {gridItems.slice(2, 5).map((item) => (
            <GridBox key={item.id} {...item} />
          ))}
        </div>

        {/* Third Column (2 Boxes) */}
        <div className="flex flex-col justify-center gap-6">
          {gridItems.slice(5, 7).map((item) => (
            <GridBox key={item.id} {...item} />
          ))}
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden w-full px-4">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.2} // Show part of adjacent slides
          spaceBetween={15} // Add some spacing
          pagination={{ clickable: true }}
          centeredSlides={true} // Keep the active slide centered
        >
          {gridItems.map((box) => (
            <SwiperSlide key={box.id}>
              <Link href={box.link} className="block w-full">
                <div className="relative h-full rounded-lg overflow-hidden shadow-lg aspect-square">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${box.image})` }}
                  ></div>
                  <div
                    className={`absolute inset-0 ${box.color} opacity-60`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
                    {box.title}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const GridBox = ({
  title,
  color,
  link,
  image,
}: {
  title: string;
  color: string;
  link: string;
  image: string;
}) => {
  return (
    <motion.a
      href={link}
      className="relative h-40 md:h-96 w-full rounded-lg overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Color Overlay */}
      <div
        className={`absolute inset-0 ${color} opacity-70 group-hover:opacity-60 transition-all duration-300`}
      ></div>

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold" style={{fontFamily: 'var(--font-garamond)'}}>
        {title}
      </div>
    </motion.a>
  );
};

export default Academics;
