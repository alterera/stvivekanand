"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

interface SwiperComponentProps {
  images: string[];
  label?: string;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ images, label = "Photo" }) => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={img}
              alt={`${label} ${idx + 1}`}
              width={800}
              height={480}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10"></div>
      <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10"></div>
    </div>
  );
};

export default SwiperComponent;
