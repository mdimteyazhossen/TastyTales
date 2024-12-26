import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import AuthContext from '../context/AuthContext/Authcontext';
import Lottie from 'lottie-react';
import purchaseLottie from './../assets/lottie/purchaseLottie.json';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Foodpurchase = () => {
    const { user } = useContext(AuthContext);
    const [data, sedata] = useState([]);
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();

    useEffect(() => {
        axiosSecure.get(`/foodspurchase/${id}`)
            .then(res => sedata(res.data));
    }, [user.email]);

    const userEmail = user?.email;
    const { email, description, food_category, food_name, _id, food_image, food_origin, price, quantity, purchase } = data;
    const [buyQuantity, setBuyQuantity] = useState();
    const currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    const handlePurchase = (e) => {
        // Check if the quantity exceeds available stock
        e.preventDefault();
        if (buyQuantity > quantity) {
            toast.error(`Sorry, only ${quantity} items are available!`); // Display error toast
            return;
        }
        // Check if the quantity is less than 1
        if (buyQuantity < 1) {
            toast.warn("You should enter a quantity greater than 0!"); // Display warning toast
            return;
        }
        if (buyQuantity == null) {
            toast.warn("You should enter a quantity greater than 0!"); // Display warning toast
            return;
        }

        // Prepare order data
        const order = { email, description, food_category, food_name, _id, food_image, food_origin, price, quantity, purchase };
        order.quantity = quantity - buyQuantity;
        order.purchase = purchase + 1;

        // Update the food quantity in the database
        fetch(`https://assignment-11-server-eta-six.vercel.app/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Purchase successful!',{
                    position:'top-center'
                }); // Display success toast after updating food quantity
            })
            .catch(error => {
                console.error('Error updating food quantity:', error);
                toast.error('Something went wrong while updating the food item.',{
                    position:'top-center'
                }); // Display error toast on failure
            });

        // Add the order to the orders collection
        const addOrder = { food_name, food_image, price, quantity, currentDateTime, userEmail };
        fetch('https://assignment-11-server-eta-six.vercel.app/orderfoods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Order placed successfully!',{
                    position:'top-center'
                }); // Display success toast after placing the order
            })
            .catch(error => {
                console.error('Error placing the order:', error);
                toast.error('Something went wrong while placing your order.',{
                    position:'top-center'
                }); // Display error toast on failure
            });
    };

    return (
        <div>
            {/* Toast Container for displaying toast notifications */}
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />

            <div className="relative mb-5 h-[550px] md:h-[450px] lg:h-[600px]">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://i.ibb.co.com/YZhy1Dk/0ee7d3ca6c321c2e1ec61042f1a3d056.jpg')",
                    }}
                ></div>
                <div className="relative z-10 text-white flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Purchase Your Favorite Meal</h1>
                        <p className="mt-4 lg:text-lg">Ready to satisfy your cravings? Select your dish, customize your order, and complete your purchase with ease. Enjoy fast delivery and secure payment options for a seamless dining experience. Order now and indulge in the best flavors!</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Purchase Now!</h1>
                        <p className="text-center">Craving something delicious? Don't wait – order now and enjoy your favorite meals delivered straight to your doorstep! Whether you're in the mood for a savory snack, a hearty meal, or a sweet treat, we've got you covered. With just a few clicks, your next culinary adventure is just a delivery away. Hurry, your cravings won't wait!</p>
                        <p className="py-6 rounded-2xl">
                            <Lottie animationData={purchaseLottie}></Lottie>
                        </p>
                    </div>
                    <div className="card bg-gray-600 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Buyer Name</span>
                                </label>
                                <input type="name" placeholder="" className="input input-bordered" value={user.displayName || ""} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Buyer Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" value={user.email || ""} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Food Name</span>
                                </label>
                                <input type="text" placeholder="Food Name" className="input input-bordered" value={food_name || ""} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Price (per piece)</span>
                                </label>
                                <input type="text" placeholder="Price" className="input input-bordered" value={`${price || ""} $`} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Quantity</span>
                                </label>
                                <input type="text" placeholder="Quantity" className="input input-bordered" value={quantity > 0 ? quantity : "Item is not available"} required />
                            </div>
                            <div className="form-control">
                                <label className='text-white'>How many pieces you will buy:</label>
                                <input type="number" onChange={(e) => setBuyQuantity(e.target.value)} placeholder="Enter the number " className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-6">
                                {quantity > 0 ?
                                    <button className="btn bg-white text-gray-600 text-xl font-bold" type='submit' onClick={handlePurchase}>Purchase</button>
                                    :
                                    <button className="btn bg-white text-gray-600 text-xl font-bold" disabled={true}>Purchase</button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodpurchase;
