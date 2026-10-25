"use client";

import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const gridItems = [
  {
    id: 1,
    title: "Science Laboratories",
    color: "bg-purple-500",
    link: "/academics/science-laborities",
    image: "/assets/academics/science.webp",
  },
  {
    id: 2,
    title: "Space Lab",
    color: "bg-orange-500",
    link: "/academics/space-lab",
    image: "/assets/academics/space.webp",
  },
  {
    id: 3,
    title: "Computer Department",
    color: "bg-blue-500",
    link: "/academics/computer-department",
    image: "/assets/academics/computer.webp",
  },
  {
    id: 4,
    title: "Phonics Lab",
    color: "bg-red-400",
    link: "/academics/phonic-lab",
    image: "/assets/academics/phonic.webp",
  },
  {
    id: 5,
    title: "AI / ML Lab",
    color: "bg-gray-500",
    link: "/academics/ai-ml-lab",
    image: "/assets/academics/ai-ml.webp",
  },
  {
    id: 6,
    title: "Experiential Learning",
    color: "bg-green-500",
    link: "/academics/experiential-learning",
    image: "/assets/academics/experiential.webp",
  },
  {
    id: 7,
    title: "Library",
    color: "bg-teal-500",
    link: "/academics/library",
    image: "/assets/academics/library.webp",
  },
];

const Academics = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fff9f5] py-16 text-[#1D3557] xl:px-4">
      <Image
        src="/assets/patterns/tri-dots.png"
        alt=""
        aria-hidden="true"
        height={100}
        width={140}
        className="absolute top-16 -right-5 rotate-90"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6"
      >
        <h2 className="relative mb-2 text-center text-4xl font-bold">
          Academics - The Experiential Learning
          <Image
            src="/assets/patterns/curvy.png"
            alt=""
            aria-hidden="true"
            height={100}
            width={120}
            className="absolute top-10 left-[60%]"
          />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          Fostering curiosity and critical thinking through hands-on, real-world experiences that
          empower students to explore, innovate, and excel in their academic journey.
        </motion.p>
        <div className="mb-12 flex justify-center">
          <Button asChild className="bg-[#85193C] font-semibold text-white hover:bg-[#85193C]/90">
            <Link href="/academics/all-facilities">Explore academics</Link>
          </Button>
        </div>
      </motion.div>

      {/* Desktop Grid Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto hidden w-full max-w-7xl grid-cols-3 gap-6 text-white md:grid md:px-6"
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

      {/* Mobile: full-width track, inset card slides */}
      <div className="relative left-1/2 block w-screen -translate-x-1/2 md:hidden">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          centeredSlides={false}
          loop
          className="mobile-card-carousel !px-4"
        >
          {gridItems.map((box) => (
            <SwiperSlide key={box.id} className="!h-auto">
              <GridBox {...box} delay={0} />
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
  delay,
}: {
  title: string;
  color: string;
  link: string;
  image: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="relative h-72 w-full overflow-hidden rounded-xl shadow-md group md:h-96"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      <div
        className={`absolute inset-0 ${color} opacity-70 transition-all duration-300 group-hover:opacity-60`}
      />
      <Link
        href={link}
        className="absolute inset-0 flex items-center justify-center text-3xl font-bold duration-500 hover:underline"
        style={{ fontFamily: "var(--font-garamond)" }}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default Academics;
