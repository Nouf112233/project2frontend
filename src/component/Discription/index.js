import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { GrLike } from "react-icons/gr";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Header from "../Header";
import "./style.css";
import axios from "axios";
import Notic from "../Notic";
import Comments from "../Comments";
import Footer from "../Footer";
import env from "react-dotenv";

function Description() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [like, setLike] = useState(false);


  const getproduct = async () => {
    const prod = await axios.get(`${env.URL}/product/id/${id}`);
    console.log("prpduct", prod.data);
    setProduct(prod.data);
  };

  const addlike = (id) => {
    let lik = product.rating;
    lik++;
    setLike(!like);
    // setProduct({_id:pro._id,kind:pro.kind,name:pro.name,specifications:pro.specifications,Notice:pro.Notice,price:pro.price,rating:lik,newe:pro.newe,image:pro.image,discound:pro.discound})
    axios.put(`${env.URL}/product/like`, { rating: lik, id: id });
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
      axios.put(`${env.URL}/user`, { email: email, id: id });
      sessionStorage.setItem("user", JSON.stringify(newUser));
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    getproduct();
  }, [like]);

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
                <GrLike
                  onClick={() => addlike(product._id)}
                  className="lik-button"
                />
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

              <MdOutlineAddShoppingCart
                onClick={() => addToBasket(product._id)}
                className="ad-button"
              />
            </div>
            <div className="slider-image">
              {product.image.map((item) => (
                <img src={item} alt="product imag" />
              ))}
            </div>
          </div>

          <div className="notic">
            <Notic id={id} />
          </div>

          <div className="comments">
            <Comments notic={product.Notice} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Description;
