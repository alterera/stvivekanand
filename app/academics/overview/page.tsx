"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBasketballBall, FaFlask, FaRobot, FaBookReader, FaLaptopCode, FaMicroscope, FaBrain, FaLanguage, FaLightbulb, FaChalkboardTeacher, FaChild, FaTableTennis, FaUsers, FaDumbbell, FaMusic, FaPalette, FaPaintBrush } from "react-icons/fa";
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

const facilities = [
  { id: 1, title: "Science Laboratories", description: "Fully equipped Physics, Chemistry, and Biology Labs.", icon: <FaFlask className="text-5xl text-[#E63946]" /> },
  { id: 2, title: "Space Lab", description: "The only Space Lab in the city, offering hands-on space study experiences.", icon: <FaMicroscope className="text-5xl text-[#E63946]" /> },
  { id: 3, title: "Robotics Lab", description: "Hands-on experience in robotics and elementary toolkit learning.", icon: <FaRobot className="text-5xl text-[#E63946]" /> },
  { id: 4, title: "Computer Lab", description: "Modern, internet-enabled lab for research, homework, and projects.", icon: <FaLaptopCode className="text-5xl text-[#E63946]" /> },
  { id: 5, title: "Experiential Learning", description: "Activity-based learning to help students discover themselves.", icon: <FaLightbulb className="text-5xl text-[#E63946]" /> },
  { id: 6, title: "Library", description: "Over 45 years of curated knowledge, with IIT-JEE & NEET sections.", icon: <FaBookReader className="text-5xl text-[#E63946]" /> },
  { id: 7, title: "AI & Machine Learning Lab", description: "Learn the basics of AI & ML with practical applications.", icon: <FaBrain className="text-5xl text-[#E63946]" /> },
  { id: 8, title: "Phonics Lab", description: "UK-based phonics learning pedagogy for early English learning.", icon: <FaLanguage className="text-5xl text-[#E63946]" /> },
  { id: 9, title: "STEAM Lab", description: "Science, Technology, Engineering, Arts, and Math combined for real-world applications.", icon: <FaChalkboardTeacher className="text-5xl text-[#E63946]" /> },
];
  
  const sportsFacilities = [
    { id: 1, title: "Basketball Court", description: "A state-of-the-art court that hosts one of the finest basketball communities in town.", icon: <FaBasketballBall className="text-5xl text-[#E63946]" /> },
    { id: 2, title: "Badminton Court", description: "Indoor badminton court with guided daily practice sessions.", icon: <FaChild className="text-5xl text-[#E63946]" /> },
    { id: 3, title: "Cricket Practice Turf", description: "A closed-net cricket practice area for future cricketers.", icon: <FaUsers className="text-5xl text-[#E63946]" /> },
    { id: 4, title: "Table Tennis Room", description: "Fully-equipped table-tennis room for competitive and recreational play.", icon: <FaTableTennis className="text-5xl text-[#E63946]" /> },
    { id: 5, title: "Gymnasium", description: "An elementary gym for students who want to put in extra hours of training.", icon: <FaDumbbell className="text-5xl text-[#E63946]" /> },
    { id: 6, title: "Lawn Tennis Court", description: "A newly-added hard-court tennis facility.", icon: <FaChild className="text-5xl text-[#E63946]" /> },
  ];
  
  const coCurricular = [
    { id: 1, title: "Vocal & Instrumental Music", description: "Dedicated coach for singing and musical instruments.", icon: <FaMusic className="text-5xl text-[#E63946]" /> },
    { id: 2, title: "Painting Workshops", description: "Regular painting classes to explore different styles of art.", icon: <FaPalette className="text-5xl text-[#E63946]" /> },
    { id: 3, title: "Kathak Chapter", description: "Special Kathak classes by a Jaipur Kathak Gharana tutor.", icon: <FaChild className="text-5xl text-[#E63946]" /> },
    { id: 4, title: "Textile & Embroidery", description: "Textile education & embroidery masterclasses by resident tutors.", icon: <FaPaintBrush className="text-5xl text-[#E63946]" /> },
  ];

const Academics = () => {
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
              <BreadcrumbPage>Overview</BreadcrumbPage>
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
            Academics at St. Vivekanand School
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our institution follows the NCERT curriculum under CBSE guidelines, providing **modern learning experiences** with a legacy of excellence since 1977.
          </p>
        </motion.div>

        {/* History Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#1D3557] mb-4">
              Our Journey Since 1977
            </h3>
            <p className="text-gray-700">
              St. Vivekanand Sr. Sec. School started as a primary school in 1977, and has grown into one of Bikaner&apos;s finest learning institutions. We provide **education from Kindergarten to Class 12, following CBSE & NEP guidelines in a modern, technology-enabled environment.
            </p>
          </div>
          <Image
            src="/assets/background/campus-bg.png"
            alt="School Building"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Facilities Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {facilities.map((sport) => (
            <div key={sport.id} className="bg-[#002147] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center gap-4">
                {sport.icon}
                <h4 className="text-xl font-semibold">{sport.title}</h4>
              </div>
              <p className="mt-2 text-gray-300">{sport.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#1D3557] mb-6">A Glimpse Into Our Campus</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Image src="/assets/events/event-1.png" alt="Classroom" width={300} height={200} className="rounded-lg shadow-md" />
            <Image src="/assets/events/event-2.png" alt="Science Lab" width={300} height={200} className="rounded-lg shadow-md" />
            <Image src="/assets/events/event-3.png" alt="Library" width={300} height={200} className="rounded-lg shadow-md" />
            <Image src="/assets/events/event-1.png" alt="Computer Lab" width={300} height={200} className="rounded-lg shadow-md" />
          </div>
        </motion.div>

        {/* Sports Facilities */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <Image src="/assets/sports/football.png" alt="Sports Facilities" width={500} height={350} className="rounded-lg shadow-lg" />
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#1D3557] mb-4">Sports Facilities</h3>
            <p className="text-gray-700">
              Our school boasts one of the largest in-house sports infrastructures in the city, with world-class courts and facilities.
            </p>
          </div>
        </motion.div>

        {/* Sports Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sportsFacilities.map((sport) => (
            <div key={sport.id} className="bg-[#002147] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center gap-4">
                {sport.icon}
                <h4 className="text-xl font-semibold">{sport.title}</h4>
              </div>
              <p className="mt-2 text-gray-300">{sport.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Co-Curricular Activities */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#1D3557] mb-4">Co-Curricular Activities</h3>
            <p className="text-gray-700">
              Our arts, music, and cultural programs help students **nurture their talents** beyond academics.
            </p>
          </div>
          <Image src="/assets/events/event-1.png" alt="Co-Curricular Activities" width={500} height={350} className="rounded-lg shadow-lg" />
        </motion.div>

        {/* Co-Curricular Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {coCurricular.map((activity) => (
            <div key={activity.id} className="bg-[#E63946] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center gap-4">
                {activity.icon}
                <h4 className="text-xl font-semibold">{activity.title}</h4>
              </div>
              <p className="mt-2 text-gray-300">{activity.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Academics;
