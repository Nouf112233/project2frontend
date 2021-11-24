import React from "react";
import { HiDocumentSearch } from "react-icons/hi";
import { GiBasket } from "react-icons/gi";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
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
          <div className="header-option">
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
        <NavLink exact to="/products/Campingear" activeStyle={activeStyle} className="list">
          Camping gear
        </NavLink>
        {" | "}
        <NavLink to="/products/Hiking" activeStyle={activeStyle} className="list">
          Hiking
        </NavLink>
        {" | "}
        <NavLink to="/products/Weapsons and Ammunitition" activeStyle={activeStyle} className="list">
          Weapsons
        </NavLink>
        {" | "}
        <NavLink to="/products/Light and guides" activeStyle={activeStyle} className="list">
          Light and guides
        </NavLink>
        {" | "}
        <NavLink to="/products/Jackets" activeStyle={activeStyle} className="list">
          Jackets
        </NavLink>
        {" | "}
        <NavLink to="/products/outdoor trip" activeStyle={activeStyle} className="list">
          Outdoor trip
        </NavLink>
        {" | "}
        <NavLink to="/products/Fishing and diving" activeStyle={activeStyle} className="list">
          Fishing and diving
        </NavLink>
        {" | "}
        <NavLink to="/products/Knives" activeStyle={activeStyle} className="list">
          Knives
        </NavLink>
        {" | "}
        <NavLink to="/products/Foot wear" activeStyle={activeStyle} className="list">
          Footwear
        </NavLink>
      </div>
    </>
  );
}

export default Header;
