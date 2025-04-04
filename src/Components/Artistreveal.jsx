import React, { useState, useEffect } from 'react';
import image from '../assets/Poster.jpg';

const ArtistReveal = () => {
  // State to control confetti animation
  const [showConfetti, setShowConfetti] = useState(false);

  // Trigger confetti when component mounts
  useEffect(() => {
    // Small delay to ensure component is fully rendered
    const timer = setTimeout(() => {
      setShowConfetti(true);
      
      // Hide confetti after animation completes
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Generate confetti pieces
  const generateConfetti = () => {
    const pieces = [];
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
    
    for (let i = 0; i < 100; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const left = `${Math.random() * 100}%`;
      const animationDelay = `${Math.random() * 3}s`;
      
      pieces.push(
        <div 
          key={i} 
          className={`absolute w-2 h-2 rounded-full ${randomColor}`}
          style={{
            left: left,
            top: '-20px',
            animation: `fall 3s linear forwards`,
            animationDelay: animationDelay
          }}
        />
      );
    }
    
    return pieces;
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative">
      {/* Page Header */}
      <div className="w-full max-w-screen-lg mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">PRO NIGHT</h1>
        <p className="text-xl text-gray-600">SUNDAY</p>
      </div>

      {/* Artist Image - Static display, no flip */}
      <div className="w-full max-w-md mx-auto relative">
        <div className=" overflow-hidden">
          <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
            <img 
              src={image} 
              alt="Pro Night Artist Poster"
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Instructions */}
      {/* <div className="w-full max-w-screen-lg mx-auto mt-12 text-center">
        <p className="text-gray-600 text-lg">Don't miss the biggest music event of the year!</p>
      </div> */}

      {/* Full-page Confetti Container */}
      {showConfetti && (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-50">
          {generateConfetti()}
        </div>
      )}

      {/* CSS for confetti animation */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ArtistReveal;