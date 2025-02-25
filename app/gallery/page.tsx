"use client";

import React, { useState } from "react";
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

const categories = ["All", "Sports", "Events", "Academics", "Cultural"];

const galleryImages = [
  { id: 1, src: "/assets/approach/holistic.png", category: "Sports" },
  { id: 2, src: "/assets/approach/sports.png", category: "Events" },
  { id: 3, src: "/assets/approach/transform.png", category: "Academics" },
  { id: 4, src: "/assets/approach/yoga.png", category: "Cultural" },
  { id: 5, src: "/assets/events/event-1.png", category: "Sports" },
  { id: 6, src: "/assets/events/event-2.png", category: "Events" },
  { id: 7, src: "/assets/events/event-3.png", category: "Academics" },
  { id: 8, src: "/assets/events/event-1.png", category: "Cultural" },
  { id: 9, src: "/assets/events/event-2.png", category: "Sports" },
  { id: 10, src: "/assets/events/event-3.png", category: "Events" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

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
              <BreadcrumbPage>Gallery</BreadcrumbPage>
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
            School Gallery
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore the memorable moments of our school through our photo gallery.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                selectedCategory === category
                  ? "bg-[#E63946] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-md group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={`Gallery Image ${image.id}`}
                width={300}
                height={200}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">View</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg relative w-[90%] md:w-[70%] lg:w-[50%]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-4 text-lg font-bold text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <Image src={selectedImage} alt="Selected Image" width={800} height={600} className="w-full h-auto rounded-md" />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Gallery;
