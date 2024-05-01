import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import NewsArticles from './routes/newsArticles';
import NewsArticle from './routes/newsArticle';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <NewsArticles/>
    
      },
      {
        path: "/articles",
        element: <NewsArticles/>
    
      },
      {
          path: "articles/:articleId",
          element: <NewsArticle/>,
      }
    ]

   

    // <Link to={`contacts/1`}>Your Name</Link>

  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
