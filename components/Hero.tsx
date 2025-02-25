import React, { useState, useEffect } from 'react'
import Background from './Background';
import { Button } from './ui/button';

const heroData = [
  {
    title: "Welcome to St. Vivekanand School",
    description: "Nurturing minds, Building futures",
    buttonText: "Apply Now",
    url: "#"
  },
  {
    title: "Excellence in Education",
    description: "Providing quality education since 1995",
    buttonText: "Learn More",
    url: "#"
  },
  {
    title: "Discover Your Potential",
    description: "State-of-the-art facilities and expert faculty",
    buttonText: "Explore",
    url: "#"
  }
];

const Hero = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] lg:h-[700px]">
      <Background playStatus={playStatus} heroCount={heroCount} />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-start lg:items-center text-white max-w-3xl lg:mx-auto mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:text-center text-left">
              {heroData[heroCount].title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 lg:text-center text-left">
              {heroData[heroCount].description}
            </p>
            <Button 
              variant="destructive" 
              className="text-white bg-[#002147] font-semibold shadow-lg"
            >
              {heroData[heroCount].buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;