"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaBrain, FaDumbbell, FaUsers, FaLightbulb, FaChalkboardTeacher } from "react-icons/fa";
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

const approaches = [
  {
    id: "holistic-development",
    title: "Holistic Development",
    description: "Fostering well-rounded individuals through a comprehensive approach to education, emphasizing robust minds, healthy bodies, and ethical characters. Explore our diverse curriculum, sports programs, and vibrant arts initiatives.",
    icon: <FaUserGraduate className="text-5xl text-[#E63946]" />,
    image: "/assets/approach/holistic.png",
  },
  {
    id: "transformative-education",
    title: "Transformative Education",
    description: "Empowering students to thrive in a rapidly evolving world, our enriching environment prepares them for tomorrow's challenges. Discover an immersive learning experience beyond the classroom at St. Vivekanand.",
    icon: <FaBrain className="text-5xl text-[#E63946]" />,
    image: "/assets/approach/transform.png",
  },
  {
    id: "sports-physical-education",
    title: "Sports and Physical Education",
    description: "Emphasizing teamwork and leadership, our cricket facilities offer enthusiasts the perfect setting to hone their skills and foster a lifelong love for the sport.",
    icon: <FaDumbbell className="text-5xl text-[#E63946]" />,
    image: "/assets/approach/sports.png",
  },
  {
    id: "physical-fitness",
    title: "Physical Fitness and Wellness",
    description: "Promoting physical health and well-being, our programs offer diverse activities from badminton to horse riding. Discover a holistic approach to fitness at St. Vivekanand.",
    icon: <FaUsers className="text-5xl text-[#E63946]" />,
    image: "/assets/approach/yoga.png",
  },
  {
    id: "student-teacher-ratio",
    title: "25:1 Student-Teacher Ratio",
    description: "At St. Vivekanand Sr. Sec. School, we prioritize each child's development. With one of the city's best student-to-teacher ratios, we provide personalized attention, ensuring a supportive environment.",
    icon: <FaLightbulb className="text-5xl text-[#E63946]" />,
    image: "/assets/approach/yoga.png",
  },
  {
    id: "nep-pedagogy",
    title: "NEP-Based Pedagogy",
    description: "NEP 2020 emphasizes the need for a student-centric, experiential, and inquiry-based approach to learning. The policy aims to move away from rote learning and encourage critical thinking, problem-solving, and creativity. St. Vivekanand School is proud to be an early adopter of this visionary pedagogy.",
    icon: <FaChalkboardTeacher className="text-5xl text-[#E63946]" />,
    image: "/assets/approach/yoga.png",
  },
];

const Approach = () => {
  return (
    <motion.section 
      className="w-full bg-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
      <Breadcrumb className="py-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Academics</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Our Approach</BreadcrumbPage>
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
            Our Approach: Future-Ready Learning
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our teaching philosophy ensures that students excel in **academics, sports, creativity, and character building**, making them **leaders of tomorrow**.
          </p>
        </motion.div>

        {/* Approach Sections */}
        <motion.div className="flex flex-col space-y-16">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.id}
              id={approach.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <Image
                src={approach.image}
                alt={approach.title}
                width={500}
                height={350}
                className="rounded-lg shadow-lg w-full md:w-[50%] object-cover"
              />

              {/* Text Section */}
              <div className="w-full md:w-[50%] text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  {approach.icon}
                  <h3 className="text-2xl font-bold text-[#1D3557]">{approach.title}</h3>
                </div>
                <p className="text-gray-700">{approach.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Approach;
