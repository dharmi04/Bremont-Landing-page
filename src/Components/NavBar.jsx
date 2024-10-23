import React from 'react';

const NavBar = () => {
  return (
    <div className='flex w-full'>
      {/* Left Section */}
      <div className='flex flex-row items-center space-x-7 bg-white w-1/2'>
        <div className='p-2'>
          <p className="font-bold text-black text-3xl font-mono">BREMONT</p>
        </div>
        <div className='flex flex-row space-x-8 text-sm'>
          <p>Store</p>
          <p>Shop</p>
          <p>Collection</p>
        </div>
      </div>
      {/* Right Section */}
      <div className='flex flex-row items-center justify-end w-1/2 bg-black'>
        <div className='flex flex-row space-x-8 text-white p-2 text-sm'>
          <p>About Us</p>
          <p>Cart</p>
          <p>Collection</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
