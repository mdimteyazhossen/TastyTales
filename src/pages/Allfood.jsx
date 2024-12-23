import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Allfood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    // conaole.log(foods)
    
// description
// : 
// ingredients
// : 
// (7) ['Halal chicken', 'Garlic', 'Lemon juice', 'Olive oil', 'Yogurt', 'Spices (cumin, coriander, paprika, turmeric)', 'Pita bread']
// making_procedure
// : 
// (3) ['Marinate chicken with yogurt, garlic, lemon juice, and spices.', 'Grill the chicken on a vertical rotisserie or pan-fry.', 'Serve the chicken in pita bread with garlic sauce and vegetables.']
// [[Prototype]]
// : 
// Object
// food_category
// : 
// "Middle Eastern"
// food_image
// : 
// "https://i.ibb.co.com/JQCttR4/chicken-shawarma-6.jpg"
// food_name
// : 
// "Chicken Shawarma"
// food_origin
// : 
// "Lebanon"
// price
// : 
// 9.99
// quantity
// : 
// 30
// _id
// : 
// "1"
    return (
        <div className='w-4/5 grid grid-cols-1 md:grid-cold-2 lg:grid-cols-3 mx-auto my-20 gap-10'>
            {
                foods.map(food => (
                    <div className="card bg-gold shadow-xl p-4">
                        <figure>
                            <img
                                src={food.food_image}
                                alt="Shoes"
                                className='h-96 w-full object-cover' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {food.food_name}
                                <div className="badge badge-secondary">{food.price}</div>
                            </h2>
                            <p>Food Category: {food.food_category}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{food.food_category}</div>
                                <div className="badge badge-outline">{food.quantity}</div>
                            </div>
                            <Link to={`/singlefood/${food._id}`}><button className='btn'>See Details</button></Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Allfood
