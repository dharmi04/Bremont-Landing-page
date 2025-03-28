import React from "react";
import { FaInstagram, FaEnvelope, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8">
            Stay Connected with Flare! 🌟
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            {/* SNC Instagram */}
            <motion.a
              href="https://www.instagram.com/social_n_cultural_committee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-white shadow-md rounded-full px-6 py-3 
              hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              whileHover={{ scale: 1.05 }}
            >
              <FaInstagram className="text-3xl text-[#E1306C] group-hover:text-[#C13584] transition-colors" />
              <span className="text-lg font-medium text-gray-800 group-hover:text-pink-600 transition-colors">
                @sncofficial
              </span>
            </motion.a>

            {/* Flare Instagram */}
            <motion.a
              href="https://www.instagram.com/flare_pdeu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-white shadow-md rounded-full px-6 py-3 
              hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              whileHover={{ scale: 1.05 }}
            >
              <FaInstagram className="text-3xl text-[#E1306C] group-hover:text-[#C13584] transition-colors" />
              <span className="text-lg font-medium text-gray-800 group-hover:text-pink-600 transition-colors">
                @flareofficial
              </span>
            </motion.a>
          </div>

          {/* Additional Contact Information */}
          {/* <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
              <FaEnvelope className="text-xl" />
              <a href="mailto:snc@pdeu.ac.in" className="text-sm md:text-base">
                snc@pdeu.ac.in
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
              <FaGlobe className="text-xl" />
              <a href="https://www.pdeu.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base">
                pdeu.ac.in
              </a>
            </div>
          </div> */}

          {/* Copyright */}
          <div className="mt-12 text-sm text-gray-500">
            © {new Date().getFullYear()} Flare - PDEU Social & Cultural Committee. All Rights Reserved.
          </div>
        </motion.div>
      </div>

      {/* Background Blurred Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-20 -translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3 z-0"></div>
    </footer>
  );
};

export default Footer;