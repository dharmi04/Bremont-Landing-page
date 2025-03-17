import React from "react";
import video from "../assets/video2.mp4"; // Import the video

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full object-cover h-full"
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
        <h2 className="text-3xl md:text-5xl mt-4 uppercase font-Montserrat font-bold text-[#FFC857] ">
          Symphora: <span className="text-yellow-300 font-semibold">CULTURES ACROSS SPHERE</span>
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
