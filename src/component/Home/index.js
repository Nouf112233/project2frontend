import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import axios from "axios";
import Product from "../Product";
import Image from "./camp1.png";
// import Slider from "../Slider";

import "./style.css";

function Home() {
  const [image] = useState(Image);
  const navigate = useNavigate();
  const [product1, setProduct1] = useState(null);
  const [product2, setProduct2] = useState(null);
  const [product3, setProduct3] = useState(null);
  const [product4, setProduct4] = useState(null);
  const [product5, setProduct5] = useState(null);
  const [product6, setProduct6] = useState(null);

  useEffect(() => {
    getPruduct1ById();
    getPruduct2ById();
    getPruduct3ById();
    getPruduct4ById();
    getPruduct5ById();
    getPruduct6ById();
  }, []);

  const getPruduct1ById = async () => {
    const data = await axios.get(
      `http://localhost:5000/product/id/619a13a9cf5529131208bfa9`
    );
    // console.log(data.data);

    setProduct1(data.data);
  };

  const getPruduct2ById = async () => {
    const data = await axios.get(
      `http://localhost:5000/product/id/619a19cccf5529131208bfaf`
    );
    // console.log(data.data);

    setProduct2(data.data);
  };

  //   const getPruduct2ById = async () => {
  //     const data = await axios.get(
  //       `http://localhost:5000/product/id/619a1549cf5529131208bfab`
  //     );
  //     setProduct2(data.data);
  //     console.log(product2);
  //   };
  const getPruduct3ById = async () => {
    const data = await axios.get(
      `http://localhost:5000/product/id/619a1d51cf5529131208bfb3`
    );
    // console.log(data.data);

    setProduct3(data.data);
  };
  const getPruduct4ById = async () => {
    const data = await axios.get(
      `http://localhost:5000/product/id/619a240fcf5529131208bfb9`
    );
    // console.log(data.data);

    setProduct4(data.data);
  };
  const getPruduct5ById = async () => {
    const data = await axios.get(
      `http://localhost:5000/product/id/619a325fcf5529131208bfcb`
    );
    // console.log(data.data);

    setProduct5(data.data);
  };
  const getPruduct6ById = async () => {
    const data = await axios.get(
      `http://localhost:5000/product/id/619a59f2cf5529131208bfed`
    );
    // console.log(data.data);

    setProduct6(data.data);
  };
  // const addToBasket = (id) => {
  //   const user = JSON.parse(sessionStorage.getItem("user"));
  //   if (user) {
  //     let email = user.email;
  //     let cart = user.cart;
  //     cart.push(id);
  //     let newUser = {
  //       email: email,
  //       cart: cart,
  //     };
  //     axios.put("http://localhost:5000/user", { email:email, id: id });
  //     sessionStorage.setItem("user", JSON.stringify(newUser));
  //   } else {
  //     navigate("/signin");
  //   }
  // };

  return (
    <>
    <Header />
    <div className="home">
      {product1 && (
        <div className="home-container">
          <img className="home-image" src={image} alt="image" />
          <div className="home-row">
            <Product pro={product1} />
            <Product pro={product2} />
          </div>
          <div className="home-row">
            <Product pro={product3} />
            <Product pro={product4} />
            <Product pro={product5} />
          </div>
          <div className="home-row">
            <Product pro={product6} />
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Home;
