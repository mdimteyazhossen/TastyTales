import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext/Authcontext';
import Lottie from 'lottie-react';
import loginanimation from "./../assets/lottie/LoginAnimation.json"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const {SignInUser,signInWithgoogle} = useContext(AuthContext);
    const navigate =useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)
        SignInUser(email,password)
        .then(result =>{
            console.log('sign in', result.user)
            navigate('/')
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    const handlegoogle = ()=>{
        signInWithgoogle()
        .then(res=>{
            console.log(res.user)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    return (
        <div className="hero bg-white min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left grid">
                <h1 className='text-5xl font-bold text-gray-600 text-center'>Login to TastyTales!</h1>
                <p className='text-xl text-gray-600 text-center'>Welcome back! Log in to your account and continue enjoying your favorite meals, track your orders, and access exclusive offers and personalized recommendations.</p>
                    <Lottie animationData={loginanimation} className='h-[400px]'/>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                New this website? Please<Link to='/register' className='text-red-600 font-bold mr-[65px]'>Register</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-xl text-white bg-gray-600">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handlegoogle} className="btn  text-xl text-white bg-gray-600">Login With Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
