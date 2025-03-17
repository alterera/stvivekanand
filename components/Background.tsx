"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Background = ({ mediaType, mediaUrl }: { mediaType: "video" | "image"; mediaUrl: string }) => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {mediaType === "video" ? (
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          {/* Use `.mp4` if Safari is detected */}
          {isSafari ? (
            <source src={'/assets/background/hero-fallback.mp4'} type="video/mp4" />
          ) : (
            <>
              <source src={mediaUrl} type="video/webm" />
            </>
          )}
        </video>
      ) : (
        <Image src={mediaUrl} alt="Background" height={300} width={800} className="w-full h-full object-cover" />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default Background;
