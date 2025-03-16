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
          src="/assets/videos/hero.mp4" 
        />
      ) : (
        <Image 
          src={
            heroCount === 0
              ? '/assets/background/campus-main.webp'
              : heroCount === 1
              ? '/assets/background/staff.webp'
              : '/assets/background/young.webp'
          }
          alt="hero background"
          fill
          priority
          className="object-cover"
        />
      )}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}

export default Background