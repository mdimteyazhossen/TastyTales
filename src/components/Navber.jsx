import React from 'react'
import { NavLink } from 'react-router-dom'

const Navber = () => {
    const links = <>
        <NavLink to='/'><li><a className='text-white font-bold text-xl'>Home</a></li></NavLink>
        <NavLink to='/allfood'> <li><a className='text-white font-bold text-xl'>All Foods</a></li></NavLink>
        <NavLink to='/gallery'><li><a className='text-white font-bold text-xl'>Gallery</a></li></NavLink>
        <li><a className='text-white font-bold text-xl'>Login</a></li>
    </>
    const profileLinks = <>
        <NavLink to='/addfood'><li><a>Add Food</a></li></NavLink>
        <NavLink to='/myfoods'><li><a>My Foods</a></li></NavLink>
        <NavLink to='/ordersfood'><li><a>My Orders</a></li></NavLink>
    </>
    const headLink = <>
    <NavLink to='/'><a className="btn btn-ghost text-3xl text-white font-bold"><img src="https://i.ibb.co.com/Cvhkp7C/Screenshot-2024-12-21-230356.png" alt="" className='h-full rounded-full' />TastyTales</a></NavLink>
    </>
    return (
        <div className="navbar fixed top-0 bg-none p-5 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        {profileLinks}
                    </ul>
                </div>
                <a className="btn">Button</a>
            </div>
        </div>
    )
}

export default Navber
