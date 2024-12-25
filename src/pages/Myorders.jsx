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
            <div className='my-20'>
                {orders.map((order, index) => (
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
                ))}

            </div>
        )
    }

    export default Myorders
