import Lottie from 'lottie-react'
import React, { useContext, useState } from 'react'
import addproductAnimation from './../assets/lottie/uy66j02Xou.json'
import AuthContext from '../context/AuthContext/Authcontext'
import { div } from 'framer-motion/client'
import { toast, ToastContainer } from 'react-toastify'
const Addfood = () => {
    const { user } = useContext(AuthContext);
    const handleFoodAdd = e => {
        // const email = "abc@gmail.com"
        e.preventDefault();
        const fromData = new FormData(e.target);
        const initialData = Object.fromEntries(fromData.entries());
        // console.log(initialData);
        const { ingredients, making_procedure, ...newfood } = initialData;
        // console.log(newJob)
        newfood.description = {
            ingredients: ingredients ? ingredients.split('\n').map(item => item.trim()) : [],
            making_procedure: making_procedure ? making_procedure.split('\n').map(item => item.trim()) : [],
        };
        newfood.email = user?.email;
        newfood.purchase = 0;
        fetch('https://assignment-11-server-eta-six.vercel.app/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newfood)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast.success('Food Add successfully', {
                    position: 'top-center'
                })
            })

    }
    return (
        <div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
            <div className="hero bg-base-200 mx-auto mb-10">
                <div className=" flex-col lg:flex-row-reverse">
                    <div className="relative my-20 mx-auto w-4/5 h-[450px] rounded-3xl overflow-hidden">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://i.ibb.co.com/gtz4Sg1/pexels-bemistermister-3434523.jpg')",
                            }}
                        ></div>

                        {/* Title and Description Overlay */}
                        <div className="relative z-10 text-center text-white px-6 py-12 bg-black bg-opacity-40">
                            <h1 className="text-3xl font-bold mb-4">Taste the Best of Our Culinary Creations</h1>
                            <p className="text-lg">
                                Indulge in a diverse range of flavors, from hearty mains to decadent desserts. Discover dishes that bring together the finest ingredients for an unforgettable dining experience.
                            </p>
                        </div>
                    </div>


                    <div className="card lg:w-4/5 mx-auto bg-gray-600 w-full  shrink-0 shadow-2xl">
                        <form onSubmit={handleFoodAdd} className="card-body grid grid-cols-1 md:grid-cols-2 mlg:grid-cols-2 gap-10">

                            <div className=" row-span-1 md:row-span-3 lg:row-span-4">
                                <Lottie animationData={addproductAnimation}></Lottie>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-xl font-bold text-white">Name:</span>
                                </label>
                                <input type="name" placeholder="food name" className="input input-bordered border-gold" required value={user?.displayName} disabled />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-xl font-bold text-white">Email: </span>
                                </label>
                                <input type="name" placeholder="food name" className="input input-bordered border-gold" required value={user?.email} disabled />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Food Name: </span>
                                </label>
                                <input name='food_name' type="name" placeholder="food name" className="input input-bordered border-gold" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Food ImageURL: </span>
                                </label>
                                <input name='food_image' type="name" placeholder="Image URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Food Category: </span>
                                </label>
                                <input name='food_category' type="name" placeholder="food category" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Food Quantity: </span>
                                </label>
                                <input name='quantity' type="number" placeholder="Food Quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Food Price: </span>
                                </label>
                                <input name='price' type="number" placeholder="Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Food Origin: </span>
                                </label>
                                <input name='food_origin' type="name" placeholder="Enter country name" className="input input-bordered" required />
                            </div>
                            <div className="form-control lg:col-span-2">
                                <h1 className='text-white font-bold'>Decription:</h1>
                                <label className="label">
                                    <span className="label-text font-bold text-white">Ingredients: </span>
                                </label>
                                <textarea
                                    rows="3"
                                    placeholder="Write your message here..."
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                                    required
                                    name='ingredients'
                                ></textarea>
                                <label className="label">
                                    <span className="label-text font-bold text-white"> Making Procedure: </span>
                                </label>
                                <textarea
                                    rows="3"
                                    placeholder="Write your message here..."
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                                    required
                                    name='making_procedure'
                                ></textarea>
                            </div>
                            <div className="form-control mt-6 md:col-span-2 lg:col-span-2">
                                <button className="btn bg-white text-gray-600 text-xl font-bold">Add Item </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Addfood
