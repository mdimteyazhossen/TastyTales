import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext/Authcontext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registerLottie from './../assets/lottie/RegisterLottie.json'
import Lottie from 'lottie-react';
import { div } from 'framer-motion/client';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { createUser, updateUser, signInWithgoogle, setUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email, password, name, photo)
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            toast.error('Password must be at least 6 characters long, include an uppercase letter and a lowercase letter.', {
                position: 'top-center'
            })
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                // navigate('/');
                toast.success("User Register Successfully", {
                    position: 'top-center'
                });
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        const updatedUser = {
                            ...user,
                            displayName: name, // Add display name
                            photoURL: photo,   // Add photo URL
                        };
                        // console.log(updatedUser)
                        setUser(updatedUser);
                        toast.success("User Register Successfully", {
                            position: 'top-center'
                        });
                        navigate('/');
                    })
                    .catch((err) => {
                        const error = err.code;
                        const errorMessage = err.message;
                        toast.error(errorMessage, {
                            position: 'top-center'
                        });


                    })

            })
            .catch(err => {
                const errorMessage = err.message;
                toast.error(errorMessage, {
                    position: 'top-center'
                });
            })
    }
    const handlegoogle = () => {
        signInWithgoogle()
            .then(res => {
                toast.success('User registered successfully', {
                    position: 'top-center'
                })
                updateUser({
                    displayName,
                    photoURL,
                })
                    .then(() => {
                        navigate('/')
                        toast.success('User registered successfully', {
                            position: 'top-center'
                        })
                    })
                    .catch(err => {
                        toast.warn('User has account already here. Please login!', {
                            position: 'top-center'
                        })
                    })
                navigate('/')
            })

            .catch(err => {
                toast.warn(err.message, {
                    position: 'top-center'
                })
            })
    }
    return (
        <div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />

            <div className="hero bg-base-200 min-h-screen my-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left grid gap-2">
                        <h1 className='text-5xl font-bold text-gray-600 text-center'>Register Now!</h1>
                        <p className='text-xl text-gray-600 text-center'>Join TastyTales to enjoy personalized recommendations, exclusive offers, easy ordering, and real-time order tracking. Sign up today and start enjoying the best in food, delivered to your doorstep!</p>
                        <Lottie animationData={registerLottie}></Lottie>
                    </div>
                    <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input name='name' type="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">PhotoURL</span>
                                </label>
                                <input name='photo' type="photo" placeholder="PhotoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                    Already have an account? Please<Link to='/login' className='text-red-600 mr-[25px] font-bold'>Login!</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gray-600 text-lg text-white">Register</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handlegoogle} className="btn  bg-gray-600 text-lg text-white">Register With Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
