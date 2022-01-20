import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import "./style.css";
import { useParams } from "react-router";
import Image from "./camp1.png";
import Product from "../Product";

function Search() {
  const [image] = useState(Image);
  const [searchProduct, setSearchProduct] = useState([]);
  let { name } = useParams();

  let productInSearch = [];

  const getSearched = async () => {
    const search = await axios.get("https://project2-3brood.herokuapp.com/product/search", {
      name: name,
    });
    search.data.forEach((element) => {
      console.log("element", element);
      if (
        element.kind.toLowerCase().includes(name) ||
        element.name.toLowerCase().includes(name)
      ) {
        console.log("elementin loop", element);
        productInSearch.push(element);
      }
    });
    console.log("productInSearch", productInSearch);
    setSearchProduct(productInSearch);
  };

  useEffect(() => {
    getSearched();
  }, [name]);

  return (
    <>
      <Header />
      <div className="hom">
        <div className="home-container">
          <img className="homeimage" src={image} alt="image" />
          <div className="products">
            {searchProduct.length &&
              searchProduct.map((pro, i) => (
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

export default Search;
