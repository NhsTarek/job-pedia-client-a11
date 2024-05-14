import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

import logo from "../assets/images/jobpedia.png"







const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const [theme, setTheme] = useState('light');


    useEffect(() => {

        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }



    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className="font-poppins font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="font-poppins font-bold"><NavLink to="/allArts&Crafts"> All Jobs</NavLink></li>
        <li className="font-poppins font-bold"><NavLink to="/applied-jobs">Applied Jobs</NavLink></li>
        <li className="font-poppins font-bold"><NavLink to="/add-job"> Add A Job</NavLink></li>
        <li className="font-poppins font-bold"><NavLink to="/my-jobs"> My Jobs</NavLink></li>
        <li className="font-poppins font-bold"><NavLink to="/blogs"> Blogs</NavLink></li>
        


    </>
    return (
        <div className="navbar bg-[#FFFFFF] py-5 flex items-center justify-center shadow-[#b3f0ff] shadow-md ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navLinks}
                    </ul>
                </div>

                <Link to="/" className="btn btn-ghost md:text-xl lg:text-xl font-poppins">
                    <div className="flex items-center justify-center">
                        <img className="w-auto h-7 md:h-14" src={logo} alt="" />
                        <h2 className="font-poppins md:text-2xl">JobPedia</h2>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}

                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? (<div className="dropdown dropdown-end">
                        <div className="flex gap-2">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip " data-tip={user?.displayName || 'user name not found'}>
                                <div className="w-full rounded-full" >

                                    <img alt="user profile photo" referrerPolicy="no-referrer" src={user?.photoURL} />

                                </div>


                            </div>
                            <button onClick={() => handleSignOut()} className="btn btn-ghost">Logout</button>
                        </div>







                    </div>) : (
                        <div className="flex">
                            <Link to="/login">
                                <button className="btn btn-ghost md:font-poppins md:font-bold">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn btn-ghost md:font-poppins md:font-bold">Register</button>
                            </Link>
                        </div>
                    )}
                <label className="cursor-pointer grid place-items-center">
                    <input type="checkbox" onChange={handleToggle} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;