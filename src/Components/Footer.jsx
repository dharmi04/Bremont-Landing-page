import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Bremont</h3>
            <p className="text-gray-400">
              Bremont is dedicated to crafting luxury timepieces that combine elegance with precision. Discover the perfect watch for every occasion.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/shop" className="hover:text-purple-500 transition duration-200">Shop</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-purple-500 transition duration-200">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-purple-500 transition duration-200">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="hover:text-purple-500 transition duration-200">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-4">
              Email: <a href="mailto:support@bremont.com" className="hover:text-purple-500 transition duration-200">support@bremont.com</a>
            </p>
            <p className="mb-4">Phone: +1 (800) 123-4567</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition duration-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition duration-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition duration-200">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition duration-200">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Bremont. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
