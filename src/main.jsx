import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/layout/Root';
import Home from './pages/Home/Home';
import AllFoodItems from './pages/AllFoodItems/AllFoodItems';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/allFood",
        element: <AllFoodItems></AllFoodItems>
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/reg",
        element: <Registration></Registration>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
