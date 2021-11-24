import React,{useEffect, useState} from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsBasket2 } from "react-icons/bs";
import "./style.css";


const Product = (pro) => {
  // const [product,setProduct]=useState({})

  // useEffect(() => {
  //   setProduct(pro);
  //   console.log(product);
   
  // }, []);
  console.log("pro",pro);
  

  // console.log(pro);
  
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
              <p key={i}>
                <AiOutlineStar />
              </p>
            ))}
        </div>
        <img src={pro.image[0]} alt="product image" />
        <button onClick={() => addToBasket(pro._id)}>
          <BsBasket2 />
        </button>
      </div>
    </div>
  );
};

export default Product;
