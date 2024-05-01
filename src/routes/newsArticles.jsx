import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function NewsArticles() {
  return (

<>
{/*  scrolling heading  */}
<div className="sectionOne flex flex-row align-middle  justify-center">
      <h1 className="animate-pulse mt-5 mainHeading  font-mono text-2xl font-bold mb-8">
        Hot news at your fingertip
      </h1>
    </div>
  {/*  blog-container */}
  <div
    id="blog-container"
    className=" container lg:container justify-items-center m-auto sectionThree  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1"
  >
    <div className="  blog-card  max-w-64 m-5 cursor-pointer p-3 border rounded-md border-slate-400  flex flex-col justify-between align-middle">
      <img src="./dummy image.png" alt="" srcSet="" />
      <h2 className="text-xl font-semibold mt-3 ">News title</h2>
      <h3 className="mt-2 mb-2">
        Description about the news article div will be here.
      </h3>

      <Link className='' to={`/articles/article`}><button className="bg-slate-400 p-2 border-none rounded-full m-2">
        Read more
      </button></Link>

    </div>
  </div>
</>



  )
}
