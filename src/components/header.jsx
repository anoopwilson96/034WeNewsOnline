import React from 'react';
import { FaSearch, FaLanguage } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="mb-10">

        <div className="flex justify-center items-center mb-4">
          <img className="max-w-xs" src="./logo.png" alt="logo" />
        </div>  


      <div className="p-4 bg-gray-900 text-white shadow-lg mx-auto ">
        {/* Logo Section */}


        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Navigation and Search */}


          <nav className="flex flex-col justify-center md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full ">


            {/* Country Selector */}
            <select
              name="country"
              id="country"
              className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <option value="india">India</option>
              <option value="canada">Canada</option>
              <option value="us">US</option>
            </select>

            {/* Navigation Links */}
            <div className="flex space-x-4 text-sm md:text-base">
              <button value="politics" className="hover:text-yellow-400 transition-colors">
                Politics
              </button>
              <button value="business" className="hover:text-yellow-400 transition-colors">
                Business
              </button>
              <button value="movies" className="hover:text-yellow-400 transition-colors">
                Movies
              </button>
              <button value="tech" className="hover:text-yellow-400 transition-colors">
                Tech
              </button>
            </div>
                        {/* Search Bar */}
                        <div className="relative md:w-64 w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-800 text-white p-2 pl-10 rounded-md focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-3 text-yellow-400" />
            </div>
          </nav>
        </div>
      </div>



    </header>
  );
}
