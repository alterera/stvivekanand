"use client";

import FacilitySection from "@/components/FacilitySection";
import { SectionData } from "@/types";

interface SectionDataProps {
  sections: SectionData[];
}


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
