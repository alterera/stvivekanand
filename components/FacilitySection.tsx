"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity"; 
import { SectionData } from "@/types";
import * as LucideIcons from "lucide-react"; // Import all Lucide icons
import { LucideIcon } from "lucide-react"; // Import LucideIcon type

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
      className={`flex flex-col md:flex-row gap-10 my-10 pb-10 scroll-mt-44 ${
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
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </motion.div>
      )}

      {/* Text Content */}
      <motion.div
        className="relative flex flex-col justify-center w-full md:w-1/2"
        variants={fadeInVariant}
      >
        <motion.h3 className="text-4xl font-bold text-[#1D3557] mb-4">
          {section.title}
        </motion.h3>
        <motion.p className="text-gray-700">{section.description}</motion.p>
        {/* <motion.div
          className="flex flex-wrap pt-10 gap-5 justify-between"
          variants={fadeInVariant}
        >
          {section.listContent?.map((item, idx) => {
            // Dynamically get the icon component from LucideIcons
            const Icon = LucideIcons[item.icon as keyof typeof LucideIcons] as LucideIcon;
            return (
              <motion.div
                key={idx}
                variants={fadeInVariant}
                className="bg-[#1D3557] p-2 rounded-md grid grid-cols-1 grid-rows-4 text-white hover:bg-[#85193C] "
              >
                {Icon && <Icon className="w-10 h-10" />}
                <p className="text-lg font-semibold">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default FacilitySection;