import React from "react";
import { Route, Routes } from "react-router";
// import {Router,Route} from 'react-router-dom'
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Basket from "./component/Basket";
import Products from "./component/Products";
import Signin from "./component/Signin";
import Register from "./component/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/basket" element={<Basket />} />
        <Route path="/products/:kind" element={<Products />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
