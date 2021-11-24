import React, { useState } from "react";
import CheckoutProduct from "../checkoutProduct";
import Subtotal from "../Subtotal";

function Basket() {
  const [basket, setBasket] = useState(null);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-left"
          src="https://i.pinimg.com/236x/30/45/d6/3045d6e4080109bd6b6645cf104ea94b.jpg"
          alt="basket logo"
        />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {/* {basket.map(item=>{
                    <CheckoutProduct 
                    id={item._id} 
                    name={item.name}
                    image={item.image[0]} 
                    price={item.price}
                    rating={item.rating} 
                    />
                })} */}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Basket;
