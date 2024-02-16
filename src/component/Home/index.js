import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import axios from "axios";
import Product from "../Product";
import Image from "./camp1.png";
import env from "react-dotenv";
// import Slider from "../Slider";

import "./style.css";
import Footer from "../Footer";

function Home() {
  const [image] = useState(Image);
  const navigate = useNavigate();
  const [product1, setProduct1] = useState(null);
  const [product2, setProduct2] = useState(null);
  const [product3, setProduct3] = useState(null);
  const [product4, setProduct4] = useState(null);
  const [product5, setProduct5] = useState(null);
  const [product6, setProduct6] = useState(null);



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
      axios.put(`${env.URL}/user`, { email:email, id: id });
      sessionStorage.setItem("user", JSON.stringify(newUser));
 
    } else {
      navigate("/signin");
    }
  };



  
  
  


  const getPruduct1ById = async () => {
    const data = await axios.get(
      `${env.URL}/product/id/619a13a9cf5529131208bfa9`
    );
    // console.log(data.data);
    console.log("product1",data.data);
    setProduct1(data.data);
  };

  const getPruduct2ById = async () => {
    const data = await axios.get(
      `${env.URL}/product/id/619a19cccf5529131208bfaf`
    );
   
    console.log("product2",data.data);
    setProduct2(data.data);
  };

  
  const getPruduct3ById = async () => {
    const data = await axios.get(
      `${env.URL}/product/id/619a1d51cf5529131208bfb3`
    );
   
   console.log("product3",data.data);
    setProduct3(data.data);
  };
  const getPruduct4ById = async () => {
    const data = await axios.get(
      `${env.URL}/product/id/619a240fcf5529131208bfb9`
    );
    console.log("product4",data.data);
    setProduct4(data.data);
  };
  const getPruduct5ById = async () => {
    const data = await axios.get(
      `${env.URL}/product/id/619a332ccf5529131208bfcd`
    );

    console.log("product5",data.data);
    setProduct5(data.data);
  };
  const getPruduct6ById = async () => {
    const data = await axios.get(
      `${env.URL}/product/id/619a59f2cf5529131208bfed`
    );
  
    console.log("product6",data.data);
    setProduct6(data.data);
  };

  useEffect(() => {
    getPruduct1ById();
    getPruduct2ById();
    getPruduct3ById();
    getPruduct4ById();
    getPruduct5ById();
    getPruduct6ById();
    // getUserItem();
  }, []);

  

  return (
    <>
    <Header  />
    <div className="home">
      {product1 && (
        <div className="home-container">
          <img className="home-image" src={image} alt="image" />
          <div className="home-row">
           {product1&& <Product pro={product1} addToBasket={addToBasket}/>}
           {product2&& <Product pro={product2} addToBasket={addToBasket}/>}
          </div>
          <div className="home-row">
            {product3&&<Product pro={product3} addToBasket={addToBasket}/>}
            {product4&&<Product pro={product4} addToBasket={addToBasket}/>}
           { product5&&<Product pro={product5} addToBasket={addToBasket}/>}
          </div>
          <div className="home-row">
           {product6&& <Product pro={product6} addToBasket={addToBasket}/>}
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}

export default Home;
