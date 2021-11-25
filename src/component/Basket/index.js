import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
// import CheckoutProduct from "../checkoutProduct";
import { AiOutlineStar } from "react-icons/ai";
import Subtotal from "../Subtotal";

function Basket() {

  const [basket, setBasket] = useState([]);
  const [email,setEmail]=useState("")

  const getBasketProduct= async()=>{
    let user=JSON.parse(sessionStorage.getItem("user"));
    let carts=user.cart;

    console.log("user",user);

    if(user){
        const cart=carts.map(item=>{
                 console.log("item",item);
                  return  item;
                //   axios.get(
                //     `http://localhost:5000/product/id/${item}`
         } );
                //   return pro;
                console.log("cart",cart)   
                setBasket(cart)    
        }  
    }
  

  const removeCart = (id,i) => {
        
}

//   useEffect(() => {
//     getBasketProduct();
//   }, []);

  useEffect(() => {
    getBasketProduct();
  }, []);

  return (
      <>
      <Header />
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-left"
          src="https://i.pinimg.com/236x/30/45/d6/3045d6e4080109bd6b6645cf104ea94b.jpg"
          alt="basket logo"
        />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {/* {basket && (basket.map((item,i)=>{
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
                        <button onClick={()=>removeCart(item._id,i)}>
                            Remove from basket
                        </button>
                    </div>
                    
                </div>
          )}))} */}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
    </>
  );
}

export default Basket;
