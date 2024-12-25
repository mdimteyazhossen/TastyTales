import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext/Authcontext';
import { Link, useNavigate } from 'react-router-dom';
import registerLottie from './../assets/lottie/RegisterLottie.json'
import Lottie from 'lottie-react';

const Register = () => {
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
            alert('Password must be at least 6 characters long, include an uppercase letter and a lowercase letter.')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                // navigate('/');
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        const updatedUser = {
                            ...user,
                            displayName: name, // Add display name
                            photoURL: photo,   // Add photo URL
                        };
                        // console.log(updatedUser)
                        setUser(updatedUser);
                        navigate('/');
                    })
                    .catch((err) => {
                        const error = err.code;
                        const errorMessage = err.message;
                        console.log(error, errorMessage);


                    })

            })
            .catch(err => {
                console.log(err.message)
            })
    }
    const handlegoogle = () => {
        signInWithgoogle()
            .then(res => {
                updateUser({
                    displayName,
                    photoURL,
                })
                    .then(() => {
                        // navigate('/')
                        // toast.success('User registered successfully', {
                        //     position: 'top-center'
                        // })
                    })
                    .catch(err => {
                        // toast.warn('User has account already here. Please login!', {
                        //     position: 'top-center'
                        // })
                    })
                navigate('/')
            })

            .catch(err => {
                console.log(err.message)
            })
    }
    return (
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
    )
}

export default Register
