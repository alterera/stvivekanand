'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

interface NewsPost {
  id: number
  title: string
  excerpt: string
  imageUrl: string
  date: string
  slug: string
}

const newsContent: NewsPost[] = [
  {
    id: 1,
    title: "25th Annual Athletic Meet, 2024 Closing Ceremony",
    excerpt: "Over five days of fierce competition, students from the four houses showcased their athletic prowess and sportsmanship...",
    imageUrl: "/assets/events/event-3.png",
    date: "March 15, 2024",
    slug: "athletic-meet-2024"
  },
  {
    id: 2,
    title: "Science Exhibition Showcases Student Innovation",
    excerpt: "Our young scientists demonstrated their creativity and understanding of scientific principles through innovative projects...",
    imageUrl: "/assets/events/event-3.png",
    date: "March 10, 2024",
    slug: "science-exhibition-2024"
  },
  {
    id: 3,
    title: "Cultural Festival Celebrates Diversity",
    excerpt: "The annual cultural festival brought together performances showcasing the rich cultural heritage of our student community...",
    imageUrl: "/assets/events/event-3.png",
    date: "March 5, 2024",
    slug: "cultural-festival-2024"
  },
  {
    id: 4,
    title: "Outstanding Board Exam Results",
    excerpt: "Our students have once again achieved exceptional results in the board examinations, maintaining our legacy of academic excellence...",
    imageUrl:"/assets/events/event-3.png",
    date: "March 1, 2024",
    slug: "board-results-2024"
  }
]

const News = () => {
  return (
    <section className='w-full bg-[#457B9D] py-6'>
      <div className='max-w-7xl mx-auto px-8 md:px-0'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-white mb-16'>
          News & Updates
        </h2>

        {/* News Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {newsContent.map((post) => (
            <motion.div
              key={post.id}
              className='bg-[#1D3557] overflow-hidden group'
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Container */}
              <div className='relative h-48 w-full overflow-hidden'>
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                <p className='text-sm text-[#457B9D] font-semibold mb-2'>
                  {post.date}
                </p>
                <h3 className='text-xl font-bold text-white mb-3 line-clamp-2 
                  group-hover:text-[#457B9D] transition-colors duration-300'>
                  {post.title}
                </h3>
                <p className='text-gray-300 mb-4 line-clamp-2'>
                  {post.excerpt}
                </p>
                <Link href={`/news/${post.slug}`}>
                  <Button 
                    variant="outline"
                    className='w-full border-[#457B9D] text-[#457B9D] 
                      hover:bg-[#E63946] hover:text-white transition-all duration-300'
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All News Button */}
        <div className='flex justify-center'>
          <Link href="/news">
            <Button 
              variant="destructive"
              className='text-white bg-[#E63946] hover:bg-[#E63946]/90 px-8 py-6 text-lg'
            >
              View All News
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default News