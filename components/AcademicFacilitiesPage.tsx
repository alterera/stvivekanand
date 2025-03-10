"use client";

import FacilitySection from "@/components/FacilitySection";
// import { motion } from "framer-motion";
import { SectionData } from "@/types";
// import StickyAds from "./widgets/AdmissionForm";

interface SectionDataProps {
  sections: SectionData[];
}

// const fadeInVariant = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

const AcademicFacilitiesPage = ({ sections }: SectionDataProps) => {
  return (
    <section className="w-full">

      {sections.map((section, index) => (
        <FacilitySection
          key={section.sectionId.current}
          section={section}
          index={index}
        />
      ))}
    </section>
  );
};

export default AcademicFacilitiesPage;
