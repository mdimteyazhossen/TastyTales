import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Update from '../components/Update';
import AuthContext from '../context/AuthContext/Authcontext';

const Myfoodpage = () => {
    const { user } = useContext(AuthContext);
    // const email = 'mahi@gmail.com';
    const [myFoods, setMyFoods] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/AddingFoods?email=${user?.email}`)
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
                        <th className='lg:text-xl font-bold text-gray text-center'>Image</th>
                        <th className='lg:text-xl font-bold text-gray text-center'>Food Name</th>
                        <th className='lg:text-xl font-bold text-gray text-center'>Price</th>
                        <th className='lg:text-xl font-bold text-gray text-center'>Food origin</th>
                        <th className='lg:text-xl font-bold text-gray text-center'>Details</th>
                        <th className='lg:text-xl font-bold text-gray text-center'>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {myFoods.length > 0 ?
                        myFoods.map(food => (
                            <tr>
                                <td>
                                    <div className="flex items-center justify-center gap-3">
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
                                    <div className="flex items-center gap-3 justify-center">
                                        <div className="font-bold">{food.food_name}</div>
                                    </div>
                                </td>
                                <td>
                                    <p className='text-center'>{food.price} $ per plate</p>
                                </td>
                                <td className='text-center'>{food.food_origin}</td>
                                <td className=''>
                                    <Link to={`/singlefood/${food._id}`}><button className='btn bg-gray-600 text-white'>See Details</button></Link>
                                </td>
                                <td className=''>
                                        <Link to={`/update/${food._id}`}><button className='btn bg-gray-600 text-white'>Update</button></Link>
                
                                </td>
                            </tr>
                        ))
                        :
                        (
                            <tr>
                                <td colSpan="6" className="text-center lg:text-2xl font-bold">
                                    No food items available
                                </td>
                            </tr>
                        )}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th className='lg:text-xl font-bold text-gray-600 text-center'>Image</th>
                        <th className='lg:text-xl font-bold text-gray-600 text-center'>Food Name</th>
                        <th className='lg:text-xl font-bold text-gray-600 text-center'>Price</th>
                        <th className='lg:text-xl font-bold text-gray-600 text-center'>Food origin</th>
                        <th className='lg:text-xl font-bold text-gray-600 text-center' >Details</th>
                        <th className='lg:text-xl font-bold text-gray-600 text-center'>Update</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Myfoodpage
