"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CbseAffiliation = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <DynamicBreadcrumb />
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            CBSE Affiliation
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            animi.
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
              src="/assets/background/bg-2.jpeg"
              alt="Principal"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#002147] mb-4">
              CBSE Affiliation: St. Vivekanand School
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              The St. Vivekanand School has national recognition for its quality
              standard, as it is a CBSE school. CBSE, which stands for Central
              Board of Secondary Education, is a national-level board of
              education in India that follows a standardized curriculum across
              all affiliated schools. Being a CBSE-affiliated school, St.
              Vivekanand School, Bikaner follows the standards set by the board
              in terms of academics, infrastructure, and overall quality of
              education. The school has to adhere to the guidelines and
              regulations laid down by CBSE, which ensures a certain level of
              uniformity and quality across all CBSE schools in the country.
            </p>
            <Link href={"/mandatory-disclosure"}>
              <Button className="bg-[#85193C] my-2 hover:bg-[#8e2345]">Mandatory Disclosure</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CbseAffiliation;
