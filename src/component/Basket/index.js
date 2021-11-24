import React, { useEffect, useState } from "react";
// import CheckoutProduct from "../checkoutProduct";
import { AiOutlineStar } from "react-icons/ai";
import Subtotal from "../Subtotal";

function Basket() {
    const [cartsId,setCartsId]=useState([]);
  const [basket, setBasket] = useState([]);

  const getBasketProduct=()=>{
    const user=JSON.parse(sessionStorage.getItem("user"));
    if(user){
        const cart=user.cart;
        cart.map(item=>{
            
        })
        setBasket(cart)
    }
  }

  const removeCart = (id) => {
        
}

  useEffect(() => {
    getBasketProduct();
  }, []);

  useEffect(() => {
    getBasketProduct();
  }, [basket]);

  return (
    <div className="checkout">
      {/* <div className="checkout-left">
        <img
          className="checkout-left"
          src="https://i.pinimg.com/236x/30/45/d6/3045d6e4080109bd6b6645cf104ea94b.jpg"
          alt="basket logo"
        />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {basket && (basket.map(item=>{
              return(
                    <div className="checkoutProduct">
                    <img src={item.image[0]} className="checkoutProduct-image" />
                    <div className="checkoutProduct-info">
                        <p className="checkoutProduct-title">
                            {item.name}
                        </p>
                        <p className="checkoutProduct-price">
                            <small>$</small>
                            <strong>{item.price}</strong>
                        </p>
                        <div className="checkoutProduct-rating">
                            {Array(item.rating).fill.map((_,i)=>
                            <p><AiOutlineStar /></p>)}
                        </div>
                        <button onClick={()=>removeCart(item._id)}>
                            Remove from basket
                        </button>
                    </div>
                    
                </div>
          )}))}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div> */}
    </div>
  );
}

export default Basket;
