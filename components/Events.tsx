'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

interface EventCard {
  id: number
  title: string
  imageUrl: string
}

const eventsContent: EventCard[] = [
  {
    id: 1,
    title: "Annual Sports Meet",
    imageUrl: "/assets/events/event-1.png"
  },
  {
    id: 2,
    title: "Science Exhibition",
    imageUrl: "/assets/events/event-2.png"
  },
  {
    id: 3,
    title: "Cultural Festival",
    imageUrl: "/assets/events/event-3.png"
  },
  {
    id: 4,
    title: "Independence Day",
    imageUrl: "/assets/events/event-1.png"
  },
  {
    id: 5,
    title: "Annual Function",
    imageUrl: "/assets/events/event-2.png"
  },
  {
    id: 6,
    title: "Teachers Day",
    imageUrl: "/assets/events/event-3.png"
  },
  {
    id: 7,
    title: "Art Exhibition",
    imageUrl: "/assets/events/event-1.png"
  },
  {
    id: 8,
    title: "Sports Tournament",
    imageUrl: "/assets/events/event-2.png"
  }
]

const Events = () => {
  return (
    <section className='w-full bg-white py-12'>
      <div className='max-w-7xl mx-auto px-4 md:px-0'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-16'>
           Events & Activities
        </h2>

        {/* Events Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12'>
          {eventsContent.map((event) => (
            <motion.div
              key={event.id}
              className='relative h-[200px] md:h-[300px] overflow-hidden group'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <Image
                src={event.imageUrl}
                alt={event.title}
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
                <h4 className='text-lg md:text-2xl font-bold text-white mb-3 
                  transform transition-transform duration-300 group-hover:translate-y-[-8px]'>
                  {event.title}
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

        {/* View All Button */}
        <div className='flex justify-center'>
          <Button 
            variant="destructive"
            className='text-white bg-[#E63946] hover:bg-[#E63946]/90 px-2 py-2 text-base'
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Events