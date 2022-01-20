import axios, { useState } from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import Footer from "../Footer";
import Header from "../Header";
import "./style.css";

function Club() {
  const { kind } = useParams();
//   const [title, setTitle] = useState([]);

  const getclubTitle =async() => {
     const tit= await axios.get("https://project2-3brood.herokuapp.com/club", {kind:"Hiking"});
    console.log("kind is", kind);
    console.log("title of club", tit.data);
  };
  useEffect(() => {
    getclubTitle();
  }, []);

  return (
    <>
      <Header />
      <div></div>
      <Footer />
    </>
  );
}

export default Club;
