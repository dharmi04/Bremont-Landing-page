import React from 'react';
import image1 from '../assets/bremont3.jpeg'
import image2 from '../assets/bremont4.jpeg'

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-black">
      {/* Images Section */}
      <div className="flex flex-col md:w-1/2 space-y-4">
        <div className="relative ">
          <img
            src={image1}
            alt="Watch 2"
            className="absolute top-28 left-28 w-2/3 h-auto  shadow-lg"
          />
        </div>
        <div className=''>
        <img
            src={image2}
            alt="Watch 1"
            className=" h-auto shadow-lg "
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-2xl font-bold text-white mb-4 text-right">About The Watch</h2>
        <p className="text-white mb-6">
          Watches progressed in the 17th century from spring-powered clocks, which appeared as early
          as the 14th century. During most of its history the watch was a mechanical device, driven
          by clockwork, powered by winding a mainspring, and keeping time.
        </p>
        {/* <ul className="text-gray-600 space-y-2">
          <li>✓ Water & Scratch Resistance</li>
          <li>✓ Automatic Movement</li>
          <li>✓ Precious Gemstones</li>
          <li>✓ Metal Bracelet</li>
          <li>✓ Reflective Coating</li>
        </ul> */}
      </div>
    </div>
  );
};

export default AboutUs;