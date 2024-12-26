import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
const Gallery = () => {
    const [foods, setFoods] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);
    useEffect(() => {
        fetch('https://assignment-11-server-eta-six.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const openLightBox = (index) => {
        setCurrentImg(index);
        setOpen(true);
    }
    return (
        <div>
            <div className="relative h-[600px] md:h=[600px] lg:h-[650px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/zHNn0Pc/1694673859-4182.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6">
                    <div>
                        <h1 className="text-5xl font-bold mb-4">Delicious Food Gallery</h1>
                        <p className="text-lg max-w-3xl mx-auto">Explore the finest selection of mouth-watering dishes from around the world. Our gallery showcases a variety of flavors and culinary delights that are sure to satisfy your taste buds.</p>
                    </div>
                </div>
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
