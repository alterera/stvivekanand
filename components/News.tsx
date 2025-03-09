"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useSWR from "swr";
import { sanityClient } from "@/lib/sanity";
import { BlogPost } from "@/types/index";

// SWR fetcher function
const fetcher = (query: string) => sanityClient.fetch(query);

const News = () => {
  // Fetch the latest 4 blog posts
  const { data: blogPosts, isLoading } = useSWR<BlogPost[]>(
    `*[_type == "blog"] | order(publishedAt desc) [0...4] {
      title,
      slug,
      excerpt,
      featuredImage {
        asset-> {
          url
        }
      },
      publishedAt
    }`,
    fetcher
  );

  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <div className="bg-[#0D3658] overflow-hidden shadow-md rounded-sm animate-pulse">
      <div className="relative h-48 w-full bg-gray-700"></div>
      <div className="p-6">
        <div className="h-4 bg-gray-700 rounded mb-2 w-1/2"></div>
        <div className="h-6 bg-gray-700 rounded mb-3 w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded mb-4 w-full"></div>
        <div className="h-10 bg-gray-700 rounded"></div>
      </div>
    </div>
  );

  return (
    <motion.section
      className="relative w-full bg-[#457B9D] pt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        backgroundImage: `url('/assets/background/stvivek.png')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        src={"/assets/patterns/line-circle-half.png"}
        alt="pattern"
        height={100}
        width={180}
        className="hidden md:flex absolute bottom-5 right-10"
      />
      <div className="max-w-7xl mx-auto px-8 md:px-0 z-10">
        {/* Title Section */}
        <motion.h2
          className="relative text-3xl md:text-4xl font-bold text-center text-white mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          News & Updates
        </motion.h2>
        <motion.p
          className="text-center text-white mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          The largest gamut of in-house sports facilities for any school, right in
          the city centre.
        </motion.p>

        {/* News Slider for Mobile */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.2}
            spaceBetween={10}
            pagination={{ clickable: true }}
            centeredSlides={true}
          >
            {isLoading
              ? [1, 2, 3, 4].map((i) => (
                  <SwiperSlide key={i}>
                    <SkeletonLoader />
                  </SwiperSlide>
                ))
              : blogPosts?.map((post) => (
                  <SwiperSlide key={post.slug.current}>
                    <div className="bg-[#1D3557] overflow-hidden shadow-md rounded-sm">
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.featuredImage.asset.url}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-[#457B9D] font-semibold mb-2">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </p>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <Link href={`/news/${post.slug.current}`}>
                          <Button
                            variant="outline"
                            className="w-full border-[#457B9D] text-[#457B9D] hover:bg-[#E63946] hover:text-white transition-all duration-300"
                          >
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>

        {/* News Grid for Larger Screens */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {isLoading
            ? [1, 2, 3, 4].map((i) => <SkeletonLoader key={i} />)
            : blogPosts?.map((post) => (
                <div
                  key={post.slug.current}
                  className="bg-[#0D3658] overflow-hidden shadow-md rounded-sm"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.featuredImage.asset.url}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gray-200 font-medium mb-2">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link href={`/news/${post.slug.current}`}>
                      <Button className="w-full text-white font-medium bg-[#85193C] hover:bg-white hover:text-[#0D3658] transition-all duration-300">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
        </div>

        {/* View All News Button */}
        <motion.div
          className="flex justify-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/news">
            <Button
              variant="destructive"
              className="text-white bg-[#85193C] hover:bg-[#E63946]/90 px-8 py-4 text-lg mb-10"
            >
              View All News
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default News;