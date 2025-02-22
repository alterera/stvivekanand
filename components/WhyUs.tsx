'use client'

import React from 'react'
import { BiWorld, BiBookReader, BiBuildings } from 'react-icons/bi'
import { FaChalkboardTeacher, FaWifi, FaTrophy } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { MdSupportAgent, MdSportsGymnastics } from 'react-icons/md'

interface WhyUsCard {
  id: number
  icon: React.ElementType
  title: string
  description: string
}

const whyUsContent: WhyUsCard[] = [
  {
    id: 1,
    icon: BiBuildings,
    title: "6-acre campus",
    description: "Bikaner in tranquil and verdant environs."
  },
  {
    id: 2,
    icon: BiWorld,
    title: "Outstanding Academics",
    description: "Record-Breaking Results."
  },
  {
    id: 3,
    icon: BiBookReader,
    title: "Innovative Learning",
    description: "Experiential Learning Practices."
  },
  {
    id: 4,
    icon: BsPeopleFill,
    title: "Comfortable Boarding",
    description: "Spacious Home-like Boarding Houses."
  },
  {
    id: 5,
    icon: FaChalkboardTeacher,
    title: "Respected Faculty",
    description: "The Faculty of St. Vivekanand School is highly respected."
  },
  {
    id: 6,
    icon: MdSupportAgent,
    title: "Friendly Management",
    description: "Extremely Friendly and Approachable Management."
  },
  {
    id: 7,
    icon: FaWifi,
    title: "Smart Campus",
    description: "Wi-Fi, Smart Classrooms, Camera Monitored and Secure Campus."
  },
  {
    id: 8,
    icon: MdSportsGymnastics,
    title: "Career Guidance",
    description: "Dedicated career Information and Guidance Department."
  },
  {
    id: 9,
    icon: FaTrophy,
    title: "Olympic Sports",
    description: "10+ Olympic Sports including Gymnastics, Skating etc."
  }
]

const WhyUs = () => {
  return (
    <section className='w-full bg-[#002147] py-16'>
      <div className='max-w-7xl mx-auto px-4 md:px-0'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-white mb-12'>
          Why St. Vivekanand School?
        </h2>
        
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
          {whyUsContent.map((card) => {
            const Icon = card.icon
            return (
              <div 
                key={card.id}
                className='bg-white px-4 p-2 
                  hover:bg-[#457B9D] transition-all duration-300 group'
              >
                <Icon className="text-4xl md:text-5xl text-[#1D3557] mb-4 
                  group-hover:text-white transition-colors duration-300" />
                <h3 className='text-lg md:text-xl font-semibold text-[#1D3557] mb-2 
                  group-hover:text-white transition-colors duration-300'>
                  {card.title}
                </h3>
                <p className='text-sm md:text-base text-[#1D3557] 
                  group-hover:text-white transition-colors duration-300'>
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs