import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext/Authcontext'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return <diV className="flex justify-center items-center my-20"><span className="loading loading-spinner loading-lg"></span></diV>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    )
}

export default PrivateRoute
