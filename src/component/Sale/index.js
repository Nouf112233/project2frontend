import React from "react";
import Header from "../Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Product";
import axios from "axios";
import "./style.css";
import Footer from "../Footer";

function Sale() {
  const navigate = useNavigate();

  const [saleProducts, setSaleProducts] = useState([]);

  const getAllPruduct = async () => {
    const product = await axios.get(`https://project2-3brood.herokuapp.com/product/sale`);
    console.log(product.data);
    setSaleProducts(product.data);
  };
  const addToBasket = () => {};

  useEffect(() => {
    getAllPruduct();
  }, []);
  return (
    <>
      <Header />
      <div className="sale">
        <div className="home-container">
          <img
            className="saleimage"
            src="https://i.pinimg.com/236x/be/03/75/be03752fc204be21307f1db13b186e39.jpg"
            alt="image"
          />
          <div className="sale-products">
            {saleProducts.length &&
              saleProducts.map((pro, i) => (
                <div className="product" key={i}>
                  <Product pro={pro} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sale;
