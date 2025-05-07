"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import { GALLERY_QUERY } from "@/lib/queries";
import { GalleryData } from "@/types/index";
import { motion } from "framer-motion";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState<GalleryData[]>([]);
  const [filteredData, setFilteredData] = useState<GalleryData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [popupImage, setPopupImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityClient.fetch(GALLERY_QUERY);
      setGalleryData(data);
      setFilteredData(data);
    };
    fetchData();
  }, []);

  // Filter logic
  const handleFilter = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      const filtered = galleryData.filter((item) => item.title === category);
      setFilteredData(filtered);
    } else {
      setFilteredData(galleryData);
    }
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
      <DynamicBreadcrumb />
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] text-center mt-8 mb-2">
          School Gallery
        </h2>
        <p className="text-center text-sm mb-8">See the glimpses of our school</p>

        {/* Category Filter Buttons */}
        <div className="flex gap-4 justify-center mb-10 text-sm font-semibold flex-wrap">
          <button
            className={`px-4 py-2 rounded-md ${
              selectedCategory === null ? "bg-[#85193C] text-white" : "bg-gray-200"
            }`}
            onClick={() => handleFilter(null)}
          >
            All
          </button>
          {["sports", "events", "cultural", "academics"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category ? "bg-[#85193C] text-white" : "bg-gray-200"
              }`}
              onClick={() => handleFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize first letter */}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredData.map((item, idx) =>
            item.images.map((image: string, imageIdx: number) => (
              <motion.div
                key={`${idx}-${imageIdx}`}
                className="relative rounded-lg shadow-md overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setPopupImage(image)}
              >
                <Image
                  src={image}
                  alt={`Gallery Image ${imageIdx}`}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                  placeholder="blur"
                  blurDataURL="/assets/sports/basketball.png"
                />
              </motion.div>
            ))
          )}
        </div>

        {/* Popup Modal for Viewing Image */}
        {popupImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setPopupImage(null)}
          >
            <div className="relative max-w-3xl w-full p-4">
              <Image
                src={popupImage}
                alt="Popup Image"
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl p-4"
                onClick={() => setPopupImage(null)}
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;