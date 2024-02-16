import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import './style.css';


function CheckoutProduct({pro}) {
    const removeCart = (id) => {
        
    }
    return (
        <div className="checkoutProduct">
            <img src={pro.image[0]} className="checkoutProduct-image" />
            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">
                    {pro.name}
                </p>
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{pro.price}</strong>
                </p>
                <div className="checkoutProduct-rating">
                    {Array(pro.rating).fill.map((_,i)=>
                    <p><AiOutlineStar /></p>)}
                </div>
                <button onClick={()=>removeCart(pro._id)}>
                    Remove from basket
                </button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
