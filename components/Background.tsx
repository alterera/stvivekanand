"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

export type Slide = { type: "video" | "image"; url: string; alt: string };

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), { ssr: false });

const Background = ({ slide, isFirst }: { slide: Slide; isFirst: boolean }) => {
  const posterUrl = `https://image.mux.com/${slide.url}/thumbnail.webp?time=0&width=1600`;

  return (
    <div className="absolute inset-0 w-full h-full">
      {slide.type === "video" ? (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={posterUrl}
            alt={slide.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <MuxPlayer
            playbackId={slide.url}
            poster={posterUrl}
            autoPlay="muted"
            loop
            muted
            playsInline
            preload="metadata"
            primaryColor="transparent"
            secondaryColor="transparent"
            streamType="on-demand"
            className="w-full h-full object-cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      ) : (
        <Image
          key={slide.url}
          src={slide.url}
          alt={slide.alt}
          fill
          preload={isFirst}
          sizes="100vw"
          className="object-cover animate-in fade-in duration-500"
        />
      )}

      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default Background;
