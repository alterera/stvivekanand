"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

interface EventPostProps {
  title: string;
  description: string;
  images: { asset: { url: string } }[];
}

const EventPost: React.FC<EventPostProps> = ({ title, description, images }) => {
  return (
    <div className="w-full mx-auto bg-white md:shadow-lg space-y-6">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-80 rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.asset.url}
              alt={`${title} photo ${index + 1}`}
              width={1000}
              height={640}
              fetchPriority={index === 0 ? "high" : "auto"}
              sizes="(max-width: 768px) 100vw, 75vw"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="text-gray-600 px-4 text-2xl font-semibold">{title}</h2>
      <p className="text-gray-600 px-4 pb-5 whitespace-pre-line">{description}</p>
    </div>
  );
};

export default EventPost;
