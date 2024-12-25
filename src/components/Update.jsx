import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../context/AuthContext/Authcontext';

const Update = () => {
    const data = useLoaderData();
    // console.log(data)
    const { user } = useContext(AuthContext);
    const { email, description, food_category, food_name, _id, food_image, food_origin, price, quantity } = data;
    const handleUpdate = e => {
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
        newfood.email = email;
        console.log(newfood)
        fetch(`http://localhost:3000/foods/${_id}`, {
            method: 'PUT',
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
        <div className=" bg-base-200 mb-10">
            <div className=" flex-col lg:flex-row-reverse">
                <div className="relative mb-5 h-[550px] md:h-[450px] lg:h-[600px]">
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/JKT1S8F/depositphotos-312096012-stock-photo-render-wooden-style-cafe-restaurant.webp')",
                        }}
                    ></div>
                    <div className="relative z-10 text-white flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                        <div className="text-center">
                            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Update Food Details</h1>
                            <p className="mt-4 lg:text-lg">Modify or update the details of your menu items to keep your offerings fresh and accurate. Whether it's a new price, description, or image, updating is easy. Make sure your customers always have the latest information about your delicious dishes!</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-gray-600   shrink-0 shadow-2xl w-4/5 mx-auto">
                    <form onSubmit={handleUpdate} className="card-body grid grid-cols-1 md:grid-cols-2 mlg:grid-cols-2 gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-xl font-bold text-white">Name:</span>
                            </label>
                            <input type="name" placeholder="food name" className="input input-bordered border-gold" required disabled value={user?.displayName} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-xl font-bold text-white">Email:</span>
                            </label>
                            <input type="name" placeholder="food name" className="input input-bordered border-gold" required disabled value={email} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Food Name: </span>
                            </label>
                            <input name='food_name' type="name" defaultValue={food_name} placeholder="food name" className="input input-bordered border-gold" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Food ImageURL: </span>
                            </label>
                            <input name='food_image' defaultValue={food_image} type="name" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Food Category: </span>
                            </label>
                            <input name='food_category' defaultValue={food_category} type="name" placeholder="food category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Food Quantity: </span>
                            </label>
                            <input name='quantity' defaultValue={quantity} type="number" placeholder="Food Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Food Price: </span>
                            </label>
                            <input name='price' defaultValue={price} type="number" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Food Origin: </span>
                            </label>
                            <input name='food_origin' defaultValue={food_origin} type="name" placeholder="Enter country name" className="input input-bordered" required />
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
                                defaultValue={description.ingredients}
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
                                defaultValue={description.making_procedure}
                            ></textarea>
                        </div>
                        <div className="form-control mt-6 md:col-span-2 lg:col-span-2">
                            <button className="btn bg-white text-gray-600 text-xl font-bold">Update Food </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update
