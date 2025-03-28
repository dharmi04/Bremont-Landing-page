import React from "react";
import { motion } from "framer-motion";
import eventsData from '../data/flare_events.json';

const Events = () => {
    return (
        <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4" id="events">
            {/* Background Blurred Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-20 -translate-x-1/3 -translate-y-1/3 z-0"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3 z-0"></div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-5xl font-bold mb-12 text-gray-900">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                        CLUBS
                    </span>
                </h2>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    {eventsData.map((event, index) => (
                        <motion.div
                            key={index}
                            className="bg-white group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative overflow-hidden">
                                <img 
                                    src={event.Image || "https://via.placeholder.com/400x250?text=Event+Image"} 
                                    alt={event["Club Name"]} 
                                    className="w-full h-80 p-4 transition-transform duration-300 group-hover:scale-110" 
                                />
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                                    {event["Club Name"]}
                                </h3>

                                {event["Registration Link"] ? (
                                    <a 
                                        href={event["Registration Link"]} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-full block text-center px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white 
                                        rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 
                                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                    >
                                        Register Now
                                    </a>
                                ) : (
                                    <span className="text-gray-400 text-sm block text-center">
                                        Registration Not Available
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
