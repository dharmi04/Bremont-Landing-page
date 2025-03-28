// Slider.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/Lokdayro.jpg'

const images = [image1 /* Add more image URLs as needed */];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Change image every 5 seconds (adjust the duration as needed)
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="slider-container relative overflow-hidden w-full md:h-[400px] lg:h-[600px] h-[180px] flex">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image max-w-full max-h-full"
        />
      </motion.div>
    </div>
  );
};

export default Slider;