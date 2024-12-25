import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
const Gallery = () => {
    const [foods, setFoods] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);
    useEffect(() => {
        fetch('http://localhost:3000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const openLightBox = (index) => {
        setCurrentImg(index);
        setOpen(true);
    }
    return (
        <div>
            <div>
                <img src="https://i.ibb.co.com/zHNn0Pc/1694673859-4182.jpg" className='h-[650px] w-full  object-cover' alt="" />
            </div>
            <div>
                <div className='w-4/5 mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-40'>
                    {
                        foods.map((food, index) => (
                            <div>
                                <img src={food.food_image} className='w-96 h-96 rounded-2xl'
                                    onClick={() => openLightBox(index)}></img>
                                <div
                                    className="overlay absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-b-2xl"
                                    style={{
                                        opacity: '0',
                                        transition: 'opacity 0.3s ease-in-out',
                                    }}
                                >
                                    <h3>{food.food_name}</h3>
                                    {/* <p>{food.description}</p> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Lightbox */}
                {open && (
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        index={currentImg}
                        slides={foods.map((food) => ({
                            src: food.food_image,
                            alt: food.food_name,
                            caption: `${food.food_name} - ${food.price}`,
                        }))}
                    />
                )}
            </div>
        </div>
    )
}

export default Gallery
