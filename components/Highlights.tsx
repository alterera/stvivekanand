'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Highlight {
  id: number
  text: string
}

const highlights: Highlight[][] = [
  [
    { id: 1, text: "State-of-the-art infrastructure with modern facilities" },
    { id: 2, text: "Experienced faculty dedicated to student success" },
    { id: 3, text: "Comprehensive curriculum focusing on holistic development" },
    { id: 4, text: "Strong emphasis on sports and activities" },
  ],
  [
    { id: 5, text: "Safe and nurturing learning environment" },
    { id: 6, text: "Regular workshops and seminars for development" },
    { id: 7, text: "Advanced computer labs and science facilities" },
    { id: 8, text: "Focus on character building and moral values" },
  ],
  [
    { id: 9, text: "Individual attention to each student" },
    { id: 10, text: "Regular parent-teacher interactions" },
    { id: 11, text: "Modern library with a vast collection of books" },
    { id: 12, text: "Emphasis on practical learning and experiments" },
  ]
]

const Highlights = () => {
  const [currentSet, setCurrentSet] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % highlights.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.section 
      className='relative w-full py-16 overflow-hidden bg-[#F1EEE9]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <div 
        className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('/assets/background/campus-bg.png')" }}
      />
      
      {/* Dark Overlay */}
      <div className='absolute inset-0 z-0 bg-[#F1EEE9]/90' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 md:px-0'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-20'>

          {/* Left Column */}
          <motion.div 
            className='flex-1 space-y-12'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className='text-3xl md:text-4xl font-bold text-[#002147] mb-4'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Elevating Education - A Commitment to Excellence
              </motion.h2>

              <motion.p 
                className='text-[#1D3557] font-semibold text-lg'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                At St. Vivekanand Sr. Sec. School, we prioritize exceptional teaching and learning experiences. 
                While we cherish every moment of joy, we understand that duty and obligations sometimes demand 
                our attention, leading us to navigate challenges with dedication and resolve.
              </motion.p>
            </div>

            {/* Highlight List Animation */}
            <motion.div 
              className='min-h-[250px] flex items-center'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentSet}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className='space-y-6'
                >
                  {highlights[currentSet].map((highlight) => (
                    <motion.div 
                      key={highlight.id}
                      className='text-xl font-medium text-[#1D3557]'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 * highlight.id }}
                      viewport={{ once: true }}
                    >
                      <span className='text-red-500'>✦ </span>{highlight.text}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Right Column - Director's Message */}
          <motion.div 
            className='flex-1 bg-[#002147] p-8 rounded-lg text-white shadow-xl'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='text-5xl text-[#E63946] mb-6'>&quot;</div>
            <blockquote className='text-2xl font-bold mb-8'>
              Our commitment is to nurture not just students, but future leaders who will 
              make a positive impact on society. We believe in providing an education that 
              goes beyond textbooks, focusing on character development and practical skills.
            </blockquote>
            <div className='flex items-end gap-4'>
              <div className='flex flex-col'>
                <Image 
                  src="/assets/signs/nipun-gupta.png" 
                  alt="Director's Signature" 
                  className='h-16 object-contain mb-2'
                  height={16} width={150}
                />
                <p className='font-semibold text-lg'>Nipun Gupta</p>
                <p className='text-gray-300'>Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Highlights
