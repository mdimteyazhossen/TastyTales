import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext/Authcontext';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://assignment-11-server-eta-six.vercel.app',
    withCredentials:true
});
const useAxiosSecure = () => {
    const {signOutUser} = useContext(AuthContext)
    const navigate =useNavigate();
    useEffect(()=>{
        axiosInstance.interceptors.response.use( response => {
            return response;
        }, error =>{
            if(error.status === 401 || error.status === 403){
                signOutUser()
                .then(()=>{
                    navigate('/login')
                })
                .catch(()=>{

                })
            }
            return Promise.reject(error);
        })
    },[])
    return axiosInstance;
}

export default useAxiosSecure
