"use client";

import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";
import { motion } from "framer-motion";

const Background = ({ mediaType, mediaUrl }: { mediaType: "video" | "image"; mediaUrl: string }) => {
  // Strip .m3u8 extension if present for Mux playback ID
  const playbackId = mediaUrl.replace(/\.m3u8$/, "");
  const posterUrl = `https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`;
  
  return (
    <div className="absolute inset-0 w-full h-full">
      {mediaType === "video" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <MuxPlayer
            playbackId={playbackId}
            poster={posterUrl}
            autoPlay="any"
            loop
            muted
            playsInline
            preload="auto"
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
              left: 0
            }}
          />
        </motion.div>
      ) : (
        <Image src={mediaUrl} alt="Background" height={300} width={800} className="w-full h-full object-cover" />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default Background;
