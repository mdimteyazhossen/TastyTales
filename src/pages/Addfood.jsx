import Lottie from 'lottie-react'
import React, { useContext, useState } from 'react'
import addproductAnimation from './../assets/lottie/uy66j02Xou.json'
import AuthContext from '../context/AuthContext/Authcontext'
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
        fetch('http://localhost:3000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newfood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div className="hero bg-base-200 lg:w-4/5 mx-auto my-20">
            <div className=" flex-col lg:flex-row-reverse">
                <div className="card bg-gold w-full  shrink-0 shadow-2xl">
                    <form onSubmit={handleFoodAdd} className="card-body grid grid-cols-1 md:grid-cols-2 mlg:grid-cols-2 gap-10">

                        <div className=" row-span-1 md:row-span-3 lg:row-span-4">
                            <Lottie animationData={addproductAnimation}></Lottie>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-xl font-bold text-white">Name: Md Imteyaz Hossen</span>
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
                            <h1>Decription:</h1>
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
                            <button className="btn bg-white text-gold text-xl font-bold">Add Item </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addfood
