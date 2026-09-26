"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "./ui/button";
import { BlogPost } from "@/types/index";

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });

const NewsSlider = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1.2}
      spaceBetween={10}
      pagination={{ clickable: true }}
      centeredSlides
    >
      {posts.map((post) => (
        <SwiperSlide key={post.slug.current}>
          <div className="bg-[#1D3557] overflow-hidden shadow-md rounded-sm">
            <div className="relative h-48 w-full">
              {post.featuredImage?.asset?.url && (
                <Image
                  src={post.featuredImage.asset.url}
                  alt={post.title}
                  fill
                  sizes="85vw"
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-200 font-semibold mb-2">{formatDate(post.publishedAt)}</p>
              <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
              <Button
                asChild
                variant="outline"
                className="w-full border-[#457B9D] text-[#457B9D] hover:bg-[#E63946] hover:text-white transition-all duration-300"
              >
                <Link href={`/news/${post.slug.current}`} aria-label={`Read more: ${post.title}`}>
                  Read More
                </Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsSlider;
