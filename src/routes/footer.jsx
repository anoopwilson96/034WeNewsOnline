
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        
        {/* First Column */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-500">Explained News</li>
            <li className="hover:text-yellow-500">Last Hour News</li>
            <li className="hover:text-yellow-500">Government Updates</li>
            <li className="hover:text-yellow-500">World News</li>
          </ul>
        </div>
        
        {/* Second Column */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-gray-300 mb-2">Get your daily newsletter</p>
          <input
            type="email"
            placeholder="Your Email address"
            className="p-2 mb-2 rounded-full bg-gray-700 text-white border-none outline-none focus:ring-2 focus:ring-yellow-500 w-full md:w-auto"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-gray-900"
          >
            Subscribe
          </button>

          {/* Contact Icons */}
          <div className="flex gap-4 mt-6">
            <FaEnvelope size={24} className="text-gray-300 hover:text-yellow-500" />
            <FaPhone size={24} className="text-gray-300 hover:text-yellow-500" />
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">More Info</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-500">Subscription</li>
            <li className="hover:text-yellow-500">Newsletter</li>
            <li className="hover:text-yellow-500">Hiring</li>
            <li className="hover:text-yellow-500">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 px-4 md:px-0">
          <p>&copy; 2024 NewsOnline. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF className="hover:text-yellow-500" />
            <FaTwitter className="hover:text-yellow-500" />
            <FaInstagram className="hover:text-yellow-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
