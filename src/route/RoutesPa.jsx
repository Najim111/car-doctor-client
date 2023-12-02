import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../component/login/Login";
import SingUp from "../component/singup/SingUp";
import Booking from "../pages/booking/Booking";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/singUp",
            element: <SingUp></SingUp>
        },
        {
            path:"/booking/:id",
            element:<PrivateRoute><Booking></Booking></PrivateRoute>,
            loader:({params})=> fetch(`https://car-doctor-server-alpha-ivory.vercel.app/services/${params.id}`)
        },
        {
            path:"/bookings",
            element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            
        },
      ]
    },
  ]);
  export default router