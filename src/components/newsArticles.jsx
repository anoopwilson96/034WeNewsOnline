import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getNews } from '../service/newsAPI';

export default function NewsArticles() {
  // Access props from Outlet context
  const { country, query } = useOutletContext();
  const [data, setData] = useState(null);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getNews(query, country);
      if (response) {
        setData(response.data);
      }
    }
    fetchData();
  }, [country, query]);

  return (
    <div id="blog-container" className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
      {data?.articles ? (
        data.articles.map((article, index) => (
          <div
            key={article.id || index}
            className="max-w-md mx-auto p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <img className="w-full h-48 object-cover rounded-md mb-4" src={article.image || `https://res.cloudinary.com/aw96/image/upload/v1731245782/450px-No_image_available.svg_vrtdnt.png)` }
            alt={article.title} />
            <h2 className="text-xl font-bold text-black-400 mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{truncateText(article.description, 200)}</p>
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
  );
}
