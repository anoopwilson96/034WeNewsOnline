import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


export default function Header({ onUpdate }) {
  const [country, setCountry] = useState('');
  const [query, setQuery] = useState('example');
  const [searchInput, setSearchInput] = useState('');

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setCountry(newCountry);
    onUpdate({ country: newCountry, query });
  };

  const handleQueryChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onUpdate({ country, query: newQuery });
  };

  const handleSearch = () => {
    onUpdate({ country, query: searchInput });
  };

  return (
    <header className="mb-10">
      <div className="flex justify-center items-center mb-4">
        <img className="max-w-xs" src="./logo.png" alt="logo" />
      </div>

      <div className="p-4 bg-gray-900 text-white shadow-lg mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <nav className="flex flex-col justify-center md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full">


            {/* Navigation Links */}
            <div className="flex space-x-4 text-sm md:text-base">
              <button
                value="politics"
                onClick={handleQueryChange}
                className="hover:text-yellow-400 transition-colors"
              >
                Politics
              </button>
              <button
                value="business"
                onClick={handleQueryChange}
                className="hover:text-yellow-400 transition-colors"
              >
                Business
              </button>
              <button
                value="movies"
                onClick={handleQueryChange}
                className="hover:text-yellow-400 transition-colors"
              >
                Movies
              </button>
              <button
                value="tech"
                onClick={handleQueryChange}
                className="hover:text-yellow-400 transition-colors"
              >
                Tech
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative md:w-64 w-full flex ">
              <input
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-gray-800 text-white p-2 pl-10 rounded-md focus:outline-none"
              />
              <FaSearch
                className="absolute left-3 top-3 text-yellow-400 cursor-pointer"
                onClick={handleSearch}
              />
                <button
    onClick={handleSearch}
    className=" absolute right-1 top-1 text-sm  text-yellow-400  px-2 py-1 rounded-md ml-2"
  >
    Search
  </button>
        </div>
      
              {/* Country Selector */}
              <select
              name="country"
              value={country}
              id="country"
              onChange={handleCountryChange}
              className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <option value="gb">World</option>
              <option value="us">US</option>
              <option value="in">India</option>
              
            </select>


            
          </nav>

        </div>
      </div>
    </header>
  );
}
