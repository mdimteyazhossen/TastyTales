import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        fetch('http://localhost:3000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(err => console.log(err));
    }, []);
    const filteredFoods = foods.filter(food =>
        food.food_name.toLowerCase().includes(searchQuery.toLowerCase())
    );



    return (
        <div>
            <div className="relative mb-5 h-[550px] md:h-[450px] lg:h-[600px]">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://i.ibb.co/6RJvWGn/indian.webp')", 
                    }}
                ></div>
                <div className="relative z-10 text-white flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Explore Our Delicious Menu (All Foods)</h1>
                        <p className="mt-4 lg:text-lg">Browse through our wide selection of mouthwatering dishes, from appetizers to desserts. Find your favorite food and satisfy your cravings today!</p>
                    </div>
                </div>
            </div>
            <div className='w-4/5 mx-auto'>
                <label className="input input-bordered flex items-center gap-2 border-gray-600 border-2">
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        className="grow text-gray-600" 
                        placeholder="Search By Food Name" 
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6 opacity-70 text-gray-600"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" 
                        />
                    </svg>
                </label>
            </div>
            <div className='w-[95%] lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-20 gap-10'>
                {
                    filteredFoods.length > 0 ? filteredFoods.map((food) => (
                        <div key={food._id} className="card shadow-xl p-4 border-4 border-gray-600">
                            <figure>
                                <img src={food.food_image} alt={food.food_name} className='h-96 w-full object-cover'/>
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
                    )) : (
                        <p className="w-full text-center text-xl font-bold text-red-600">No foods found matching your search.</p>
                    )
                }
            </div>
        </div>
    );
};

export default AllFood;
