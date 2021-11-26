import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./component/Home";
import Basket from "./component/Basket";
import Products from "./component/Products";
import Signin from "./component/Signin";
import Register from "./component/Register";
import New from "./component/New";
import Sale from "./component/Sale";
import Description from "./component/Discription";
import Search from "./component/Search";
import Club from "./component/Club";



function App() {


  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/basket" element={<Basket />} />
        <Route path="/products/:kind" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new" element={<New />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/discription/:id" element={<Description />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/search" element={<Search />} />
        <Route path="/club/:kind" element={<Club />} />
        
      </Routes>
    </>
  );
}

export default App;
