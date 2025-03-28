import React from "react";
import { motion } from "framer-motion";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

const AboutUs = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 md:px-0">
            {/* Background Blurred Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3 z-0"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3 z-0"></div>

            {/* Main Content Container */}
            <div className='max-w-6xl mx-auto flex md:flex-row flex-col items-center space-x-0 md:space-x-12 relative z-10'>
                {/* Text Section */}
                <motion.div 
                    className='md:w-1/2 w-full'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div>
                        <h2 className='font-Montserrat uppercase text-4xl md:text-5xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-3'>
                            ABOUT US
                        </h2>
                    </div>
                    <div className="space-y-4">
                        <p className='text-lg md:text-xl font-light text-gray-700 leading-relaxed'>
                            FLARE, the most renowned socio-cultural event at PDEU, brings together dance, drama, art, literature, music, and fashion. 
                            It features over 50 events, including competitions, workshops, and lectures, organized by 20+ student-led clubs.
                        </p>
                        <p className='text-lg md:text-xl font-light text-gray-700 leading-relaxed'>
                            The Social & Cultural (S&C) Committee fosters innovation and collaboration among PDEU's student-run clubs, empowering students 
                            to manage and execute diverse activities with the right support.
                        </p>
                    </div>
                </motion.div>

                {/* Image Gallery Section */}
                <motion.div 
                    className='md:w-1/2 w-full mt-10 md:mt-0'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className='space-y-6'>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1 col-start-3">
                                <img 
                                    src={image1} 
                                    alt="Flare Event" 
                                    className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1 col-start-2">
                                <img 
                                    src={image2} 
                                    alt="PDEU Cultural Event" 
                                    className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                            <div className="col-span-1">
                                <img 
                                    src={image1} 
                                    alt="Student Performance" 
                                    className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1">
                                <img 
                                    src={image2} 
                                    alt="Art Exhibition" 
                                    className="w-full h-[150px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                            <div className="col-span-1">
                                <img 
                                    src={image1} 
                                    alt="Music Performance" 
                                    className="w-full h-[150px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                            <div className="col-span-1">
                                <img 
                                    src={image2} 
                                    alt="Dance Competition" 
                                    className="w-full h-[150px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;