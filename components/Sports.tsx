'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

interface SportCard {
  id: number
  title: string
  imageUrl: string
}

const sportsContent: SportCard[] = [
  {
    id: 1,
    title: "Basketball",
    imageUrl: "/assets/sports/basketball.png"
  },
  {
    id: 2,
    title: "Table Tennis",
    imageUrl: "/assets/sports/tennis.png"
  },
  {
    id: 3,
    title: "Football",
    imageUrl: "/assets/sports/football.png"
  },
  {
    id: 4,
    title: "Cricket",
    imageUrl: "/assets/sports/cric.png"
  }
]

const Sports = () => {
  return (
    <section className='w-full bg-white py-16'>
      <div className='max-w-7xl mx-auto px-4 md:px-0'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-16'>
          Sports Excellence
        </h2>

        {/* Hero Section */}
        <div className='flex flex-col lg:flex-row gap-8 mb-5'>
          {/* Image Container */}
          <div className='lg:w-[60%] relative h-[300px] md:h-[00px] lg:h-[500px] overflow-hidden'>
            <Image
              src="/assets/sports/cricket.png"
              alt="Sports at St. Vivekanand"
              fill
              className='object-cover'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            />
          </div>

          {/* Content Container */}
          <div className='lg:w-[40%] flex flex-col'>
            <h3 className='text-2xl md:text-3xl font-bold text-[#1D3557] mb-4'>
              Welcome to St. Vivekanand&quot;s sports
            </h3>
            <p className='text-gray-600 mb-6'>
              Welcome to St. Vivekanand&quot;s sports, the physical education department of our school. 
              We believe that sports is not just a thing, but a way of life that teaches discipline, 
              perseverance, and teamwork. At St. Vivekanand School, we offer a comprehensive and 
              integrated growth program that is designed to provide a well-characterized and moving 
              roadmap for our students.
            </p>
            <Button 
              variant="destructive"
              className='w-fit text-white bg-[#E63946] hover:bg-[#E63946]/90'
            >
              Read More
            </Button>
          </div>
        </div>

        {/* Sports Cards Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
          {sportsContent.map((sport) => (
            <motion.div
              key={sport.id}
              className='relative h-[200px] md:h-[300px] overflow-hidden group'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <Image
                src={sport.imageUrl}
                alt={sport.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              
              {/* Overlay */}
              <div className='absolute inset-0 bg-black/40 transition-opacity duration-300 
                group-hover:bg-black/60'
              />

              {/* Content */}
              <div className='absolute inset-0 p-4 flex flex-col justify-end'>
                <h4 className='text-xl md:text-2xl font-bold text-white mb-3 
                  transform transition-transform duration-300 group-hover:translate-y-[-8px]'>
                  {sport.title}
                </h4>
                <Button 
                  variant="outline"
                  className='w-fit bg-transparent text-white border-white hover:bg-white hover:text-[#1D3557]'
                >
                  Read More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sports