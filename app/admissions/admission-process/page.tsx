"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUserCheck, FaFileAlt, FaCalendarCheck, FaSchool } from "react-icons/fa";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

const admissionSteps = [
  {
    id: 1,
    title: "Step 1: Registration",
    description: "Fill out the online or offline admission form and submit it with the required details.",
    icon: <FaFileAlt className="text-5xl text-[#E63946]" />,
  },
  {
    id: 2,
    title: "Step 2: Document Submission",
    description: "Submit required documents, including Birth Certificate or Transfer Certificate.",
    icon: <FaUserCheck className="text-5xl text-[#E63946]" />,
  },
  {
    id: 3,
    title: "Step 3: Interaction & Assessment",
    description: "For certain classes, an interaction session with the student and parents may be required.",
    icon: <FaCalendarCheck className="text-5xl text-[#E63946]" />,
  },
  {
    id: 4,
    title: "Step 4: Confirmation of Admission",
    description: "Once selected, complete the fee payment process to secure admission.",
    icon: <FaSchool className="text-5xl text-[#E63946]" />,
  },
];

const Admissions = () => {
  return (
    <motion.section 
      className="w-full bg-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="py-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Admissions</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Admission Procedure</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Page Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Admission Procedure
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Enroll your child in a nurturing environment that promotes academic excellence, discipline, and holistic development.
          </p>
        </motion.div>

        {/* Admission Steps Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {admissionSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-[#002147] p-8 rounded-lg shadow-lg hover:shadow-xl 
              transition-transform hover:scale-105 duration-300 text-white flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4">
                {step.icon}
                <h3 className="text-2xl font-bold">{step.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-200">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Admission Guidelines Section */}
        <motion.div 
          className="mt-16 bg-[#F1EEE9] p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#1D3557] mb-6">General Guidelines for Parents</h3>
          <ul className="space-y-4 text-gray-700">
            <li>📌 Parents should not enter classrooms during school hours.</li>
            <li>📌 Meetings with teachers should be arranged through the Principal.</li>
            <li>📌 Ensure regularity, punctuality, and discipline in your child’s school life.</li>
            <li>📌 Check the student’s diary daily for homework and school notices.</li>
            <li>📌 Inform the school about any address changes.</li>
            <li>📌 Children who are sick should not be sent to school.</li>
            <li>📌 Avoid criticizing teachers or the school in front of children.</li>
            <li>📌 All communication should be addressed to the Principal.</li>
          </ul>
        </motion.div>

        {/* Admission Document Requirements */}
        <motion.div 
          className="mt-16 bg-[#457B9D] text-white p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Required Documents</h3>
          <ul className="space-y-4 text-gray-200">
            <li>📌 **Transfer Certificate (TC)** for students transferring from another school.</li>
            <li>📌 **Birth Certificate** for students enrolling in school for the first time.</li>
            <li>📌 **Previous Academic Records** (for classes above Grade 1).</li>
            <li>📌 **Recent Passport-Size Photographs** of the student.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Admissions;
