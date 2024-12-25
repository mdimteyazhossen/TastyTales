import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext/Authcontext';

const Myorders = () => {
    const {user} = useContext(AuthContext);
    const email = 'a?bc@jmail.com';
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/myorders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    //delete food
    const handleDelete = _id => {
        console.log(_id)
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
                fetch(`http://localhost:3000/orderfoods/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });
                            setProducts(prevProducts => prevProducts.filter(item => item._id !== _id));
                        }
                    })
            }
        });
    }
    return (
            <div className='my-20 lg:w-[90%] mx-auto pt-10'>
                {/* {orders.map((order, index) => (
                    <div className="card card-side bg-base-100 shadow-xl" key={index}>
                        <figure>
                            <img
                                src={order.food_image}
                                alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{order.food_name}</h2>
                            <p>{order.price}</p>
                            <p>{order.quantity}</p>
                            <p>{order.currentDateTime}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleDelete(order._id)} className="btn bg-red-600">X</button>
                            </div>
                        </div>
                    </div>
                ))} */}
                <h1 className='text-3xl font-bold text-gray-600'>Your Order:</h1>
                {orders.map((order, index) => (
                    <div key={order._id} className=' p-2 lg:p-20'>
                        <div className="card bg-white lg:card-side  shadow-xl p-5 border-gray-600 border-4">
                            <figure>
                                <img
                                    src={order.food_image}
                                    alt="Album" className='w-[100%] md:w-[50%] lg:w-[100%] h-[250px] mx-auto rounded-xl' />
                            </figure>
                            <div className="card-body text-gray-600">
                                <h2 className="card-title">{order.food_name}</h2>
                                <p>Price: <span>{order.price}$ per piece</span></p>
                                <p>Buying Time: <span>{order.currentDateTime}</span></p>
                            </div>
                            <div className='items-center my-auto lg:grid gap-2 lg:gap-5 mx-auto'>
                            <button onClick={() => handleDelete(order._id)} className="btn bg-red-600">X</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        )
    }

    export default Myorders
