import Image from 'next/image'
import React from 'react'

interface BackgroundProps {
  playStatus: boolean;
  heroCount: number;
}

const Background = ({ playStatus, heroCount }: BackgroundProps) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {playStatus ? (
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="/assets/videos/hero.mp4"  // Add your video path here
        />
      ) : (
        <Image 
          src={
            heroCount === 0
              ? '/assets/background/bg-3.jpeg'
              : heroCount === 1
              ? '/assets/background/bg-2.jpeg'
              : '/assets/background/campus-bg.png'
          }
          alt="hero background"
          fill
          priority
          className="object-cover"
        />
      )}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}

export default Background