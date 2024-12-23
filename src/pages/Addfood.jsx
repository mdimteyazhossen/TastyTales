import Lottie from 'lottie-react'
import React from 'react'
import addproductAnimation from './../assets/lottie/uy66j02Xou.json'
const Addfood = () => {
    return (
        <div className="hero bg-base-200 lg:w-4/5 mx-auto my-20">
            <div className=" flex-col lg:flex-row-reverse">
                <div className="card bg-gold w-full  shrink-0 shadow-2xl">
                    <form className="card-body grid grid-cols-1 md:grid-cols-2 mlg:grid-cols-2 gap-10">

                        <div className=" row-span-1 md:row-span-3 lg:row-span-4">
                            <Lottie animationData={addproductAnimation}></Lottie>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-xl font-bold text-white">Name: Md Imteyaz Hossen</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-xl font-bold text-white">Email: imteyazhossen13711@gmail.com</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Food Name: </span>
                            </label>
                            <input type="name" placeholder="email" className="input input-bordered border-gold" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Food ImageURL: </span>
                            </label>
                            <input type="name" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Quantity: </span>
                            </label>
                            <input type="name" placeholder="Food Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Food Price: </span>
                            </label>
                            <input type="number" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text font-bold text-white">Food Description: </span>
                            </label>
                            <textarea
                                rows="3"
                                placeholder="Write your message here..."
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
