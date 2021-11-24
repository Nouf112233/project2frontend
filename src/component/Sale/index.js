import React from "react";
import Header from "../Header";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BsBasket2 } from "react-icons/bs";
import axios from "axios";
import "./style.css";

function Sale() {
  const navigate = useNavigate();

  const [saleProducts, setSaleProducts] = useState([]);

  const getAllPruduct = async () => {
    const product = await axios.get(`http://localhost:5000/product/sale`);
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

export default Sale;
