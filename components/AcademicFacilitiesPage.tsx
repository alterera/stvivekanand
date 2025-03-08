"use client";

import FacilitySection from "@/components/FacilitySection";
import { motion } from "framer-motion";
import { SectionData } from "@/types";

interface SectionDataProps {
    sections: SectionData[];
  }

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AcademicFacilitiesPage = ({ sections }: SectionDataProps) => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <motion.h1 className="text-center text-4xl font-semibold" variants={fadeInVariant}>
        Academic Facilities
      </motion.h1>
      <motion.p className="text-center text-sm mb-10" variants={fadeInVariant}>
      The central Building Consists of 50+ well-lit, fully equipped classrooms, a majority of them have been transformed into digital learning classrooms.
      </motion.p>

      {sections.map((section, index) => (
        <FacilitySection key={section.sectionId.current} section={section} index={index} />
      ))}
    </section>
  );
};

export default AcademicFacilitiesPage;
