import React from "react";
import { HiDocumentSearch } from "react-icons/hi";
import { GiBasket } from "react-icons/gi";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "./logo.PNG";
import List from "../List";
import "./style.css";

function Header() {
  const navigate = useNavigate();

  // const [{basket},{user},dispatch] from useStateValue();
  const goHome = () => {
    navigate(`/`);
  };

  const goBasket = () => {
    navigate(`/basket`);
  };
  const goSignin = () => {
    navigate(`/signin`);
  };
  
  const goSale = () => {
    navigate(`/sale`);
  };

  const activeStyle = { color: "blue" };
  return (
    <>
      <div className="header">
        <Link to="/" onClick={goHome}>
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
        <div className="header-search">
          <input className="header-searchInput" type="text" />
          <HiDocumentSearch className="header-searchIcon" />
        </div>
        <div className="header-nav">
          {/* <Link to="/login" > */}
          <div className="header-option" onClick={goSignin}>
            <span className="header-optionLineOne">Hello</span>
            <span className="header-optionLineTwo">signIn</span>
          </div>
          {/* </Link> */}
          {/* <Link to="/order" > */}
          <div className="header-option" onClick={goSale} >
            <span className="header-optionLineOne">osteal</span>
            <span className="header-optionLineTwo">& Sale</span>
          </div>
          {/* </Link> */}
          {/* <Link to="/prime" > */}
          <div className="header-option">
            <span className="header-optionLineOne">Our</span>
            <span className="header-optionLineTwo">& New</span>
          </div>
          {/* </Link> */}
          {/* <Link to="/basket" > */}
          <div className="header-optionBasket" onClick={goBasket}>
            <GiBasket />
            <span className="header-optionLineTwo header-basketCount">
              0{/* {basket?.length} */}
            </span>
          </div>
          {/* </Link> */}
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
