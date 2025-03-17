"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";

const historyData = [
  {
    id: 1,
    description:
      "The St. Vivekanand School Bikaner provides holistic and balanced education that helps students with their personality development. The school has a well-rounded approach to education that ensures that the students receive a high level of academic education combined with moral and emotional development. The academic curriculum is designed to cater to the individual needs of each student, and it includes a range of subjects that help students develop cognitive, analytical, and critical thinking skills. In addition, there are several extracurricular activities available to the students, such as music, sports, dance, and drama, which help them develop social skills, emotional intelligence, and creativity. The school also organizes several community service programs, which help students develop a sense of social responsibility and empathy towards others.",
    imageUrl: "/assets/background/bg-2.jpeg",
  },
  {
    id: 2,
    description:
      "The school has a nurturing environment that fosters mutual respect and understanding among students, teachers, and staff. There are several student welfare programs, counselling sessions, and workshops that help students develop their interpersonal skills, build self-esteem, and handle stress and anxiety. The teachers and staff are highly experienced and qualified, and they provide individual attention and guidance to students, which helps them build confidence and develop their potential. Overall, The St. Vivekanand School, Bikaner provides a well-rounded education that aims to promote personal growth and development in students. The schools holistic approach to education ensures that students receive a broad-based foundation that equips them with the skills, knowledge, and values needed to succeed in their personal and professional lives.",
    imageUrl: "/assets/background/bg-3.jpeg",
  },
];

const Curriculum = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
       <DynamicBreadcrumb />

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Our Curriculum
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A journey of excellence, discipline, and growth – Saint Vivekanand
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
                  alt={`${item.id + "t"}`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
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

export default Curriculum;
