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
import AuthProvider from './Provider/AuthProvider';
import SingleFood from './components/SingleFood/SingleFood';
import SingleFoods from './components/SingleFood/SingleFoods';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import FoodPurchase from './components/FoodPurchase/FoodPurchase';
import MyOrder from './pages/MyOrder/MyOrder';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AddFood from './components/AddFood/AddFood';
import MyAddItems from './components/MyAddItems/MyAddItems';
import UpdateFood from './components/UpdateFood/UpdateFood';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/allMenus",
        element: <AllFoodItems></AllFoodItems>,
        loader: () => fetch('https://restaurant-website-server-side.vercel.app/FoodItemsCount')
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
      {
        path:"/singleFood/:id",
        element: <SingleFood></SingleFood>,
        loader: ({params}) => fetch(`https://restaurant-website-server-side.vercel.app/foodItems/${params.id}`)
      },
      {
        path:"/singleFoods/:id",
        element: <SingleFoods></SingleFoods>,
        loader: ({params}) => fetch(`https://restaurant-website-server-side.vercel.app/allFoodItems/${params.id}`)
      },
      {
        path:"/FoodPurchase/:id",
        element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
        loader: ({params}) => fetch(`https://restaurant-website-server-side.vercel.app/FoodPurchase/${params.id}`)
      },
      {
        path:"/FoodPurchases/:id",
        element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
        loader: ({params}) => fetch(`https://restaurant-website-server-side.vercel.app/FoodPurchases/${params.id}`)
      },
      {
        path:"/MyOrder",
        element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
      },
      {
        path:"/AddFood",
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path:"/myAddFood",
        element: <PrivateRoute><MyAddItems></MyAddItems></PrivateRoute>
      },
      {
        path:"/update",
        element: <UpdateFood></UpdateFood>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
