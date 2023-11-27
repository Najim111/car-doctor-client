import { Outlet } from "react-router-dom";
import Footer from "../shered/Footert/Footer";
import Navbar from "../shered/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div>
            <div className="h-28 mb-2">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;