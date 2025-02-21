'use client'

import React from 'react'
import { FaTrophy } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface RankingCard {
  id: number
  rank: string
  location: string
  description: string
}

const rankingContent: RankingCard[] = [
  {
    id: 1,
    rank: "#1",
    location: "IN INDIA",
    description: "Career Counselling Leaders"
  },
  {
    id: 2,
    rank: "#1",
    location: "IN BIKANER",
    description: "Day-Cum-Boarding-School"
  },
  {
    id: 3,
    rank: "#1",
    location: "IN BIKANER",
    description: "Top Co-Education Day-Cum-Boarding-School"
  },
  {
    id: 4,
    rank: "#1",
    location: "IN INDIA",
    description: "Academic Reputation"
  }
]

const Rankings = () => {
  return (
    <section className='w-full bg-[#1D3557] py-16'>
      <div className='max-w-7xl mx-auto px-4 md:px-0'>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>
          {/* Title Section */}
          <div className='md:w-[300px] flex flex-col items-center text-center md:text-left'>
            <FaTrophy className='text-6xl md:text-7xl text-white mb-4' />
            <h2 className='text-3xl md:text-4xl font-bold text-white'>
              Our Rankings
            </h2>
          </div>

          {/* Rankings Grid */}
          <div className='flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
            {rankingContent.map((rank) => (
              <motion.div
                key={rank.id}
                className='bg-white p-6 flex flex-col items-center text-center 
                  group hover:bg-[#457B9D] transition-all duration-300'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className='text-4xl md:text-5xl font-bold text-[#457B9D] mb-2 
                  group-hover:text-white transition-colors duration-300'>
                  {rank.rank}
                </h3>
                <p className='text-lg md:text-xl font-semibold text-[#1D3557] mb-2
                  group-hover:text-white transition-colors duration-300'>
                  {rank.location}
                </p>
                <p className='text-sm md:text-base text-gray-600
                  group-hover:text-white/90 transition-colors duration-300'>
                  {rank.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rankings