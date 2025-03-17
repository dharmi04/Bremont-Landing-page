import React from "react";
import { motion } from "framer-motion";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

const AboutUs = () => {
    return (
        <div className='' id="gallery">
            <div className='w-3/4 mx-auto flex md:flex-row flex-col'>
                {/* Text Section */}
                <motion.div 
                    className='md:w-1/2'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}  // Triggers when 20% of the section is visible
                >
                    <div className='pt-10'>
                        <p className='font-Montserrat uppercase md:text-5xl text-3xl font-semibold text-black pb-5'>ABOUT US</p>
                    </div>
                    <p className='text-xl font-light text-black md:pr-4 pr-0 pt-5'>
                        FLARE, the most renowned socio-cultural event at PDEU, brings together dance, drama, art, literature, music, and fashion. 
                        It features over 50 events, including competitions, workshops, and lectures, organized by 20+ student-led clubs.
                    </p>
                    <p className='text-xl font-light text-black md:pr-4 pr-0 pt-5'>
                        The Social & Cultural (S&C) Committee fosters innovation and collaboration among PDEU’s student-run clubs, empowering students 
                        to manage and execute diverse activities with the right support.
                    </p>
                </motion.div>

                {/* Image Section */}
                <motion.div 
                    className='md:w-1/2'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}  // Triggers when 20% of the section is visible
                >
                    <div className='space-y-4'>
                        <div className="grid grid-cols-3 grid-row-1 space-y-8">
                            <div></div>
                            <div></div>
                            <div className="col-start-3">
                                <img src={image1} alt="Statue of Unity" className="w-full h-full rounded-md" />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 grid-row-1 gap-4">
                            <div></div>
                            <div><img src={image2} alt="Hawa Mahal" className="w-full h-full rounded-md" /></div>
                            <div><img src={image1} alt="Bagha Beach" className="w-full h-full rounded-md" /></div>
                        </div>

                        <div className="grid grid-cols-3 grid-row-1 gap-4">
                            <div><img src={image2} alt="Ooty" className="w-full h-[150px] rounded-md" /></div>
                            <div><img src={image1} alt="Darjeeling" className="w-full h-[150px] rounded-md" /></div>
                            <div><img src={image2} alt="Statue of Unity" className="w-full h-[150px] rounded-md" /></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
