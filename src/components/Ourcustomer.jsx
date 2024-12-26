import React from 'react'

const Ourcustomer = () => {
    return (
        <div className="customer-reviews py-16  text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-600 mb-12">What Our Customers Are Saying</h2>
                <div className="flex justify-center gap-8 flex-wrap">

                    {/* Review 1 */} 
                    <div className="review-card border-4 border-gray-600 bg-white p-6 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform duration-300">
                        <img src="https://i.ibb.co.com/YbW744T/laughing-couple-sitting-with-tablets-cafe-23-2147826802.jpg" alt="Customer 1" className="rounded-2xl mb-6" />
                        <p className="text-gray-600 italic mb-4">"The food was absolutely amazing! I’ve never had a better dining experience. The ambiance was perfect too!"</p>
                        <h4 className="font-bold text-gray-800">John Doe</h4>
                        <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                    </div>

                    {/* Review 2 */}
                    <div className="review-card border-4 border-gray-600 bg-white p-6 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform duration-300">
                        <img src="https://i.ibb.co.com/8m1K97W/images.jpg" alt="Customer 2" className="rounded-2xl mb-6" />
                        <p className="text-gray-600 italic mb-4">"Delicious food and great service! I will definitely be coming back for more. Highly recommend the pizza!"</p>
                        <h4 className="font-bold text-gray-800">Jane Smith</h4>
                        <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                    </div>

                    {/* Review 3 */}
                    <div className="review-card border-4 border-gray-600 bg-white p-6 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform duration-300">
                        <img src="https://i.ibb.co.com/XDQWJJY/handsome-satisfied-bearded-man-show-okay-sign-176420-17944.jpg" alt="Customer 3" className="rounded-2xl mb-6" />
                        <p className="text-gray-600 italic mb-4">"An unforgettable experience. The staff was friendly, and the food was top-notch. Worth every penny!"</p>
                        <h4 className="font-bold text-gray-800">Mark Lee</h4>
                        <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                    </div>

                    {/* Review 4 */}
                    <div className="review-card border-4 border-gray-600 bg-white p-6 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform duration-300">
                        <img src="https://i.ibb.co.com/MgS5nPf/smiling-man-talking-smartphone-23-2147826819.jpg" alt="Customer 4" className="rounded-2xl mb-6" />
                        <p className="text-gray-600 italic mb-4">"Had a fantastic meal at this place. The dessert was heavenly! I will definitely be recommending it to my friends."</p>
                        <h4 className="font-bold text-gray-800">Emily Clark</h4>
                        <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                    </div>

                    {/* Review 5 */}
                    <div className="review-card border-4 border-gray-600 bg-white p-6 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform duration-300">
                        <img src="https://i.ibb.co.com/NY8SFRX/looking-camera-young-call-center-man-wearing-headset-his-thumb-down-isolated-white-background-141793.jpg" alt="Customer 5" className="rounded-2xl mb-6" />
                        <p className="text-gray-600 italic mb-4">"The staff went above and beyond to make our evening special. The food was exceptional, and the wine pairing was perfect!"</p>
                        <h4 className="font-bold text-gray-800">Sarah Williams</h4>
                        <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Ourcustomer
