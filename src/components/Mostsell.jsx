import React from 'react'
import { Link } from 'react-router-dom'

const Mostsell = ({ data }) => {
    return (
        <div className='w-[95%] lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-20 gap-10'>
            {
                data.map((food) => (
                    <div key={food._id} className="card shadow-xl p-4 border-4 border-gray-600">
                        <figure>
                            <img src={food.food_image} alt={food.food_name} className='h-96 w-full object-cover' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-gray-600">{food.food_name}
                                <div className="badge bg-gray-600 text-white">${food.price}</div>
                            </h2>
                            <p className='text-gray-600 font-bold'>Food Category: {food.food_category}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline text-white bg-gray-600 p-2">{food.food_category}</div>
                                <div className="badge badge-outline text-white bg-gray-600 p-2">{food.quantity} items available</div>
                            </div>
                            <Link to={`/singlefood/${food._id}`}>
                                <button className='btn bg-gray-600 text-white font-bold'>See Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
                <Link to='/allfood'><button className='btn text-lg font-bold text-white bg-gray-600'>See All Item...</button></Link>

        </div>
    )
}


export default Mostsell
