"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";


const PrincipalMessage = () => {
  return (
    <>
      <section className="w-full bg-[#F9F9F9] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <DynamicBreadcrumb />
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
              Principal&apos;s Message
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A message from our esteemed principal, shaping the future of our
              students.
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
                src="/assets/faculty/principal.webp"
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
                &ldquo;As we embark on another academic year at Saint Vivekanand
                Sr. Sec. School, Bikaner, I am delighted to extend a warm
                welcome to our esteemed students, parents, and faculty. For over
                45 years, our institution has been a beacon of learning, rooted
                in values that go beyond textbooks. Our commitment lies not just
                in academic achievements but in instilling enduring values that
                shape responsible, compassionate individuals. We take pride in
                fostering a culture of respect, integrity, and empathy, values
                that are woven into the fabric of our daily interactions.&rdquo;
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                &ldquo;In our classrooms, on the sports field, and amidst the
                creative pursuits, we emphasize character development alongside
                academic excellence. Our journey is a testament to the belief
                that education is not merely about acquiring knowledge but about
                cultivating a strong moral compass. At Saint Vivekanand, we are
                not just educators; we are mentors guiding students toward
                becoming conscientious global citizens. Join us in this legacy
                of values-driven education, where each day is an opportunity to
                nurture not just bright minds, but noble hearts. Here&apos;s to
                another year of inspiring growth and learning.&rdquo;
              </p>
              <p className="text-[#E63946] font-bold text-lg mt-6">
                - Nidhi Gupta
              </p>
              <p className="text-gray-600 text-sm">
                Principal, Saint Vivekanand School
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrincipalMessage;
