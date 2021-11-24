import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BsBasket2 } from "react-icons/bs";
import "./style.css";
import axios from "axios";
import Product from "../Product";

function Products() {
  const navigate = useNavigate();
  const { kind } = useParams();
  const [products, setProducts] = useState([]);

  console.log(kind);

  useEffect(() => {
    getAllPruduct();
  }, []);
  
  useEffect(() => {
    getAllPruduct();
  }, [kind]);

  const getAllPruduct = async () => {
    const product = await axios.get(
      `http://localhost:5000/product/kind/${kind}`
    );

    console.log(product.data);
    setProducts(product.data);
  };
  const addToBasket = () => {};

  return (
    <div className="products">
      {products.length &&
        products.map((pro, i) => (
          // console.log(pro);
          <div className="product" key={i}>
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
        ))}
    </div>
  );
}

export default Products;
