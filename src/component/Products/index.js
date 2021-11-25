import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { GrLike } from "react-icons/gr";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Header from "../Header";
import "./style.css";
import axios from "axios";
import Product from "../Product";

function Products() {
  const navigate = useNavigate();
  const { kind } = useParams();
  const [products, setProducts] = useState([]);
  // const [product,setProduct] =useState(null)
  // const [like,setLike]=useState(false);

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

  const discription = (id) => {
    navigate(`/discription/${id}`);
  };

  return (
    <>
      <Header />
      <div className="hom">
        <div className="home-container">
          {kind == "outdoor trip" && (
            <img
              className="homeimage"
              src="https://i.pinimg.com/474x/74/db/46/74db4646eead8b4b9a679207ccdb0b81.jpg"
              alt="image"
            />
          )}
          {kind == "Hiking" && (
            <img
              className="homeimage"
              src="https://i.pinimg.com/474x/ff/1c/af/ff1cafa228e31287fe08fb841866f105.jpg"
              alt="image"
            />
          )}
          {kind == "Fishing and diving" && (
            <img
              className="homeimage"
              src="https://i.pinimg.com/474x/da/22/b1/da22b1a3c5df965bd691b070a55bb93c.jpg"
              alt="image"
            />
          )}
          {kind == "Light and guides" && (
            <img
              className="homeimage"
              src="https://i.pinimg.com/474x/99/1f/51/991f513991a6b55083e9de7e188f195d.jpg"
              alt="image"
            />
          )}
          {kind == "Weapsons and Ammunitition" && (
            <img
              className="homeimage"
              src="https://i.pinimg.com/474x/77/d1/87/77d187de127766f3534ab2ae0476bb5c.jpg"
              alt="image"
            />
          )}
          {kind == "Knives" && (
            <img
              className="homeimage"
              src="https://i.pinimg.com/474x/6c/6e/b1/6c6eb1680bc4c68788602896e70c2f63.jpg"
              alt="image"
            />
          )}
          {kind == "Camping gear" && (
            <img
              className="homeimage"
              src="https://i.pinimg.com/474x/74/db/46/74db4646eead8b4b9a679207ccdb0b81.jpg"
              alt="image"
            />
          )}
          {kind == "Jackets" && (
            <img
              className="homeimage"
              src="https://i.pinimg.com/474x/69/4d/3c/694d3c4e4d57ba04f0dde994ddf213d0.jpg"
              alt="image"
            />
          )}
          {kind == "Foot wear" && (
            <img
              className="homeimage"
              src="https://i.pinimg.com/474x/28/46/6a/28466ab0348b65410594fb6d1a704d96.jpg"
              alt="image"
            />
          )}
          <div className="products">
            {products.length &&
              products.map((pro, i) => (
                // console.log(pro);
                <div className="product" key={pro._id}>
                  <Product pro={pro} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
