import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BsBasket2 } from "react-icons/bs";
import axios from "axios";
import "./style.css";

const Product = ({ pro }) => {
  const navigate = useNavigate();
  // const [prod,setProd]=useState(null);

  // useEffect(() => {
  //   setProd(pro);
  //   // console.log(pro);

  // }, []);
  console.log("pro", pro);

  const addToBasket = (id) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      let email = user.email;
      let cart = user.cart;
      cart.push(id);
      let newUser = {
        email: email,
        cart: cart,
      };
      axios.put("http://localhost:5000/user", { email:email, id: id });
      sessionStorage.setItem("user", JSON.stringify(newUser));
    } else {
      navigate("/signin");
    }
  };
  return (
    <div className="product">
      {pro && (
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
      )}
    </div>
  );
};

export default Product;
