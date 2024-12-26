import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext/Authcontext';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { ToastContainer, toast } from 'react-toastify';

const Myorders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // Fetch orders from the server
        axiosSecure.get(`/myorders?email=${user?.email}`)
            .then(res => setOrders(res.data))
            .catch(error => {
                toast.error("Error fetching orders!",{
                    position:'top-center'
                });
                // console.error(error);
            });
    }, [user?.email]); // Make sure to refetch when user's email changes

    // Delete order
    const handleDelete = _id => {
        // Show confirmation alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Call API to delete the order
                fetch(`https://assignment-11-server-eta-six.vercel.app/orderfoods/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // Successfully deleted, show success toast
                            toast.success('Order deleted successfully!',{
                                position:'top-center'
                            });
                            // Update the state by removing the deleted order
                            setOrders(prevOrders => prevOrders.filter(order => order._id !== _id));
                        } else {
                            // Failed to delete, show error toast
                            toast.error('Failed to delete the order.',{
                                position:'top-center'
                            });
                        }
                    })
                    .catch(error => {
                        toast.error('Something went wrong while deleting the order.',{
                            position:'top-center'
                        });
                        console.error(error);
                    });
            }
        });
    };

    return (
        <div>
            {/* ToastContainer to show the toast notifications */}
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />

            <div className='my-20 lg:w-[90%] mx-auto pt-10'>
                <h1 className='text-3xl font-bold text-gray-600'>Your Orders:</h1>
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    orders.map((order) => (
                        <div key={order._id} className='p-2 lg:p-20'>
                            <div className="card bg-white lg:card-side shadow-xl p-5 border-gray-600 border-4">
                                <figure>
                                    <img
                                        src={order.food_image}
                                        alt="Food" className='w-[100%] md:w-[50%] lg:w-[100%] h-[250px] mx-auto rounded-xl' />
                                </figure>
                                <div className="card-body text-gray-600">
                                    <h2 className="card-title">{order.food_name}</h2>
                                    <p>Price: <span>{order.price}$ per piece</span></p>
                                    <p>Buying Time: <span>{order.currentDateTime}</span></p>
                                </div>
                                <div className='items-center my-auto lg:grid gap-2 lg:gap-5 mx-auto'>
                                    <button onClick={() => handleDelete(order._id)} className="btn bg-red-600 text-white">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Myorders;
