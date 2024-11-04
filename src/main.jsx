import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import NewsArticles,{loader as articlesLoader} from './components/newsArticles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
,
      {
        path: "/",
        element: <NewsArticles/>,
        loader: articlesLoader
      },
      {
        path: "/articles",
        element: <NewsArticles/>,
        loader: articlesLoader     
      }
    ]


  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   <ToastContainer />
  </React.StrictMode>,
)
