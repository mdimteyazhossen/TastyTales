import React from 'react';

const ingredients = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    description: 'Handpicked from local farms, these organic tomatoes offer the perfect balance of sweetness and acidity.',
    imgSrc: 'https://i.ibb.co.com/T8jJp8f/81avk-S31x-RL-SX679.jpg',
    link: '',
    btnColor: 'bg-gray-600',
  },
  {
    id: 2,
    name: 'Handmade Pasta',
    description: 'Crafted from the finest durum wheat, this handmade pasta brings the authentic taste of Italy to your table.',
    imgSrc: 'https://i.ibb.co.com/P1YMnx3/HOMEMADE-PASTA-RECIPE-h.jpg',
    link: '',
    btnColor: 'bg-gray-600',
  },
  {
    id: 3,
    name: 'Free-Range Chicken',
    description: 'Tender, flavorful chicken raised in ethical conditions, perfect for grilling, roasting, or braising.',
    imgSrc: 'https://i.ibb.co.com/4YLnLGD/chicken-grass-field-1200x628-facebook.jpg',
    link: '',
    btnColor: 'bg-gray-600',
  },
  {
    id: 4,
    name: 'Fresh Basil',
    description: 'Locally grown and aromatic, our fresh basil adds a burst of flavor to pizzas, pastas, and salads.',
    imgSrc: 'https://i.ibb.co.com/W078Lm6/download-1.webp',
    link: '',
    btnColor: 'bg-gray-600',
  }
];

const FeaturedIngredients = () => {
  return (
    <div className="featured-ingredients py-16 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-600 mb-12">
          Featured Ingredients of the Month
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="ingredient-card bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:duration-500"
            >
              <img
                src={ingredient.imgSrc}
                alt={ingredient.name}
                className="w-full h-96 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {ingredient.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {ingredient.description}
              </p>
              <a
                href={ingredient.link}
                className={`btn-details text-white ${ingredient.btnColor} px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300`}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="btn-see-all text-white bg-gray-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-600"
          >
            Explore More Ingredients
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIngredients;
