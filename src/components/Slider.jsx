// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // React Router v6's useNavigate hook

// const Banner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate(); // React Router v6 hook for navigation

//   // Array of slides with background images and captions
//   const slides = [
//     {
//       id: 1,
//       image: 'https://i.ibb.co.com/DGLJP80/photo-1691171047403-0abfd83f0ea7.jpg',
//       caption: 'Explore the Best Dishes',
//       description: 'From appetizers to desserts, discover a wide variety of delicious foods.',
//     },
//     {
//       id: 2,
//       image: 'https://i.ibb.co.com/HKDV7ZM/top-view-delicious-gourmet-dishes-with-different-vegetables-meat-181624-51302.jpg',
//       caption: 'Golden Hour Delights',
//       description: 'Experience the joy of eating with stunning views during golden hour.',
//     },
//     {
//       id: 3,
//       image: 'https://i.ibb.co/ykzQDd1/pexels-photo-2983101.jpg',
//       caption: 'Waves and Serenity',
//       description: 'Relax with a delicious meal by the ocean and feel the tranquility.',
//     },
//     {
//       id: 4,
//       image: 'https://i.ibb.co/zRT88Yg/pexels-photo-1267320.jpg',
//       caption: 'Mountain Adventure',
//       description: 'Savor mouthwatering dishes after an exciting mountain adventure.',
//     },
//   ];

//   // Function to go to the next slide
//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length); // Cycle forward
//   };

//   // Function to go to the previous slide
//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Cycle backward
//   };

//   // Use effect to set an interval for auto-sliding
//   useEffect(() => {
//     const interval = setInterval(goToNextSlide, 5000); // 5 seconds interval for each slide

//     // Clear the interval when the component is unmounted
//     return () => clearInterval(interval);
//   }, []);

//   // Redirect to "All Foods" page
//   const handleButtonClick = () => {
//     navigate('/all-foods'); // Using useNavigate for navigation in React Router v6
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Slide Container */}
//       <div className="absolute inset-0 transition-all duration-700 ease-in-out">
//         {/* Slide Image with Transition */}
//         <div
//           className="h-full w-full bg-center bg-cover absolute transition-opacity duration-700 ease-in-out"
//           style={{
//             backgroundImage: `url(${slides[currentSlide].image})`,
//             opacity: 1,
//           }}
//         >
//           {/* Caption and Description */}
//           <div className="absolute bottom-24 left-8 text-white px-8 py-4">
//             <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate__animated animate__fadeIn">
//               {slides[currentSlide].caption}
//             </h1>
//             <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
//               {slides[currentSlide].description}
//             </p>
//             <button
//               onClick={handleButtonClick}
//               className="bg-gold text-white px-6 py-3 rounded-lg text-lg font-semibold transform transition-all duration-300 hover:bg-gold"
//             >
//               View All Foods
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Prev Button */}
//       <button
//         onClick={goToPrevSlide}
//         className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-gold bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
//       >
//         &lt;
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={goToNextSlide}
//         className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gold bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
//       >
//         &gt;
//       </button>

//       {/* Optional: Slide Indicators (Dots) */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`w-4 h-4 rounded-full cursor-pointer ${
//               index === currentSlide ? 'bg-gold' : 'bg-gray-500'
//             }`}
//             onClick={() => setCurrentSlide(index)} // Jump to specific slide on dot click
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // React Router v6 hook for navigation

  // Array of slides with background images, captions, and descriptions
  const slides = [
    {
      id: 1,
      image: 'https://i.ibb.co.com/DGLJP80/photo-1691171047403-0abfd83f0ea7.jpg',
      caption: 'Explore the Best Dishes',
      description: 'From appetizers to desserts, discover a wide variety of delicious foods.',
      animationType: 'left-slide', // Slide in from left
    },
    {
      id: 2,
      image: 'https://i.ibb.co/HKDV7ZM/top-view-delicious-gourmet-dishes-with-different-vegetables-meat-181624-51302.jpg',
      caption: 'Golden Hour Delights',
      description: 'Experience the joy of eating with stunning views during golden hour.',
      animationType: 'zoom-in', // Zoom in effect
    },
    {
      id: 3,
      image: 'https://i.ibb.co/ykzQDd1/pexels-photo-2983101.jpg',
      caption: 'Waves and Serenity',
      description: 'Relax with a delicious meal by the ocean and feel the tranquility.',
      animationType: 'fade-in', // Fade-in effect
    },
    {
      id: 4,
      image: 'https://i.ibb.co/zRT88Yg/pexels-photo-1267320.jpg',
      caption: 'Mountain Adventure',
      description: 'Savor mouthwatering dishes after an exciting mountain adventure.',
      animationType: 'right-slide', // Slide in from right
    },
  ];

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Cycle forward
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Cycle backward
  };

  // Use effect to set an interval for auto-sliding
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // 5 seconds interval for each slide

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  // Redirect to "All Foods" page
  const handleButtonClick = () => {
    navigate('/all-foods'); // Using useNavigate for navigation in React Router v6
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
    <div className="relative h-1/2 md:h-4/5 lg:h-screen w-full overflow-hidden">
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
          className="h-full w-full bg-center bg-cover absolute bg-gray-600"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          {/* Caption and Description */}
          <div className="absolute bottom-24 left-8 text-white px-8 py-4">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4"
              initial={{ opacity: 0, x:2000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {slides[currentSlide].caption}
            </motion.h1>
            <motion.img 
            src='https://i.ibb.co.com/hD3kpCS/Screenshot-2024-12-22-132410.png'
              className="text-4xl md:text-6xl font-extrabold mb-4 absolute top-0 right-20"
              initial={{ opacity: 0, x:2000 }}
              animate={{ opacity: 1, x: 1000 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
            </motion.img>
            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0, y: -300, x:500 }}
              animate={{ opacity: 1, y: 0 , x:0}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.button
              onClick={handleButtonClick}
              className="bg-gold text-white px-6 py-3 rounded-lg text-lg font-semibold"
              initial={{ scale: 0.9, y:500 }}
              animate={{ scale: 1, y:0 }}
              transition={{ duration: 1 }}
            >
              View All Foods
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Prev Button with Motion */}
      <motion.button
        onClick={goToPrevSlide}
        className="absolute left-8 top-1/2 transform  bg-gold bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        &lt;
      </motion.button>

      {/* Next Button with Motion */}
      <motion.button
        onClick={goToNextSlide}
        className="absolute right-8 top-1/2 transform  bg-gold bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        &gt;
      </motion.button>

      {/* Optional: Slide Indicators (Dots) without "White Light" effect */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'bg-gold' : 'bg-gray-500'
            }`} 
            onClick={() => setCurrentSlide(index)} // Jump to specific slide on dot click
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

