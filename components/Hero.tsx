import React from 'react'
// import Link from 'next/link'
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className='w-full'>
        <div 
          className='min-h-[600px] lg:min-h-[800px] relative bg-cover bg-center bg-no-repeat flex items-center'
          style={{backgroundImage: "url('/assets/background/hero-bg.png')"}}
        >
          {/* Dark overlay */}
          <div className='absolute inset-0 bg-black/40'></div>
          
          {/* Content Container */}
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <div className='flex flex-col items-start lg:items-center text-white max-w-3xl lg:mx-auto mx-0'>
              <span className='text-lg md:text-xl font-semibold mb-2 text-gray-200'>
                WELCOME TO
              </span>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:text-center text-left'>
                ST. VIVEKANAND SCHOOL
              </h1>
              <p className='text-base md:text-lg lg:text-xl mb-8 lg:text-center text-left text-white'>
                Our school provides a nurturing environment where students can excel academically, 
                develop personally, and prepare for a successful future. With dedicated teachers 
                and state-of-the-art facilities, we ensure quality education for all.
              </p>
              <Button variant="destructive" className='text-white bg-[#1D3557] font-semibold shadow-lg'>Apply Now</Button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero