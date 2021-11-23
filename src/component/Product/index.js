import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsBasket2 } from "react-icons/bs";
import "./style.css";
// import {useStateValue} from "./StateProvider";

const Product = (pro) => {
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
  const addToBasket = () => {};
  return (
    <div className="product">
      <div className="product-info">
        <p>{pro.name}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{pro.price}</strong>
        </p>
        <div className="product-rating">
          {Array(pro.rating)
            .fill()
            .map((_, i) => (
              <p>
                <AiOutlineStar />
              </p>
            ))}
        </div>
        <img src={pro.image} alt="product image" />
        <button onClick={() => addToBasket(pro._id)}>
          <BsBasket2 />
        </button>
      </div>
    </div>
  );
};

export default Product;
