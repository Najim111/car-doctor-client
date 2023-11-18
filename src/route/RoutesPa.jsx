import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../component/login/Login";
import SingUp from "../component/singup/SingUp";
import Booking from "../pages/booking/Booking";

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
            element:<Booking></Booking>,
            loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
      ]
    },
  ]);
  export default router