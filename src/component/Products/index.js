import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Product from "../Product";

function Products(kind) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllPruduct();
  }, []);

  const getAllPruduct = async () => {
    const product = await axios.get(
      `http://localhost:5000/product/kind/${kind}`
    );

    setProducts(product.data);
    console.log(products);
  };

  return (
    <div className="products">
      {products.map((item) => {
        <Product pro={item} />;
      })}
    </div>
  );
}

export default Products;
