import React from 'react'

import { Outlet, Link,useLoaderData, } from "react-router-dom";


export async function loader() {
  const response = await fetch('https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=f0168094ea9df2f5fae1551f9a16e325')
  const data = await response.json()
  return {data}
}


export default function NewsArticles() {
  const { data } = useLoaderData();

  return (
    <>
      <div className="sectionOne flex flex-row align-middle justify-center">
        <h1 className="animate-pulse mt-5 mainHeading font-mono text-2xl font-bold mb-8">
          Hot news at your fingertip
        </h1>
      </div>

      <div
        id="blog-container"
        className="container lg:container justify-items-center m-auto sectionThree grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1"
      >
        {data.articles.map((article, index) => (
          <div
            key={article.id || index}
            className="blog-card max-w-64 m-5 cursor-pointer p-3 border rounded-md border-slate-400 flex flex-col justify-between align-middle"
          >
            <img className='max-h-32' src={article.image} alt={article.title} />
            <h2 className="text-xl font-semibold mt-3">{article.title}</h2>
            <h3 className="mt-2 mb-2">
              {article.description}
            </h3>
            <Link className="self-center" to={article.url}>
              <button className="  bg-slate-400 p-2 border-none rounded-full m-2">
                Read more
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

      


