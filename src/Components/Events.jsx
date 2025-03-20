import React from "react";
import { motion } from "framer-motion";
import eventsData from "./flare_events.json";

const Events = () => {
    return (
        <div className="w-3/4 mx-auto py-10" id="events">

            <div className="absolute top-0 left-0 w-40 h-40 bg-pink-500 opacity-30 rounded-full blur-3xl z-8"></div>
            <div className="absolute top-[1500px] right-10 w-56 h-56 bg-purple-500 opacity-40 rounded-full blur-3xl z-8"></div>
            <div className="absolute top-[2000px] left-10  w-48 h-48 bg-blue-500 opacity-30 rounded-full blur-3xl z-8"></div>

            <h2 className="text-center text-4xl font-bold mb-6">
                <span className="text-pink-500 font-bebas">Upcoming Event</span>
            </h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 font-[Poppins] ">
                {eventsData.map((event, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden p-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={event.Image} alt={event["Event Name"]} className="w-full h-40 object-cover rounded-md " />
                        <div className="p-4">
                            <h3 className="md:text-[18px] font-semibold">{event["Event Name"]}</h3>
                            <p className="text-gray-600 md:text-[14px]">
                                Organized By <span className="text-pink-500">{event["Club Name"]}</span>
                            </p>
                            <p className="text-gray-500">📅 {event.Date}</p>
                            {event["Registration Link"] ? (
                                <a href={event["Registration Link"]} target="_blank" rel="noopener noreferrer"
                                    className="mt-3 inline-block px-2 py-2 text-blue-600 text-sm font-medium 
                                    border border-blue-600 rounded-[4px] shadow-md transition-all 
                                    duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg">
                                    Register Now
                                </a>
                            ) : (
                                <span className="text-gray-400 text-sm">Registration not available</span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="text-center mt-6">
                <button className="px-4 py-2 text-blue-600 text-sm font-medium 
                   border-[1.5px] border-blue-600 rounded-[4px] shadow-md transition-all 
                   duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg">See More Event →</button>
            </div>
            <div className="absolute top-[3000px] left-0 w-48 h-48 bg-orange-400 rounded-full blur-3xl opacity-50 z-8"></div>
            <div className="absolute top-[4000px] md:top-[3200px] right-0 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-50 z-8"></div>

            <div className="absolute md:hidden top-[5000px] left-0 w-48 h-48 bg-orange-400 rounded-full blur-3xl opacity-50 z-8"></div>
            <div className="absolute md:hidden top-[6000px] md:top-[3200px] right-0 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-50 z-8"></div>

            <div className="absolute md:hidden top-[7000px] left-0 w-48 h-48 bg-orange-400 rounded-full blur-3xl opacity-50 z-8"></div>
            <div className="absolute md:hidden top-[8000px] md:top-[3200px] right-0 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-50 z-8"></div>
        </div>
    );
};

export default Events;
