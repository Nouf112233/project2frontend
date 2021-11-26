import React from "react";
import Header from "../Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Product";
import axios from "axios";
import "./style.css";

function New() {
  const navigate = useNavigate();

  const [newProducts, setNewProducts] = useState([]);

  const getAllPruduct = async () => {
    const product = await axios.get(`http://localhost:5000/product/new`);
    console.log(product.data);
    setNewProducts(product.data);
  };

  useEffect(() => {
    getAllPruduct();
  }, []);
  return (
    <>
      <Header />
      <div className="new">
        <div className="home-container">
          <img
            className="newimage"
            src="https://i.pinimg.com/236x/7b/93/b4/7b93b4e4d32642ae20f40d92a13d77cd.jpg"
            alt="image"
          />
          <div className="new-products">
            {newProducts.length &&
              newProducts.map((pro, i) => (
                <div className="product" key={i}>
                  <Product pro={pro} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default New;
