"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type Props = {
  images: { src: string; alt: string }[];
};

export function SportsHeroCarousel({ images }: Props) {
  if (images.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-[#0D3658]/10">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={images.length > 1}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-[240px] sm:h-[320px] md:h-[420px] w-full [&_.swiper-pagination-bullet-active]:bg-[#85193C]"
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={image.src === images[0].src}
                sizes="(max-width: 1280px) 100vw, 1152px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3658]/70 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
