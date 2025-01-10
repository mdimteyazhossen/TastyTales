import React from 'react'
import { Link } from 'react-router-dom'

const Mostsell = ({ data }) => {
    return (
        <div>
            <div className='w-[95%] lg:w-4/5 flex justify-center gap-x-4 gap-y-8 flex-wrap mx-auto my-20 '>
                {
                    data.map((food) => (
                        <Link to={`/singlefood/${food._id}`} key={food._id} className="card shadow-xl p-2 border-4 border-gray-600 w-80 hover:transform hover:scale-105 transition-transform duration-300">
                            <figure>
                                <img src={food.food_image} alt={food.food_name} className='h-52 w-full object-cover' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-gray-600">{food.food_name}
                                    <div className="badge bg-gray-600 text-white">${food.price}</div>
                                </h2>
                                <p className='text-gray-600 font-bold'>Food Category: {food.food_category}</p>
                                <div className="flex-wrap">
                                    {/* <div className="badge badge-outline text-white bg-gray-600 p-2">{food.food_category}</div> */}
                                    <div className="badge badge-outline text-white bg-gray-600 p-2">{food.quantity} items available</div>
                                </div>
                                {/* <Link to={`/singlefood/${food._id}`}>
                                <button className='btn bg-gray-600 text-white font-bold'>See Details</button>
                            </Link> */}
                            </div>
                        </Link>
                    ))}
            </div>
            <Link to='/allfood'><button className='btn text-lg font-bold text-white bg-gray-600'>See All Item...</button></Link>
        </div>
    )
}


export default Mostsell
