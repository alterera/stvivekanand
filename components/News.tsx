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

interface NewsPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  slug: string;
}

const newsContent: NewsPost[] = [
  {
    id: 1,
    title: "25th Annual Athletic Meet, 2024 Closing Ceremony",
    excerpt:
      "Over five days of fierce competition, students from the four houses showcased their athletic prowess and sportsmanship...",
    imageUrl: "/assets/events/event-3.png",
    date: "March 15, 2024",
    slug: "athletic-meet-2024",
  },
  {
    id: 2,
    title: "Science Exhibition Showcases Student Innovation",
    excerpt:
      "Our young scientists demonstrated their creativity and understanding of scientific principles through innovative projects...",
    imageUrl: "/assets/events/event-3.png",
    date: "March 10, 2024",
    slug: "science-exhibition-2024",
  },
  {
    id: 3,
    title: "Cultural Festival Celebrates Diversity",
    excerpt:
      "The annual cultural festival brought together performances showcasing the rich cultural heritage of our student community...",
    imageUrl: "/assets/events/event-3.png",
    date: "March 5, 2024",
    slug: "cultural-festival-2024",
  },
  {
    id: 4,
    title: "Outstanding Board Exam Results",
    excerpt:
      "Our students have once again achieved exceptional results in the board examinations, maintaining our legacy of academic excellence...",
    imageUrl: "/assets/events/event-3.png",
    date: "March 1, 2024",
    slug: "board-results-2024",
  },
];

const News = () => {
  return (
    <motion.section
      className="w-full bg-[#457B9D] py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-0">
        {/* Title Section */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          News & Updates
        </motion.h2>

        {/* News Slider for Mobile */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            centeredSlides={true}
          >
            {newsContent.map((post) => (
              <SwiperSlide key={post.id}>
                <div
                  key={post.id}
                  className="bg-[#1D3557] overflow-hidden shadow-md rounded-lg"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#457B9D] font-semibold mb-2">
                      {post.date}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link href={`/news/${post.slug}`}>
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
          {newsContent.map((post) => (
            <div
              key={post.id}
              className="bg-[#002147] overflow-hidden shadow-md rounded-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#457B9D] font-semibold mb-2">
                  {post.date}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link href={`/news/${post.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full border-[#457B9D] text-[#457B9D] hover:bg-[#E63946] hover:text-white transition-all duration-300"
                  >
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
              className="text-white bg-[#E63946] hover:bg-[#E63946]/90 px-8 py-4 text-lg"
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
