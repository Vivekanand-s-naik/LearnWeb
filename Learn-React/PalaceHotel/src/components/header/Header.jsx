import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
import authService from "../../appwrite/AuthService";

function Header() {
    const loggedStatus = useSelector(state => state.auth.isLogged);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("loggedStatus : ", loggedStatus);
    const handleLogout = async()=>{
        dispatch(logout());
        await authService.logout();
        navigate("/")

    }
    const headerItems = [
        {
            name: 'Home',
            url: "/",
            active: true
        },
        {
            name: 'Gallery',
            url: "/gallery",
            active: true
        },
        {
            name: 'Rooms',
            url: "/rooms",
            active: true
        },
        {
            name: 'Add Room',
            url: "/add-room",
            active: loggedStatus
        },
        {
            name: 'Contact',
            url: "/contact",
            active: loggedStatus
        }
    ]
    return (
        <header className="bg-gray-800 text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-orange-400"
                >
                    HotelPalace
                </Link>

                {/* Navigation */}
                <nav>
                    <ul className="flex gap-6 font-medium ">
                        {headerItems && headerItems.map((item, index) => (
                            item.active &&
                            <li key={index} >
                                <NavLink to={item.url} className={(isActive) => isActive ? "underline hover:text-orange-400 self-end" : " hover:text-orange-400 justify-end"}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Authentication Buttons */}
                <div className="flex gap-3">
                    {
                        loggedStatus ?
                            <button
                                to="/logout"
                                className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600"
                                onClick={handleLogout}
                            >
                                Logout
                            </button> 
                            :
                            <>
                            <Link
                                to="/login"
                                className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600"
                            >
                                Login
                            </Link> 

                            <Link
                                to="/signup"
                                className="px-4 py-2 rounded border border-orange-500 hover:bg-orange-500"
                            >
                                Sign Up
                            </Link>
                            </>
                    }
                </div>

                
            </div>
        </header>
    );
}

export default Header;