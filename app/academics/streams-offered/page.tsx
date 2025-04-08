"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCalculator } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";

const streams = [
  {
    id: 1,
    title: "Science Group",
    description: "A strong foundation in scientific principles and analytical skills.",
    icon: <MdScience className="text-5xl text-[#E63946]" />,
    subjects: ["English", "Physics", "Chemistry", "Mathematics", "Biology"],
    optional: ["Physical Education", "Informatics", "Hindi"],
  },
  {
    id: 2,
    title: "Commerce Group",
    description: "Comprehensive business education with financial and economic insights.",
    icon: <FaCalculator className="text-5xl text-[#E63946]" />,
    subjects: ["English", "Accountancy", "Business Organization", "Economics"],
    optional: ["Hindi", "Physical Education", "Informatics"],
  },
];

const Streams = () => {
  return (
    <motion.section 
      className="w-full bg-white py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <DynamicBreadcrumb />

        {/* Page Title */}
        <motion.div 
          className="text-center my-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Streams Offered at St. Vivekanand School
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our school provides a structured academic journey from UKG to Class XII, offering 
            specialized streams in Science and Commerce for senior secondary students.
          </p>
        </motion.div>

        {/* Academic Journey Section */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#457B9D] text-white py-10 px-6 rounded-lg shadow-lg">
            <HiAcademicCap className="text-5xl mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold">Complete Academic Journey</h3>
            <p className="mt-3 text-gray-200 max-w-3xl mx-auto">
              At St. Vivekanand School, we nurture students from UKG to Class XII 
              with a balanced curriculum focusing on academic excellence, leadership, and personal growth.
            </p>
          </div>
        </motion.div>

        {/* Streams Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {streams.map((stream, index) => (
            <motion.div
              key={stream.id}
              className="bg-[#002147] p-8 rounded-lg shadow-lg hover:shadow-xl 
              transition-transform hover:scale-105 duration-300 text-white flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4">
                {stream.icon}
                <h3 className="text-2xl font-bold">{stream.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-200">{stream.description}</p>

              {/* Subjects */}
              <div>
                <h4 className="text-lg font-semibold underline">Core Subjects:</h4>
                <ul className="list-disc pl-6 mt-2 text-gray-300">
                  {stream.subjects.map((subject) => (
                    <li key={subject}>{subject}</li>
                  ))}
                </ul>
              </div>

              {/* Optional Subjects */}
              <div>
                <h4 className="text-lg font-semibold underline">Optional Subjects:</h4>
                <ul className="list-disc pl-6 mt-2 text-gray-300">
                  {stream.optional.map((subject) => (
                    <li key={subject}>{subject}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Streams;
