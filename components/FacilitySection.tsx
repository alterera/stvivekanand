"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity"; // Ensure you have @sanity/image-url configured
import { SectionData } from "@/types";

interface FacilitySectionProps {
    section: SectionData;
    index: number;
  }

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const FacilitySection = ({ section, index }: FacilitySectionProps) => {
  return (
    <motion.div
      id={section.sectionId?.current}
      className={`flex flex-col md:flex-row gap-10 my-10 pb-10 ${
        index % 2 === 0 ? "" : "md:flex-row-reverse"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariant}
    >
      {/* Image */}
      {section.image?.asset?._ref && (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="w-full md:w-1/2"
  >
    <Image
      src={urlFor(section.image)}
      alt={section.title}
      width={500}
      height={350}
      className="rounded-lg shadow-lg object-cover w-full"
    />
  </motion.div>
)}


      {/* Text Content */}
      <motion.div className="flex flex-col justify-center w-full md:w-1/2" variants={fadeInVariant}>
        <motion.h3 className="text-2xl font-bold text-[#1D3557] mb-4">{section.title}</motion.h3>
        <motion.p className="text-gray-700">{section.description}</motion.p>
        <motion.ul className="list-disc grid grid-cols-2 gap-4 pl-4 pt-4" variants={fadeInVariant}>
          {section.listContent.map((item, idx) => (
            <motion.li key={idx} className="break-words" variants={fadeInVariant}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default FacilitySection;
