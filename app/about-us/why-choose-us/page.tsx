"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";

const whyUsData = [
  {
    id: 1,
    title: "Best Experiential School of 2023",
    description:
      "We take immense pride in being recognized as the Best Experiential School of 2023, a testament to our commitment to transforming education through action-based learning. At St. Vivekanand, students actively participate in the learning process, applying concepts to real-world situations and building skills that go beyond the classroom. Our approach encourages curiosity, boosts confidence, and empowers students to become independent thinkers and lifelong learners.",
    imageUrl: "/assets/about/award.webp",
  },
  {
    id: 2,
    title: "Focused on Experiential and Independent Learning",
    description:
      "We are among the few institutions that truly practice experiential learning—ensuring every child is deeply involved in their educational journey. Our unique system supports students in such a holistic way that they rarely require external tuitions. This is achieved through a combination of a low teacher-student ratio of 35:1, comprehensive chapter-wise study material, and a robust assessment system that includes weekly tests along with detailed online and offline progress reports. Every child is given individual attention and support, allowing them to flourish academically and personally.",
    imageUrl: "/assets/about/choose-1.webp",
  },
  {
    id: 3,
    title: "International Standards in Language Learning",
    description:
      "In the foundational years, we place a strong emphasis on language and literacy through a London-based phonics methodology. This globally recognized approach enhances reading fluency, pronunciation, and comprehension, setting a strong linguistic base early on. Our phonics program is fun, interactive, and scientifically designed to develop strong communication skills in children—skills that are vital for success in every field.",
    imageUrl: "/assets/about/exper.webp",
  },
  {
    id: 4,
    title: "Pioneers in Social-Emotional Learning",
    description:
      "We are proud to be the first school in the region to integrate Social-Emotional Learning (SEL) into our daily curriculum. In today's fast-paced world, it's more important than ever to nurture emotionally resilient and socially aware individuals. Our SEL program teaches children empathy, self-awareness, decision-making, and interpersonal skills, ensuring they grow into compassionate, confident, and emotionally intelligent adults.",
    imageUrl: "/assets/about/emotional.webp",
  },
  {
    id: 5,
    title: "Modern Infrastructure that Elevates Learning",
    description:
      "At St. Vivekanand, we believe that the learning environment significantly impacts a child's growth. That's why our classrooms are fully air-conditioned, creating a comfortable space where students can focus and thrive. Each classroom is equipped with interactive smart panels, enabling dynamic and engaging lessons using multimedia, visual aids, and real-time collaboration. We also offer one of the most advanced infrastructures in the region, designed specifically to support 21st-century learning.",
    imageUrl: "/assets/about/infra.webp",
  },
  {
    id: 6,
    title: "Strong Cultural Foundation",
    description:
      "While we embrace global methodologies and cutting-edge technologies, we remain firmly rooted in our cultural heritage and values. Through regular activities, events, and practices, students are encouraged to celebrate their traditions and respect diversity. This blend of modern thinking and cultural grounding makes our students not only academically strong but also morally responsible and socially aware individuals.",
    imageUrl: "/assets/about/festive.webp",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <DynamicBreadcrumb />

        {/* Heading */}
        <div className="text-center mb-12 mt-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Welcome to St. Vivekanand School - a place where academic excellence blends seamlessly with modern, experiential learning methods.
          </p>
        </div>

        {/* History Timeline */}
        <div className="flex flex-col gap-16">
          {whyUsData.map((item, index) => (
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

export default WhyChooseUs;
