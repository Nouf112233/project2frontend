import React, { useEffect,useState } from "react";
import { HiDocumentSearch } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "./logo1.PNG";
import List from "../List";
import axios from "axios";
import "./style.css";

function Header() {
  const [item,setItem]=useState(0);
  const navigate = useNavigate();
  const [itemInbaket,setItemInbasket]=useState(false);

  // const [{basket},{user},dispatch] from useStateValue();
  const goHome = () => {
    navigate(`/`);
  };

  const getSearched=(e) => {
    e.preventDefault();
    navigate(`/search/${e.target.value}`);
    // let myTerm = e.target.value;
    //   const response = await axios.get(
    //     `http://localhost:5500/audiobooks/search/${myTerm}`
    //   );
    //   setAudios(response.data.results);

  };
  
  const getUserItem=()=>{
    let user = JSON.parse(sessionStorage.getItem("user"));
    if(user){
    let carts=user.cart;
    let numOfCarts=carts.length;
    setItem(numOfCarts);
    setItemInbasket(!itemInbaket);

    }
  }

  const goBasket = () => {
    navigate(`/basket`);
  };

  const goSignin = () => {
    navigate(`/signin`);
  };
  
  const goSale = () => {
    navigate(`/sale`);
  };
  const goNew = () => {
    navigate(`/new`);
  };

  // useEffect(()=>{
   
  // },[itemInbaket])

  useEffect(()=>{
    getUserItem();
  },[])
  return (
    <>
      <div className="header">
        <Link to="/" onClick={goHome}>
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
        <div className="header-search">
          <input className="header-searchInput" type="text" onKeyUp={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        />
          <HiDocumentSearch className="header-searchIcon" />
        </div>
        <div className="header-nav">
          <div className="header-option" onClick={goSignin}>
            <span className="header-optionLineOne">Hello</span>
            <span className="header-optionLineTwo">signIn</span>
          </div>
          <div className="header-option" onClick={goSale} >
            <span className="header-optionLineOne">osteal</span>
            <span className="header-optionLineTwo">& Sale</span>
          </div>
          <div className="header-option" onClick={goNew}>
            <span className="header-optionLineOne">Our</span>
            <span className="header-optionLineTwo">& New</span>
          </div>
          <div className="header-optionBasket" onClick={goBasket}>
            <BsCart4 />
            <span className="header-optionLineTwo header-basketCount">
              {item}
            </span>
          </div>
        </div>
        <List />
      </div>
      <div className="header lists">
        <Link to="/products/Camping gear" className="list">
          Camping gear
        </Link>
        {" | "}
        <Link to="/products/Hiking"className="list">
          Hiking
        </Link>
        {" | "}
        <Link to="/products/Weapsons and Ammunitition"className="list">
          Weapsons
        </Link>
        {" | "}
        <Link to="/products/Light and guides"className="list">
          Light and guides
        </Link>
        {" | "}
        <Link to="/products/Jackets" className="list">
          Jackets
        </Link>
        {" | "}
        <Link to="/products/outdoor trip" className="list">
          Outdoor trip
        </Link>
        {" | "}
        <Link to="/products/Fishing and diving" className="list">
          Fishing and diving
        </Link>
        {" | "}
        <Link to="/products/Knives" className="list">
          Knives
        </Link>
        {" | "}
        <Link to="/products/Foot wear" className="list">
          Footwear
        </Link>
      </div>
    </>
  );
}

export default Header;
