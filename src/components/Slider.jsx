import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); 
  const slides = [
    {
      id: 1,
      image: 'https://i.ibb.co.com/DGLJP80/photo-1691171047403-0abfd83f0ea7.jpg',
      caption: 'Explore the Best Dishes',
      description: 'From appetizers to desserts, discover a wide variety of delicious foods.',
      animationType: 'left-slide', 
    },
    {
      id: 2,
      image:  'https://i.ibb.co/HKDV7ZM/top-view-delicious-gourmet-dishes-with-different-vegetables-meat-181624-51302.jpg',
      caption: 'Golden Hour Delights',
      description: 'Experience the joy of eating with stunning views during golden hour.',
      animationType: 'zoom-in', 
    },
    {
      id: 3,
      image:  'https://i.ibb.co/ykzQDd1/pexels-photo-2983101.jpg',
      caption: 'Waves and Serenity',
      description: 'Relax with a delicious meal by the ocean and feel the tranquility.',
      animationType: 'fade-in', 
    },
    {
      id: 4,
      image: 'https://i.ibb.co/zRT88Yg/pexels-photo-1267320.jpg',
      caption: 'Mountain Adventure',
      description: 'Savor mouthwatering dishes after an exciting mountain adventure.',
      animationType: 'right-slide', 
    },
  ];


  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); 
  };


  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); 
  };


  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); 


    return () => clearInterval(interval);
  }, []);

  
  const handleButtonClick = () => {
    navigate('/allfood'); 
  };

  // Animation variants for different animations
  const animationVariants = {
    'left-slide': {
      initial: { opacity: 0, x: -100 }, // Start off-screen from left
      animate: { opacity: 1, x: 0 }, // Move to center
      exit: { opacity: 0, x: 100 }, // Exit to the right
    },
    'right-slide': {
      initial: { opacity: 0, x: 100 }, // Start off-screen from right
      animate: { opacity: 1, x: 0 }, // Move to center
      exit: { opacity: 0, x: -100 }, // Exit to the left
    },
    'zoom-in': {
      initial: { opacity: 0, scale: 1.2 }, // Start with zoomed out
      animate: { opacity: 1, scale: 1 }, // Zoom to normal size
      exit: { opacity: 0, scale: 1.2 }, // Zoom out again
    },
    'fade-in': {
      initial: { opacity: 0 }, // Start invisible
      animate: { opacity: 1 }, // Fade in
      exit: { opacity: 0 }, // Fade out
    },
  };

  return (
    <div className="relative h-[90vh] md:h-[90vh] lg:h-screen w-full overflow-hidden">
      {/* Slide Container with Framer Motion for smooth transitions */}
      <motion.div
        className="absolute inset-0"
        key={currentSlide}
        initial={animationVariants[slides[currentSlide].animationType].initial}
        animate={animationVariants[slides[currentSlide].animationType].animate}
        exit={animationVariants[slides[currentSlide].animationType].exit}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {/* Slide Image with Background and Transition */}
        <div
          className="h-full w-full bg-center bg-cover absolute"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          {/* Caption and Description */}
          <div className="absolute bottom-20 md:bottom-28 lg:bottom-28 left-0 md:left-20 lg:left-20 text-white px-4 sm:px-8 py-2 sm:py-4 w-full">
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
              initial={{ opacity: 0, x: 2000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {slides[currentSlide].caption}
            </motion.h1>
            <motion.p
              className="text-sm md:text-xl lg:text-xl mb-6"
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.button
              onClick={handleButtonClick}
              className="bg-white text-gray-600 px-6 py-3 rounded-lg mg:text-xl lg:text-lg sm:text-xl font-semibold"
              initial={{ scale: 0.9, y: 500 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              View All Foods
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Prev and Next buttons */}
      <motion.button
        onClick={goToPrevSlide}
        className="absolute left-8 top-1/2 transform bg-white bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        &lt;
      </motion.button>
      <motion.button
        onClick={goToNextSlide}
        className="absolute right-8 top-1/2 transform bg-white bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        &gt;
      </motion.button>

      {/* Optional: Slide Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'bg-gray-700' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentSlide(index)} // Jump to specific slide on dot click
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
