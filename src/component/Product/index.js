import React,{useState} from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsBasket2 } from "react-icons/bs";
import "./style.css";
// import {useStateValue} from "./StateProvider";

const Product = (pro) => {
    // const[x,setX]=useState({pro.image[0]});
  // const [{basket},dispatch]=useStateValue();
  // const addToBasket=()=>{
  //     dispatchEvent({
  //         type:'ADD_TO_BASKET',
  //         item:{
  //             id:
  //             name:
  //             image:
  //             price:
  //             rating:
  //         },

  //     })
  // }

  console.log(pro);
  const addToBasket = () => {};
  return (
    <div className="product">
      <div className="product-info">
        <p>{pro.pro.name}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{pro.pro.price}</strong>
        </p>
        <div className="product-rating">
          {Array(pro.pro.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <AiOutlineStar />
              </p>
            ))}
        </div>
        <img src={pro.pro.image[0]} alt="product image" />
        <button onClick={() => addToBasket(pro._id)}>
          <BsBasket2 />
        </button>
      </div>
    </div>
  );
};

export default Product;
