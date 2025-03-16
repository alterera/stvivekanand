"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Quote from "./ui/quote";

const About = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.section
      className="w-full bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="hidden md:flex flex-col md:flex-row transition-all duration-500 overflow-hidden">
        {/* First Container */}
        <motion.div
          className={`relative flex flex-col justify-between min-h-[600px] bg-[#0D3658] p-10 transition-all duration-500 ease-in-out text-white ${
            hovered ? "md:w-[60%]" : "md:w-[50%]"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className="absolute top-20 right-0 h-[300px] w-[400px] bg-white/20 rounded-s-3xl"
            style={{
              backgroundImage: "url('/assets/background/pattern-3.png')",
              opacity: "10%",
              objectFit: "cover",
            }}
          ></div>
          <Quote className="text-white absolute top-10 left-10 h-[50px] w-[50px]" />

          {/* Heading (Hidden on Hover) */}
          <motion.h2
            className={`text-4xl font-bold transition-opacity duration-300 pt-20 ${hovered ? "opacity-0 absolute" : "opacity-100"}`}
            style={{ fontFamily: "var(--font-garamond)" }}
          >
            Hear From The <br /> Principal
          </motion.h2>

          {/* Paragraph (Shown on Hover) */}
          <p
            className={`text-lg transition-opacity duration-300 w-[70%] pt-20 ${
              hovered ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            Our commitment lies not just in academic achievements but in
            instilling enduring values that shape responsible, compassionate
            individuals. We take pride in fostering a culture of respect,
            integrity, and empathy, values that are woven into the fabric of our
            daily interactions. In our classrooms, on the sports field, and
            amidst the creative pursuits, we emphasize character development
            alongside academic excellence. Our journey is a testament to the
            belief that education is not merely about acquiring knowledge but
            about cultivating a strong moral compass.
          </p>

          {/* Name & Position */}
          <div className="mt-6">
            <div className="w-[150px] h-[0.5%] bg-white mb-5"></div>
            <span className="block font-semibold text-lg">Nidhi Gupta</span>
            <span className="text-sm opacity-80">Principal</span>
          </div>

          {/* Image Positioned Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-6"
          >
            <Image
              src="/assets/about/principal.png"
              alt="Nidhi Gupta"
              width={600}
              height={300}
            />
          </motion.div>
        </motion.div>

        {/* Second Container */}
        <div
          className={`relative flex flex-col justify-between bg-[#85193C] p-10 transition-all duration-500 ease-in-out text-white ${
            hovered ? "md:w-[40%]" : "md:w-[60%]"
          }`}
        >
          <div
            className="absolute top-20 right-0 h-[300px] w-[450px] bg-white/20 rounded-s-3xl"
            style={{
              backgroundImage: "url('/assets/background/pattern-3.png')",
              opacity: "15%",
              objectFit: "cover",
            }}
          ></div>
          <Quote className="text-white absolute top-10 left-10 h-[50px] w-[50px]" />

          {/* Heading (Shown on Hover) */}
          <h2
            className={`text-3xl font-bold transition-opacity duration-300 pt-20 ${
              hovered ? "opacity-100" : "opacity-0 absolute"
            }`}
            style={{ fontFamily: "var(--font-garamond)" }}
          >
            Director&apos;s Note
          </h2>

          {/* Paragraph (Hidden on Hover) */}
          <p
            className={`text-lg transition-opacity duration-300 pt-20 md:w-[70%] ${
              hovered ? "opacity-0 absolute" : "opacity-100"
            }`}
          >
            Our commitment to modern pedagogy, bagless schooling, and aligning
            with the latest NEP practices sets us apart. From spacetech &
            astronomy, AI learning & robotics, to performance and liberal arts,
            we cultivate holistic development. Our teachers undergo
            international standard training, ensuring a world-class education. I
            am thrilled to share that our focus on experiential learning has
            earned us the prestigious title of the Best in Experiential Learning
            by a reputed organization in Thailand.
          </p>

          {/* Name & Position */}
          <div className="mt-6 z-10">
            <div className="w-[150px] h-[0.5%] bg-white mb-5"></div>
            <span className="block font-semibold text-lg">SH. Nipun Gupta</span>
            <span className="text-sm opacity-80">Director</span>
          </div>

          {/* Image Positioned Bottom (Moves to Right End on Hover) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`absolute bottom-0 flex justify-center -right-48 w-full`}
          >
            <Image
              src="/assets/about/Nipun_Gupta.png"
              alt="Nipun Gupta"
              width={500}
              height={400}
              className=""
            />
          </motion.div>
        </div>
      </div>

      <div className="md:hidden w-full flex flex-col items-center">
        {/* First Container */}
        <div className="relative flex flex-col justify-evenly w-full bg-[#1D3557] py-12 px-6 h-full text-white">
          <Quote className="text-gray-100 absolute top-10 left-5 h-[40px] w-[40px]" />
          <h2 className="text-2xl font-bold pt-10" style={{ fontFamily: "var(--font-garamond)" }}>
            Hear From The <br /> Principal
          </h2>

          {/* Image Container */}
          <div className="relative w-full bg-white/10 p-6 rounded-lg mt-6">
            <Image
              src="/assets/about/principal.png"
              alt="Nidhi Gupta"
              width={300}
              height={300}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
            <div className="h-60"></div>
            {/* Space to position the image above */}
          </div>

          {/* Paragraph */}
          <p className="my-6 text-base text-gray-100">
            Our commitment lies not just in academic achievements but in
            instilling enduring values that shape responsible, compassionate
            individuals. We take pride in fostering a culture of respect,
            integrity, and empathy, values that are woven into the fabric of our
            daily interactions. In our classrooms, on the sports field, and
            amidst the creative pursuits, we emphasize character development
            alongside academic excellence. Our journey is a testament to the
            belief that education is not merely about acquiring knowledge but
            about cultivating a strong moral compass.
          </p>

          {/* Name & Position */}
          <div className="">
            <div className="w-[150px] h-[1px] bg-gray-300 mb-5"></div>
            <span className="block font-semibold text-lg">Nidhi Gupta</span>
            <span className="text-sm opacity-80">Principal</span>
          </div>
        </div>

        {/* Second Container */}
        <div className="relative flex flex-col justify-evenly w-full bg-[#85193C] py-12 px-4 h-full text-white">
          <Quote className="text-white absolute top-10 left-5 h-[40px] w-[40px]" />
          <h2 className="text-2xl font-bold pt-10 text-gray-100">
            Director&apos;s Note
          </h2>

          {/* Image Container */}
          <div className="relative w-full bg-white/10 p-6 rounded-lg mt-6">
            <Image
              src="/assets/about/Nipun_Gupta.png"
              alt="Nipun Gupta"
              width={480}
              height={450}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
            <div className="h-60"></div>
            {/* Space to position the image above */}
          </div>

          {/* Paragraph */}
          <p className="my-6 text-base text-gray-100">
            Our commitment to modern pedagogy, bagless schooling, and aligning
            with the latest NEP practices sets us apart. From spacetech &
            astronomy, AI learning & robotics, to performance and liberal arts,
            we cultivate holistic development. Our teachers undergo
            international standard training, ensuring a world-class education. I
            am thrilled to share that our focus on experiential learning has
            earned us the prestigious title of the Best in Experiential Learning
            by a reputed organization in Thailand.
          </p>

          {/* Name & Position */}
          <div className="">
            <div className="w-[150px] h-[1px] bg-white mb-5"></div>
            <span className="block font-semibold text-lg">SH. Nipun Gupta</span>
            <span className="text-sm opacity-80">Director</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
