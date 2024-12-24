import moment from 'moment';
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Foodpurchase = () => {
    const data = useLoaderData();
    const userEmail = "abc@jmail.com"
    console.log(data)
    const { email, description, food_category, food_name, _id, food_image, food_origin, price, quantity } = data;
    const [buyQuantity, setBuyQuantity] = useState(); 
    const currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    const handlePurchase =()=>{
        if (buyQuantity> quantity){
            alert(`sorry ${quantity} item is avialable`)
            return ;
        }
        if (buyQuantity< 1){
            alert("You should enter greter than 0")
            return ;
        }
        const order = {email, description, food_category, food_name, _id, food_image, food_origin, price, quantity};
        order.quantity= quantity-buyQuantity;
        console.log(order)
        //remove quantity
        fetch(`http://localhost:3000/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        // order data
        const addOrder = { food_name, food_image, price, quantity,currentDateTime, userEmail};
        fetch('http://localhost:3000/orderfoods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={food_image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{food_name}</h1>
                    <p className="py-2">Price: {price} $ per piece. </p>
                    <p className="py-2">Quentity: {quantity} </p>
                    <p className="py-2">Buyer Name: Imteyaz </p>
                    <p className="py-2">Buyer Email: Imteyaz@gmail.com </p>
                    <p className="py-2">Quentity: {quantity > 0 ? quantity : "Item is not avilable"} </p>
                    <p>
                        <label>How many pieces you will buy:</label>
                        <input type="number" onChange={(e)=> setBuyQuantity(e.target.value)} placeholder="Enter the number " className="input input-bordered w-full max-w-xs" />
                    </p>
                    {quantity > 0 ?
                        <button className="btn btn-primary" onClick={handlePurchase}>Purchase</button>
                        :
                        <button className="btn btn-primary" disabled={true}>Purchase</button>
                        }
                </div>
            </div>
        </div>
    )
}

export default Foodpurchase
