import React from 'react';
import image from '../assets/bremont.png'
import NavBar from './NavBar';

const Hero = () => {
  return (
    <div>
         <NavBar />
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex w-full h-full">
        {/* Left Side */}
        <div className="flex-1 bg-white flex items-center justify-center relative">
          <span className="absolute left-25 top-8 text-sm font-bold text-gray-600">Diesel</span>
          <div className="h-1 w-8 bg-black mx-2" />
          <span className="absolute left-30 bottom-20 text-sm font-bold text-gray-600">Tough</span>
          <span className="text-8xl font-bold text-gray-900 font-didot">BRE</span>
        </div>
        
        {/* Right Side */}
        <div className="flex-1 bg-black flex items-center justify-center relative">
          <span className="absolute right-25 top-10 text-sm font-bold text-gray-400">Watches</span>
          <span className="absolute right-30 bottom-20  font-bold text-sm text-gray-400">Modern</span>
          <span className="text-8xl font-bold text-white font-didot">ONT</span>
          <div className="h-1 w-8 bg-white mx-2" />
        </div>

        {/* Center Image and Letter */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="text-[400px] font-bold text-purple-600 font-didot  z-0">M</span>
          <img
            src={image}
            alt="Watch"
            className="absolute w-64 h-auto"
          />
        </div>

        {/* Button */}
        {/* <div className="absolute bottom-10 inset-x-0 flex justify-center z-20">
          <button className="bg-white py-2 px-4 rounded-md shadow-md text-purple-600 font-semibold">
            Explore More
          </button>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default Hero;