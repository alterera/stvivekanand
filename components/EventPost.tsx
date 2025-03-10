"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

interface EventPostProps {
  description: string;
  images: { asset: { url: string } }[];
}

const EventPost: React.FC<EventPostProps> = ({
  description,
  images
}) => {
  return (
    <div className="w-full mx-auto px-4 bg-white md:shadow-lg space-y-6">
      {/* Swiper Slider */}
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
              alt={`Image ${index + 1}`}
              height={100}
              width={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="text-gray-600 pb-4">{description}</p>
    </div>
  );
};

export default EventPost;
