import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
// import CheckoutProduct from "../checkoutProduct";
import { AiOutlineStar } from "react-icons/ai";
import Subtotal from "../Subtotal";
import "./style.css";

function Basket() {
  const [basketProducts, setBasketProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [remove,setRemove]=useState(false);
  const [total,setTotal]=useState(0);
  const [count,setCount]=useState(0);

  let productInBasket = []
  let inTotal=0;
  let inCount=0;

  const getBasketProduct = async () => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    // console.log("user", user);
    if (user) {
      let carts = user.cart;
    //   console.log("carts", carts);
      setUser(user);
      carts.forEach((item, i) => {
        getproduct(item, carts.length , i);
      });
    }
  };

  const getproduct = async (item,length, i) => {
    const product = await axios.get(`http://localhost:5000/product/id/${item}`);
    // console.log("product", product.data);
    productInBasket.push(product.data)
    inTotal+=product.data.price;
    inCount++;
    if(length - 1 === i){
      setBasketProducts(productInBasket);
      setTotal(inTotal);
      setCount(inCount);
    } 
  };

  const removeCart = (id, i) => {
    let email = user.email;
    let cart = user.cart;
    cart.splice(i, 1);
      let newUser = {
        email: email,
        cart: cart,
      };
      setUser(newUser);
    // console.log(email);
    axios.delete(`http://localhost:5000/user`, { email: email, id: id });
    // user.cart.splice(i, 1);
    sessionStorage.setItem("user", JSON.stringify(newUser));
    setRemove(!remove);
  };
  useEffect(() => {
    
  }, [remove]);



  useEffect(() => {
    getBasketProduct();
  }, [remove]);

  return (
    <>
    {console.log("sss",basketProducts)}
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
            {basketProducts.length &&
              basketProducts.map((item, i) => {
                return (
                  <div className="checkoutProduct">
                    <img
                      src={item.image[0]}
                      className="checkoutProduct-image"
                    />
                    <div className="checkoutProduct-info">
                      <p className="checkoutProduct-title">{item.name}</p>
                      <p className="checkoutProduct-price">
                        <small>$</small>
                        <strong>{item.price}</strong>
                      </p>
                      <div className="checkoutProduct-rating">
                        {Array(item.rating)
                          .fill()
                          .map((_, i) => (
                            <p>
                              <AiOutlineStar className="star"/>
                            </p>
                          ))}
                      </div>
                      <button onClick={() => removeCart(item._id, i)}>
                        Remove from basket
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="checkout-right">
          <Subtotal total={total} count={count}/>
        </div>
      </div>
    </>
  );
}

export default Basket;
