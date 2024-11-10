import React, { useEffect } from 'react';
import { Outlet, Link, useLoaderData } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaSearch, FaLanguage } from 'react-icons/fa';
import {getNews} from "../service/newsAPI"  



export async function loader() {
const query = "car";
const country = "india" ;
  const response =await getNews(query,country)
  console.log(response)
  const data =  response.data
  return { data };
}


export default function NewsArticles() {
  const { data } = useLoaderData();

  return (
    <>

      {/* News Articles Section */}
      <div
        id="blog-container"
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4"
      >


{data?.articles ? (
          data.articles.map((article, index) => (
            <div
              key={article.id || index}
              className="max-w-md mx-auto p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src={article.image}
                alt={article.title}
              />
              <h2 className="text-xl font-bold text-black-400 mb-2">{article.title}</h2>
              
              <p className="text-gray-600 mb-4">{article.description}</p>
              {/* <p className="text-gray-400 mb-4">{article.content}</p> */}
              <Link to={article.url} target="_blank" className="self-center">
                <button className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full hover:bg-yellow-600">
                  Read more
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No articles available</p>
        )}
        
      </div>


    </>
  );
}
