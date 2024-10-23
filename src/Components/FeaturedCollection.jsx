import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import image1 from '../assets/bermontdis1.png'; // Replace with actual image path
import image2 from '../assets/bermontdis2.png'; // Replace with actual image path
import image3 from '../assets/bermontdis4.png'; // Replace with actual image path

const FeaturedCollection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Fade in and slide up
      exit={{ opacity: 0, y: 50 }} // Fade out when leaving the view
      transition={{ duration: 0.5 }} // Animation duration
      className="bg-[#0D0D0D] py-20"
    >
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-center text-4xl font-bold text-white mb-12 font-didot">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1C1C1C] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <img src={image1} alt="Bremont Watch 1" className="w-full h-auto rounded-t-lg mb-6" />
            <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">The Rebrand Bremont</h3>
            <p className="text-gray-400 mb-4 font-montserrat">Elegant design meets modern craftsmanship.</p>
            <a href="/details1" className="text-gold hover:text-white transition duration-300">
              View Details
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1C1C1C] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <img src={image2} alt="Bremont Watch 2" className="w-full h-auto rounded-t-lg mb-6" />
            <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">Bremont Wright Flyer</h3>
            <p className="text-gray-400 mb-4 font-montserrat">Precision and style for the modern gentleman.</p>
            <a href="/details2" className="text-gold hover:text-white transition duration-300">
              View Details
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1C1C1C] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <img src={image3} alt="Bremont Watch 3" className="w-full h-auto rounded-t-lg mb-6" />
            <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">Bremont U2 Squadron</h3>
            <p className="text-gray-400 mb-4 font-montserrat">A classic timepiece for every occasion.</p>
            <a href="/details3" className="text-gold hover:text-white transition duration-300">
              View Details
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedCollection;
