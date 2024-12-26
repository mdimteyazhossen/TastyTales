import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Singlefood = () => {
  const data = useLoaderData();
  console.log(data)
  const { description, food_category, food_name, _id, food_image, food_origin, price, quantity , purchase} = data;
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
    // <div className="hero my-20 w-4/5 mx-auto bg-gold" id={_id}>
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <img
    //       src={food_image}
    //       className="max-w-sm rounded-2xl shadow-2xl" />
    //     <div>
    //       <h1 className="text-5xl font-bold">{food_name}</h1>
    //       <p className="py-6">
    //         {food_category}
    //       </p>
    //       <div>
    //       <p className="py-6">
    //         {description.ingredients.map(desc=>(<li>{desc}</li>))}
    //       </p>
    //       </div>
    //       <p className="py-6">
    //         {description.making_procedure.map(desc=>(<li>{desc}</li>))}
    //       </p>
    //       <p>{price}</p>
    //       <p>{food_origin}</p>
    //       <p>{quantity}</p>
    //       <Link to={`/foodpurchase/${_id}`}><button className="btn btn-primary">Purchase</button></Link>
    //     </div>
    //   </div>
    // </div>
    <div className='grid gap-10 bg-white text-gray-600 w-[90%] m-5 lg:w-[80%] mx-auto p-4  border-2 border-gray-600 rounded-3xl my-28'>
      <div className='grid lg:flex gap-5 items-center'>
        <img src={food_image} alt="" className=' w-full md:w-full lg:w-3/5 max-h-[500px] rounded-3xl  mx-auto object-cover' />
        <div className='grid gap-2 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-1  w-full md:w-full lg:w-2/5'>
          <h1 className='text-xl lg:text-4xl font-bold'>Food Name: {food_name}</h1>
          
            
              <p className='text-xl lg:text-3xl font-bold'>Food Origin: {food_origin}</p>
              {/* <p className='lg:text-xl font-bold ml-20 lg:w-[250px] mx-auto'>{}<p> */}
            {/* </div>
            <div className='grid gap-3' > */}
              <p className='text-xl lg:text-2xl'>Price: <span className='font-bold'>{price}$ per piece</span></p>
              {/* <p className='text-xl lg:text-2xl'>Category: <span className='font-bold'>{}</span></p> */}
              {/* <p className='bg-green-600 text-base-100 text-xl lg:text-2xl font-bold text-center p-2 px-5 rounded-3xl'>{category}</p> */}
              <p className='text-xl lg:text-2xl'>Rating: <span className='bg-gray-600 text-base-100 text-xl lg:text-2xl font-bold text-center p-2 px-5 rounded-3xl'>4.5</span></p>
              <p className='text-xl lg:text-2xl'>Quantity: <span className='font-bold'>{quantity}</span> Piece is Available</p>
            {/* </div> */}
              <p className='text-xl lg:text-2xl'>Today Sell: <span className='font-bold'>{purchase}</span> Piece is Already selled.</p>
            {/* </div> */}
        
        </div>
      </div>
      <div className='grid gap-2 lg:gap-5'>
        <p className="text-xl lg:text-3xl font-bold">Description:</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <p className="py-6">
            <p>Ingredients :</p>
            <p>{description.ingredients.map(desc => (<li>{desc}</li>))}</p>
          </p>
          <p className="py-6">
            <p>Making Procedure:</p>
            <p>{description.making_procedure.map(desc => (<li>{desc}</li>))}</p>
          </p>
        </div>
      </div>
      <Link to={`/foodpurchase/${_id}`}><button className="btn w-2/5 text-xl font-bold text-white bg-gray-600">Purchase</button></Link>
    </div>
  )
}

export default Singlefood
