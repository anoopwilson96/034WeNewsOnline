import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import NewsArticles from './components/newsArticles';
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
        
      },
      {
        path: "/articles",
        element: <NewsArticles/>,
            
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
