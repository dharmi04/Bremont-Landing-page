import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/bermontdis1.png';
import image2 from '../assets/bermontdis2.png';
import image3 from '../assets/bermontdis3.png';
import image4 from '../assets/bermontdis4.png';
import image5 from '../assets/bermontdis5.png';

const WatchCarousel = () => {
  const watches = [
    {
      name: "Watch 1",
      image: image1,
      description: "A high-quality watch",
    },
    {
      name: "Watch 2",
      image: image2,
      description: "Elegant and stylish",
    },
    {
      name: "Watch 3",
      image: image3,
      description: "A perfect fit for any occasion",
    },
    {
      name: "Watch 4",
      image: image4,
      description: "Durable and reliable",
    },
    {
      name: "Watch 5",
      image: image5,
      description: "Luxury meets functionality",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 watches
    slidesToScroll: 1,
    arrows: false, // Remove arrow keys
  };

  return (
    <div className="bg-black py-10 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold text-white mb-6">Our Premium Watches</h1>
        <Slider {...settings}>
          {watches.map((watch, index) => (
            <div key={index} className="flex items-center justify-center px-2 py-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-gray-300 text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 relative">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-40 h-60 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold z-10">{watch.name}</h2>
                <p className="text-sm mt-2 z-10">{watch.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WatchCarousel;
