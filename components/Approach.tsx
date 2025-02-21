import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

interface ApproachCard {
  id: number
  title: string
  description: string
  imageUrl: string
}

const approachContent: ApproachCard[] = [
  {
    id: 1,
    title: "Academic Excellence",
    description: "Fostering well-rounded individuals through a comprehensive approach to education...",
    imageUrl: "/assets/approach/holistic.png"
  },
  {
    id: 2,
    title: "Transformative Education",
    description: "Empowering students to thrive in a rapidly evolving world, our enriching environment...",
    imageUrl: "/assets/approach/transform.png"
  },
  {
    id: 3,
    title: "Cultural Activities",
    description: "Rich cultural programs that help students explore and develop their artistic talents.",
    imageUrl: "/assets/approach/sports.png"
  },
  {
    id: 4,
    title: "Fitness & Wellbeing",
    description: "Promoting physical health and well-being, our programs offer diverse activities from badminton...",
    imageUrl: "/assets/approach/yoga.png"
  }
]

const Approach = () => {
  return (
    <section className='w-full bg-white py-16'>
      <div className='max-w-7xl mx-auto px-4 md:px-0'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-4'>
          Our Approach
        </h2>
        <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
          We follow a comprehensive approach to education that focuses on academic excellence,
          character development, and overall growth of our students.
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full'>
          {approachContent.map((card) => (
            <div 
              key={card.id} 
              className='flex flex-col bg-[#1D3557] shadow-md hover:shadow-xl 
                transition-shadow duration-300 h-[450px] w-full'
            >
              {/* Image Container */}
              <div className='relative w-full h-56 overflow-hidden'>
                <div className='relative h-full w-full transform transition-transform duration-500 hover:scale-110'>
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className='object-cover'
                  />
                </div>
              </div>
              
              {/* Content Container */}
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-lg font-semibold text-white mb-3'>
                  {card.title}
                </h3>
                <p className='text-gray-200 mb-6 flex-grow line-clamp-3'>
                  {card.description}
                </p>
                <Button 
                  variant="destructive"
                  className='w-full text-white hover:bg-white 
                    hover:text-[#1D3557] transition-colors duration-300'
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach