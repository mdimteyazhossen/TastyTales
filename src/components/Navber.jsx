import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import AuthContext from '../context/AuthContext/Authcontext'

const Navber = () => {
    const location = useLocation();
    const [navbarColor, setNavbarColor] = useState('');
    const { user, signOutUser } = useContext(AuthContext)
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Track the previous scroll position
    const [isNavVisible, setIsNavVisible] = useState(true)
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('successfwijoi')
            })
            .catch(error => {
                console.log('failed to sign out.')
            })
    }
    useEffect(() => {
        if (location.pathname === '/') {
            setNavbarColor('');  // Default color for the homepage
        } else if (location.pathname === '/login') {
            setNavbarColor(' rgb(75 85 99)');  // Specific color for the login page
        } else if (location.pathname === '/register') {
            setNavbarColor(' rgb(75 85 99)');  // Specific color for the login page
        } else if (location.pathname === '/addfood') {
            setNavbarColor(' rgb(75 85 99)');  // Specific color for the login page
        } else if (location.pathname === '/myfoods') {
            setNavbarColor(' rgb(75 85 99)');  // Specific color for the login page
        } else if (location.pathname === '/ordersfood') {
            setNavbarColor(' rgb(75 85 99)');  // Specific color for the login page
        } else if (location.pathname === '/foodpurchase/:id') {
            setNavbarColor(' rgb(75 85 99)');  // Specific color for the login page
        } else {
            setNavbarColor('');  // Default color for other routes (you can choose any color)
        }
    }, [location.pathname]);
    const links = <>
        <NavLink to='/'><li><a className='text-white font-bold text-xl'>Home</a></li></NavLink>
        <NavLink to='/allfood'> <li><a className='text-white font-bold text-xl'>All Foods</a></li></NavLink>
        <NavLink to='/gallery'><li><a className='text-white font-bold text-xl'>Gallery</a></li></NavLink>
        {user ? "" : (<NavLink to='/register'><li><a className='text-white font-bold text-xl'>Register</a></li></NavLink>)}
    </>
    const profileLinks = <>
        <NavLink to='/addfood'><li><a>Add Food</a></li></NavLink>
        <NavLink to='/myfoods'><li><a>My Foods</a></li></NavLink>
        <NavLink to='/ordersfood'><li><a>My Orders</a></li></NavLink>
    </>
    const headLink = <>
        <NavLink to='/'><a className="btn btn-ghost text-3xl text-white font-bold"><img src="https://i.ibb.co.com/Cvhkp7C/Screenshot-2024-12-21-230356.png" alt="" className='h-full rounded-full' />TastyTales</a></NavLink>
    </>
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Hide navbar on scroll down, show on scroll up
        if (currentScrollPos > prevScrollPos) {
            setIsNavVisible(false); // Scrolling down, hide navbar
        } else {
            setIsNavVisible(true); // Scrolling up, show navbar
        }

        setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`navbar flex fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? `bg-gray-600` : 'bg-transparent'} ${!isNavVisible ? 'hidden' : 'block'}`} style={{ backgroundColor: navbarColor }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                {headLink}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className=" m-1">
                                <div className="avatar">
                                    <div className=" ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>

                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                {profileLinks}
                            </ul>
                        </div>
                        <a className="btn text-lg text-white bg-gray-600 m-2" onClick={handleSignOut}>Logout</a></>
                    :
                    <>
                        <div className="avatar">
                            <div className=" ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                                <img src="https://i.ibb.co.com/WB9SWS5/istockphoto-1300845620-612x612.jpg" />
                            </div>
                        </div>
                        <Link to='/login' className="btn text-lg text-white bg-gray-600 m-2">LogIn</Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Navber
