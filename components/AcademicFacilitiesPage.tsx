"use client";

import FacilitySection from "@/components/FacilitySection";
import { motion } from "framer-motion";
import { FacilityData } from "@/types";

interface SectionDataProps {
    sections: FacilityData[];
  }

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AcademicFacilitiesPage = ({ sections }: SectionDataProps) => {
  return (
    <motion.section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <motion.h1 className="text-center text-4xl font-semibold" variants={fadeInVariant}>
        Academic Facilities
      </motion.h1>
      <motion.p className="text-center text-sm mb-10" variants={fadeInVariant}>
        Explore our world-class labs, digital classrooms, and advanced learning spaces.
      </motion.p>

      {sections.map((section, index) => (
        <FacilitySection key={section.sectionId.current} section={section} index={index} />
      ))}
    </motion.section>
  );
};

export default AcademicFacilitiesPage;
