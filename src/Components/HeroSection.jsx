import React, { useEffect, useRef } from "react";
import video from "../assets/video2.mp4"; // Import the video
import posterImage from "../assets/thumbnal.png"; // Optional: Thumbnail before video loads

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current
          .play()
          .catch((error) => console.error("Autoplay blocked:", error));
      }
    };

    playVideo();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={posterImage} // Fallback image for mobile devices
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h3 className="text-lg md:text-xl uppercase tracking-widest">
          Social and Cultural Committee presents
        </h3>
        <h1 className="text-6xl md:text-9xl font-bold mt-2 text-white drop-shadow-[3px_3px_0px_#2E3192] font-elegant">
          Flare'25
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-white font-elegant 
               bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 
               inline-block text-transparent bg-clip-text">
    SYMPHORA - CULTURES ACROSS SPHERE
</h1>

      </div>
    </div>
  );
};

export default HeroSection;
