import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/sideview.jpg'; // Replace with your watch side view image path

const ProductSpecifications = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      {/* Left Section - Watch Specifications */}
      <motion.div
        className="w-full md:w-1/2 bg-white p-16 flex flex-col justify-center"
        initial={{ opacity: 0, x: -50 }} // Start off-screen to the left
        animate={{ opacity: 1, x: 0 }} // Animate to full opacity and position
        transition={{ duration: 0.8 }} // Animation duration
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6 font-didot">
          Watch Specifications
        </h2>
        <ul className="space-y-4 text-lg text-gray-900 font-montserrat">
          <motion.li
            initial={{ opacity: 0, y: 20 }} // Start slightly below
            animate={{ opacity: 1, y: 0 }} // Animate to full visibility
            transition={{ duration: 0.5, delay: 0.2 }} // Delay for a staggered effect
          >
            <span className="font-semibold">Case Material:</span> Stainless Steel
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="font-semibold">Dial Color:</span> Black
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="font-semibold">Strap:</span> Leather
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="font-semibold">Water Resistance:</span> 100 meters
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <span className="font-semibold">Movement:</span> Automatic
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <span className="font-semibold">Glass:</span> Sapphire Crystal
          </motion.li>
        </ul>
        {/* <motion.button
          className="mt-8 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-900 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button> */}
      </motion.div>

      {/* Right Section - Image with Background Animation */}
      <motion.div
        className="w-full md:w-1/2 bg-black flex justify-center items-center relative"
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 0.8, delay: 0.5 }} // Delay to sync with left side animation
      >
        <motion.img
          src={image} // Replace with your watch side view image path
          alt="Side View of Watch"
          className="h-80 w-auto"
          initial={{ scale: 0.9 }} // Start slightly scaled down
          animate={{ scale: 1 }} // Scale to full size
          transition={{ duration: 0.8 }} // Animation duration
        />
        {/* <motion.div
          className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1.2 }}
          transition={{ duration: 1.5, loop: Infinity, repeatDelay: 1 }}
        /> */}
      </motion.div>
    </section>
  );
};

export default ProductSpecifications;
