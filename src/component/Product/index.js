import React,{useState} from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsBasket2 } from "react-icons/bs";
import "./style.css";


const Product = (pro) => {
  

  console.log(pro);
  const addToBasket = () => {};
  return (
    <div className="product">
      {console.log(pro)}
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
        <img src={pro.pro.image} alt="product image" />
        <button onClick={() => addToBasket(pro.pro._id)}>
          <BsBasket2 />
        </button>
      </div>
    </div>
  );
};

export default Product;
