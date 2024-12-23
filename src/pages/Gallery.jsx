import React, { useEffect, useState } from 'react'

const Gallery = () => {
    const [foods, setFoods] = useState([]);
        useEffect(() => {
            fetch('http://localhost:3000/foods')
                .then(res => res.json())
                .then(data => setFoods(data))
        }, [])
  return (
    <div>
        {
            foods.map(food=>(<img src={food.food_image} className='w-96 h-96 rounded-2xl'></img>))
        }
    </div>
  )
}

export default Gallery
