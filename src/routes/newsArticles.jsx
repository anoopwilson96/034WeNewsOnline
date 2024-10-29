import React from 'react';
import { Outlet, Link, useLoaderData } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaSearch, FaLanguage } from 'react-icons/fa';

export async function loader() {
  const response = await fetch(`https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=${import.meta.env.VITE_API_URL0}`);
  const data = await response.json();
  return { data };
}

export default function NewsArticles() {
  const { data } = useLoaderData();

  return (
    <>
      {/* Language Selector */}
      <div className="flex justify-center items-center mt-4 my-8 ">
      <FaLanguage className="text-yellow-400" />
        <select
          name="language"
          id="language"
          className="ml-2 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none"
        >
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="hindi">Hindi</option>
          <option value="malayalam">Malayalam</option>
        </select>
      </div>

      {/* News Articles Section */}
      <div
        id="blog-container"
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4"
      >
        {data.articles.map((article, index) => (
          <div
            key={article.id || index}
            className="max-w-md mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src={article.image}
              alt={article.title}
            />
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">{article.title}</h2>
            <p className="text-gray-300 mb-4">{article.description}</p>
            <p className="text-gray-400 mb-4">{article.content}</p>
            <Link to={article.url} target="_blank" className="self-center">
              <button className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full hover:bg-yellow-600">
                Read more
              </button>
            </Link>
          </div>
        ))}
      </div>


    </>
  );
}
