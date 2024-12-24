import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Update from '../components/Update';

const Myfoodpage = () => {
    const email = 'mahi@gmail.com';
    const [myFoods, setMyFoods] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    useEffect(() => {
        fetch(`http://localhost:3000/AddingFoods?email=${email}`)
            .then(res => res.json())
            .then(data => setMyFoods(data))
    }, [])
    // console.log(myFoods.length)
    return (
        <div className="overflow-x-auto my-40">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Food Name</th>
                        <th>Price</th>
                        <th>Food origin</th>
                        <th>Details</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {myFoods.length > 0 ?
                        myFoods.map(food => (
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={food.food_image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{food.food_name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{food.price} $ per plate</p>
                                </td>
                                <td>{food.food_origin}</td>
                                <th>
                                    <Link to={`/singlefood/${food._id}`}><button className='btn'>See Details</button></Link>
                                </th>
                                <th>
                                    <div>
                                        <button className="btn" onClick={openModal}>Open Update Modal</button>

                                        {/* Pass the modal state down to the Update component */}
                                        <Update isModalOpen={isModalOpen} closeModal={closeModal} />
                                    </div>
                                </th>
                            </tr>
                        ))
                        :
                        (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No food items available
                                </td>
                            </tr>
                        )}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th>Image</th>
                        <th>Food Name</th>
                        <th>Price</th>
                        <th>Food origin</th>
                        <th>Details</th>
                        <th>Update</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Myfoodpage
