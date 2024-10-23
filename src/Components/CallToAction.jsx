import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/bremontlandscape.png'; // Assuming the image is in your assets folder

const CallToAction = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20 text-white opacity-93"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="container mx-auto px-4 text-center  py-12 rounded-lg">
        <h2 className="text-4xl font-bold mb-6 font-didot">Ready to Experience Luxury?</h2>
        <p className="text-lg mb-8 font-montserrat">
          Explore our collection of premium watches and find the one that matches your style. Make a statement with every moment.
        </p>
        <motion.a
          href="/shop"
          className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          Shop Now
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;
