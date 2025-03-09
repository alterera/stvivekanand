"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

interface SwiperComponentProps {
  images: string[];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ images }) => {
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
            <Image src={img} alt={`Slide ${idx}`} width={500} height={300} className="w-full"/>
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
