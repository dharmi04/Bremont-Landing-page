import React, { useEffect, useRef } from "react"; 
import video from "../assets/video2.mp4"; 
import posterImage from "../assets/thumbnal.png"; 
 
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
        poster={posterImage} 
        className="absolute top-0 left-0 w-full h-full object-cover" 
      > 
        <source src={video} type="video/mp4" /> 
        Your browser does not support the video tag. 
      </video> 
 
      {/* Gradient Overlay */} 
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div> 
 
      {/* Text Content */} 
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 space-y-4 select-none"> 
        <h3 className="text-lg md:text-xl uppercase tracking-widest opacity-80 animate-pulse"> 
          Social and Cultural Committee presents 
        </h3>
        
        <div className="relative group">
          <h1 className="text-6xl md:text-9xl font-bold text-white drop-shadow-[3px_3px_0px_#2E3192] font-elegant 
                         transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[5px_5px_0px_#2E3192]"> 
            Flare'25 
          </h1>
          <div className="absolute inset-0 bg-blue-500/30 blur-xl -z-10 group-hover:bg-blue-500/50 transition-all duration-300"></div>
        </div>
 
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 
                       bg-clip-text animate-gradient-x font-elegant 
                       transform transition-all duration-500 hover:scale-105 hover:tracking-wider"> 
          SYMPHORA - CULTURES ACROSS SPHERE 
        </h1>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-6 h-6 border-l-4 border-t-4 border-white/50 opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-6 h-6 border-r-4 border-b-4 border-white/50 opacity-50"></div>
      </div>
    </div> 
  ); 
}; 
 
export default HeroSection;