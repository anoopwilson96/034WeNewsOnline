import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaSearch, FaLanguage } from 'react-icons/fa';
import { GiNewspaper } from 'react-icons/gi';

export default function Header() {


  return (
< div className='bg-gray-900 text-white'>
<header className=" p-4 shadow-lg max-w-6xl mx-auto">


        {/* Logo Section */}
          <div className="flex mx-auto justify-center items-center mb-4 md:mb-0 ">
          <GiNewspaper size={32} className="mr-4 text-yellow-400" />
          <h1 className=" font-mono text-4xl italic font-bold">your daily news</h1>
        </div>



      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Navigation Links */}
        <nav className="flex space-x-4 text-sm md:text-base items-center">


          <select
          name="country"
          id="country"
          className=" bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none"
        >
          <option value="india">India</option>
          <option value="canada">Canada</option>
          <option value="us">US</option>

        </select>

   

          {/* Other Navigation Links */}
          <a href="#world" className="hover:text-yellow-400">World News</a>
          <a href="#politics" className="hover:text-yellow-400">Politics</a>
          <a href="#business" className="hover:text-yellow-400">Business</a>
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
            <FaSearch className="absolute left-2 top-3 text-yellow-400" />
          </div>

        </div>
      </div>
    </header>


</div>
  );
}
