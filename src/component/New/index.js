import React from "react";
import Header from "../Header";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BsBasket2 } from "react-icons/bs";
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
  const addToBasket = () => {};

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
        </div>
      </div>
    </>
  );
}

export default New;
