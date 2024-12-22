import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navber from '../components/Navber'
// import Footer from '../components/Footer'

const Root = () => {
    return (
        <div>
            {/* <Navber /> */}
            <Outlet />
            {/* <Footer/> */}
        </div>
    )
}

export default Root
