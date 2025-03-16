import Image from 'next/image';
import React from 'react';

interface BackgroundProps {
  mediaType: 'image' | 'video';
  mediaUrl: string;
}

const Background = ({ mediaType, mediaUrl }: BackgroundProps) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {mediaType === 'video' ? (
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={mediaUrl} type="video/mp4" />
        </video>
      ) : (
        <Image src={mediaUrl} alt="hero background" fill priority className="object-cover" />
      )}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default Background;
