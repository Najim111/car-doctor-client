import { Link } from "react-router-dom"
import icon from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../component/contextCreate/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))

    }
    const NavePage =
        <>
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            {user?.email ?
                <>
                    <li><Link to={'/bookings'}>My Booking</Link></li>
                    <li><button onClick={handelLogOut}>Log Out</button></li>
                </>
                : <li><Link to={'/login'}>Login</Link></li>
            }

        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavePage}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">
                        <img src={icon} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavePage}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
