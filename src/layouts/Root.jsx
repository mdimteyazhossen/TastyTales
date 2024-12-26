import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../components/Navber'
import Footer from '../components/Footer'
import ThemeToggler from '../components/ThemeToggler'

const Root = () => {
    return (
        <div>
            <Navber />
            <div className='fixed top-24 right-5 z-50'>
                <ThemeToggler />
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root
