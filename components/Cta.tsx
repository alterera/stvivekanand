"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Cta = () => {
  return (
    <motion.section 
      className="relative w-full bg-[#002147] py-16 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Overlay Image */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/assets/background/campus-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Video Section */}
          <motion.div 
            className="lg:w-[60%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Take a Video Tour
            </h2>
            <div className="relative w-full aspect-video bg-black/20 overflow-hidden rounded-lg shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/P2UkzIGUhTo"
                title="St. Vivekanand School Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          {/* Admission Form */}
          <motion.div 
            className="lg:w-[40%] bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">
              Admission Open for 2025-26
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input type="text" placeholder="Name" className="bg-gray-50" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input type="email" placeholder="Email" className="bg-gray-50" />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input type="tel" placeholder="Mobile No." className="bg-gray-50" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input type="text" placeholder="City" className="bg-gray-50" />
                </motion.div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Academic Year
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your academic year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">2024 - 2025</SelectItem>
                      <SelectItem value="dark">2023 - 2024</SelectItem>
                      <SelectItem value="system">2022 - 2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Class
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose your class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="null">Choose your class</SelectItem>
                      <SelectItem value="nursery">Nursery</SelectItem>
                      <SelectItem value="lkg">LKG</SelectItem>
                      <SelectItem value="ukg">UKG</SelectItem>
                      {[...Array(12)].map((_, i) => (
                        <SelectItem key={i} value={`class${i + 1}`}>
                          Class {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    School Type
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose school type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nursery">Day Scholar</SelectItem>
                      <SelectItem value="lkg">Boarding</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button
                  type="submit"
                  className="w-full bg-[#E63946] hover:bg-[#E63946]/90 text-white"
                >
                  Submit
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cta;
