import React from 'react'
import Slider from '../components/Slider'
import { useLoaderData } from 'react-router-dom'
import Mostsell from '../components/Mostsell';

const Home = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>
      <Slider />
      <div className='my-10'>
        <h1 className='text-3xl font-bold text-center'>Our Top Selling Foods</h1>
        <Mostsell data={data} />
      </div>

    </div>
  )
}

export default Home
