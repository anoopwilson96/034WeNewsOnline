import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa';
import { GiNewspaper } from 'react-icons/gi';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <GiNewspaper size={32} className="mr-2 text-yellow-400" />
          <h1 className="text-2xl font-bold">NewsOnline</h1>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex space-x-4 text-sm md:text-base mb-4 md:mb-0">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#world" className="hover:text-yellow-400">World</a>
          <a href="#politics" className="hover:text-yellow-400">Politics</a>
          <a href="#business" className="hover:text-yellow-400">Business</a>
          <a href="#entertainment" className="hover:text-yellow-400">Entertainment</a>
        </nav>
        
        {/* Search and Social Media */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-white p-2 pl-8 rounded-md focus:outline-none w-32 md:w-48"
            />
            <FaSearch className="absolute left-2 top-2 text-yellow-400" />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-2">
            <a href="#facebook" aria-label="Facebook" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#twitter" aria-label="Twitter" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
