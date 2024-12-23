import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Singlefood = () => {
  const data = useLoaderData();
  console.log(data)
  const {description, food_category,food_name,_id,food_image,food_origin, price,quantity} = data;
//   description
// : 
// ingredients
// : 
// Array(7)
// 0
// : 
// "Halal chicken"
// 1
// : 
// "Garlic"
// 2
// : 
// "Lemon juice"
// 3
// : 
// "Olive oil"
// 4
// : 
// "Yogurt"
// 5
// : 
// "Spices (cumin, coriander, paprika, turmeric)"
// 6
// : 
// "Pita bread"
// length
// : 
// 7
// [[Prototype]]
// : 
// Array(0)
// making_procedure
// : 
// Array(3)
// 0
// : 
// "Marinate chicken with yogurt, garlic, lemon juice, and spices."
// 1
// : 
// "Grill the chicken on a vertical rotisserie or pan-fry."
// 2
// : 
// "Serve the chicken in pita bread with garlic sauce and vegetables."
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)
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
// "605c72ef1532073ebc1f84df"

  return (
    <div className="hero my-20 w-4/5 mx-auto bg-gold" id={_id}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={food_image}
          className="max-w-sm rounded-2xl shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{food_name}</h1>
          <p className="py-6">
            {food_category}
          </p>
          <div>
          <p className="py-6">
            {description.ingredients.map(desc=>(<li>{desc}</li>))}
          </p>
          </div>
          <p className="py-6">
            {description.making_procedure.map(desc=>(<li>{desc}</li>))}
          </p>
          <p>{price}</p>
          <p>{food_origin}</p>
          <p>{quantity}</p>
          <button className="btn btn-primary">Purtue</button>
        </div>
      </div>
    </div>
  )
}

export default Singlefood
