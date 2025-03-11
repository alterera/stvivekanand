"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";


const MissionVision = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <DynamicBreadcrumb />
        {/* Page Heading */}
        <div className="text-center mb-12 mt-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Guiding principles that shape the future of our students and
            community.
          </p>
        </div>

        {/* Mission Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/background/bg-2.jpeg"
              alt="Our Mission"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#002147] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              &ldquo;At Saint Vivekanand School, our mission is to provide a
              holistic education that nurtures creativity, critical thinking,
              and compassion. We are committed to fostering an inclusive and
              dynamic learning environment where students are empowered to reach
              their full potential.&rdquo;
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              &ldquo;We aim to instill a love for lifelong learning and equip
              students with the skills necessary to navigate an ever-changing
              world.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/background/bg-3.jpeg"
              alt="Our Vision"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#002147] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              &ldquo;Our vision is to create a school community that inspires
              students to become compassionate leaders, innovative thinkers, and
              responsible global citizens. We strive to be a center of academic
              excellence, character development, and social
              responsibility.&rdquo;
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              &ldquo;By embracing new technologies and methodologies, we
              envision a future where every student is equipped to thrive in an
              ever-evolving world.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
