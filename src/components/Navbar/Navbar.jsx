import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div>
            <div className="w-full ">
                <div className="navbar lg:p-4 h-5 dark:bg-black">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-black text-xl">
                                <NavLink to="/" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#53ec62]" : ""
                                }><li><a>Home</a></li></NavLink>
                                <NavLink to="/allFood" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#53ec62]" : ""
                                }><li><a>All Foods Items</a></li></NavLink>
                                <NavLink to="/blog" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#53ec62]" : ""
                                }><li><a>Blog</a></li></NavLink>
                                <NavLink to="/login" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#53ec62]" : ""
                                }><li><a>Login</a></li></NavLink>
                            </ul>
                        </div>
                        <div className="flex items-center ">
                            <img src="https://i.ibb.co/YR4G7Md/31351014-ycay-n3m9-220806-removebg-preview.png" className="w-[60px] mr-6" alt="" />
                            <h3 className="text-2xl font-bold -mx-5 mt-2"><span className="text-[#53ec62] text-3xl font-bold">H</span>ungry <span className="text-[#53ec62]">D</span>ucks</h3>


                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-lg font-bold text-black">
                            <NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#53ec62]" : ""
                            }><li><a>Home</a></li></NavLink>
                            <NavLink to="/allMenus" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#53ec62]" : ""
                            }><li><a>All Menus</a></li></NavLink>
                            <NavLink to="/blog" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#53ec62]" : ""
                            }><li><a>Blog</a></li></NavLink>
                           
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {
                            user ?
                                <div className="flex items-center text-center">
                                    <div className="dropdown dropdown-end">
                                        <div className="flex items-center gap-1">
                                            <div>
                                                <p className="font-semibold">{user.email}</p>
                                            </div>
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </label>
                                        </div>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                            <li>
                                                <p className="font-bold ">My Added Food Items</p>
                                            </li>
                                            <li>
                                                <p className="font-bold ">Add a Food Item</p>
                                            </li>
                                            <li>
                                                <p className="font-bold ">My Order Food Items</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <button onClick={handleLogOut}
                                        className="btn btn-active bg-[#53ec62]"

                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        <span>Logout</span>
                                    </button>
                                </div>
                                :
                                <NavLink to="/login">
                                    <button
                                        className="btn bg-[#53ec62]"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        <span>Login</span>
                                    </button>
                                </NavLink>

                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;