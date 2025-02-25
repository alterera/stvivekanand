"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

const PrincipalMessage = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <Breadcrumb className="pb-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">About Us</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Principals Message</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Principal&apos;s Message
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A message from our esteemed principal, shaping the future of our students.
          </p>
        </div>

        {/* Content Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/faculty/principal.jpg"
              alt="Principal"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#002147] mb-4">
              Welcome to Saint Vivekanand School
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            &ldquo;Education is not just about acquiring knowledge but also about developing 
              character, values, and a lifelong love for learning. At Saint Vivekanand School, 
              we strive to create an environment where students can grow holistically, 
              embracing both academic excellence and personal integrity.&rdquo;
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
            &ldquo;Our goal is to equip students with the skills and mindset to thrive in a 
              rapidly evolving world. We believe in nurturing curiosity, creativity, 
              and compassion in every child.&rdquo;
            </p>
            <p className="text-[#E63946] font-bold text-lg mt-6">- Dr. [Principal&apos;s Name]</p>
            <p className="text-gray-600 text-sm">Principal, Saint Vivekanand School</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
