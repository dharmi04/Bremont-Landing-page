import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FunFlare = () => {
  // Countdown Logic
  const eventDate = new Date("March 19, 2025 14:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference < 0) {
        setTimeLeft("🔥 IT'S HAPPENING NOW! 🔥");
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft(`${days} Days | ${hours} Hrs | ${minutes} Min`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center py-16 px-6">
      {/* Event Title */}
      <motion.h2
        className="text-2xl md:text-2xl font-bold text-black drop-shadow-lg font-Montserrat"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        🎭 BIGGEST EVENT ALERT!
      </motion.h2>


      <motion.h2
        className="text-6xl md:text-9xl font-bold mt-2 text-[#2E3192] drop-shadow-[3px_3px_0px_#6a6ff6] font-elegant"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        
      >
    FUN FLARE
      </motion.h2>
      <h2 className="text-lg md:text-xl uppercase tracking-widest">THEME LAUNCH</h2>

      {/* Countdown Timer */}
      <motion.div
        className="text-3xl md:text-5xl font-semibold text-[#2E3192] my-4 drop-shadow-xl"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {timeLeft}
      </motion.div>

      {/* Event Details */}
      <motion.p
        className="text-lg md:text-2xl font-medium text-gray-800 mt-2 max-w-2xl leading-relaxed font-elegant "
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        🔥 The <b>most awaited</b> event is happening on <b className="text-[#2E3192]">March 19</b>!  
        🌟 Get ready for <b>unforgettable performances and electrifying energy</b>!
      </motion.p>

      {/* CTA Button */}
      <motion.button
        className="mt-6  text-black text-lg md:text-xl px-6 py-3 rounded-full  transition-all duration-300"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
       Grab your seat in Auditorium at 2 p.m
      </motion.button>
    </div>
  );
};

export default FunFlare;
