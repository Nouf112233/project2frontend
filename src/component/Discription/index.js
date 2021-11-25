import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BsBasket2 } from "react-icons/bs";
import Header from "../Header";
import "./style.css";
import axios from "axios";

function Description() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getproduct = async () => {
    const product = await axios.get(`http://localhost:5000/product/id/${id}`);
    console.log("prpduct", product.data);
    setProduct(product.data);
  };

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
      axios.put("http://localhost:5000/user", { email: email, id: id });
      sessionStorage.setItem("user", JSON.stringify(newUser));
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      <Header />
      {product && (
        <div className="main">
          <div className="desc-title">
            <p>{product.kind}</p>
          </div>
          <div className="desc">
            <div className="disc-info">
              <h1>{product.name}</h1>
              <div className="disc-rating">
                {Array(product.rating)
                  .fill()
                  .map((_, i) => (
                    <p key={i}>
                      <AiOutlineStar className="star" />
                    </p>
                  ))}
              </div>
              <p className="disc-price">
                <sup>$</sup>
                <strong>{product.price}</strong>
              </p>
              <div className="specifications">
                <ul>
                  {product.specifications.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="main-image">
              <img src={product.image[0]} alt="image" />
              <button onClick={() => addToBasket(product._id)}>
                Add to basket
              </button>
            </div>
            <div className="slider-image">
              {product.image.map((item) => (
                <img src={item} alt="product imag" />
              ))}
            </div>
          </div>
          <div className="notic"></div>
        </div>
      )}
    </>
  );
}

export default Description;
