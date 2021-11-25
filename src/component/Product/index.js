import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { GrLike } from "react-icons/gr";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import axios from "axios";
import "./style.css";

const Product = ({ pro }) => {
  const navigate = useNavigate();
  const [product,setProduct] =useState(pro)
  const [like,setLike]=useState(false);

  
  useEffect(() => {
    // const prod = axios.get(
    //   `http://localhost:5000/product/id/${product._id}`
    // );
    // console.log(prod.data);
    // setProduct(prod.data);

   }, [like]);
  // console.log("pro", pro);

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

  const discription =(id)=>{
    navigate(`/discription/${id}`);
  }

  const addlike =(id)=>{
   let lik=product.rating;
   lik++;
   setLike(!like);
   setProduct({_id:pro._id,kind:pro.kind,name:pro.name,specifications:pro.specifications,Notice:pro.Notice,price:pro.price,rating:lik,newe:pro.newe,image:pro.image,discound:pro.discound})
   axios.put("http://localhost:5000/product/like", { rating:lik, id: id });
  }

  return (
    <div className="product">
      {product && (
        <div className="product-info" >
          <p className="product-name">{product.name}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
          <div className="product-rating">
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <p key={i}>
                  <AiOutlineStar className="star"/>
                </p>
              ))}
          </div>
          <img src={product.image[0]} alt="product image" onClick={() => discription(product._id)}/>
          <div className="buttons">
            <GrLike onClick={() => addlike(product._id)} className="like-button"/>
            <MdOutlineAddShoppingCart onClick={() => addToBasket(product._id)} className="add-button"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
