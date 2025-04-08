"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";

// export const metadata = {
//   title: "Our History | Saint Vivekanand School",
//   description: "Our mission is to provide quality education in Bikaner, fostering knowledge, growth, and excellence.",
//   keywords: ["Mission", "Vision", "Saint Vivekanand School", "Education", "Bikaner"],
//   openGraph: {
//     title: "Mission & Vision",
//     description: "Our mission is to provide quality education in Bikaner.",
//     url: "https://www.saintvivekanandschool.com/about-us/mission-vision",
//     images: ["/assets/logo/ic-logo.png"],
//   },
// };

const historyData = [
  {
    id: 1,
    title: "Foundation & Vision",
    description:
      "St. Vivekanand Sr. Sec. School holds the distinction of being an integral & inseparable part of the finest centres of learning in Bikaner. The school saw the dawn of its existence on the auspicious national day of 15th August in 1977 as a primary school in Kamla Colony, Bikaner. It was further raised to middle standards in 1984-85. It is being run by a Samiti with distinguished members who hold magnificent farsightedness. Its second branch was started at the towns primary location in JNV Colony in 1990. From the Kindergarten wing to 12th standard, the institution follows NCERT syllabus recognised by the CBSE, based on the latest NEP guidelines. The school has the distinction of running in a spacious campus right in the middle of the town, providing a congenial and inspiring environment to the students.",
    imageUrl: "/assets/about/vision.jpg",
  },
  {
    id: 2,
    title: "Growth & Expansion",
    description:
      "Over the years, Saint Vivekanand School has expanded its campus, introducing state-of-the-art facilities, modern classrooms, and a wide range of extracurricular programs to ensure an all-round development of students.",
    imageUrl: "/assets/background/bg-3.jpeg",
  },
  {
    id: 3,
    title: "Legacy & Future",
    description:
      "With a legacy of academic brilliance and student success, the school continues to evolve, embracing new teaching methodologies, digital transformation, and global perspectives to prepare students for the future.",
    imageUrl: "/assets/about/growth.jpg",
  },
];

const OurHistory = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <DynamicBreadcrumb />

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Our History
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A journey of excellence, discipline, and growth - Saint Vivekanand
            School has been shaping young minds and inspiring future leaders
            since its foundation.
          </p>
        </div>

        {/* History Timeline */}
        <div className="flex flex-col gap-16">
          {historyData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-[#002147] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
