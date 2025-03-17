import React from "react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full  py-8 text-center shadow-lg">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
        🌍 Follow Us & Stay Updated! 🎭
      </h3>

      <div className="flex justify-center mt-4 space-x-8">
        {/* SNC Instagram */}
        <motion.a
          href="https://www.instagram.com/social_n_cultural_committee?igsh=ejlocHV2MnM2OXh5"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-[#E1306C] hover:text-[#C13584] transition-all duration-300 text-lg md:text-xl font-medium"
          whileHover={{ scale: 1.1 }}
        >
          <FaInstagram className="text-3xl md:text-4xl" />
          <span>@sncofficial</span>
        </motion.a>

        {/* Flare Instagram */}
        <motion.a
          href="https://www.instagram.com/flare_pdeu?igsh=aWN1b3kxMWc3OXV3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-[#E1306C] hover:text-[#C13584] transition-all duration-300 text-lg md:text-xl font-medium"
          whileHover={{ scale: 1.1 }}
        >
          <FaInstagram className="text-3xl md:text-4xl" />
          <span>@flareofficial</span>
        </motion.a>
      </div>

      {/* <p className="mt-6 text-gray-700 text-sm">
        © {new Date().getFullYear()} Symphora | All Rights Reserved.
      </p> */}
    </footer>
  );
};

export default Footer;
