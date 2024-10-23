import React from 'react';
import { motion } from 'framer-motion';
import watch from '../assets/Bremont-watch.jpg';

const FeaturedWatch = () => {
  return (
    <section className="flex h-screen">
      {/* Left Section - Watch Details */}
      <motion.div
        className="w-1/2 bg-white flex flex-col justify-center items-start p-16"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 1 }}
      >
        <h1 className="text-6xl font-bold font-didot">
          BRE<span className="text-purple-500">MONT</span>
        </h1>
        <p className="mt-4 text-lg text-gray-900 font-montserrat">
          Tough yet elegant, the Bremont watch stands the test of time. With automatic movement and a sleek design, it is the perfect companion for modern adventurers.
        </p>
        <ul className="mt-6 space-y-2 text-gray-900 font-montserrat">
          <li>✔ Water Resistant</li>
          <li>✔ Automatic Movement</li>
          <li>✔ 5-Year Warranty</li>
        </ul>
      </motion.div>

      {/* Right Section - Watch Image */}
      <div className="w-1/2 bg-black flex justify-center items-center relative">
        <motion.img
          src={watch} 
          alt="Bremont Watch"
          className="h-96 w-auto"
          whileHover={{ rotate: 10 }}
        />
      </div>
    </section>
  );
};

export default FeaturedWatch;
