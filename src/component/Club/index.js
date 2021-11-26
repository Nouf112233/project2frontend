import axios, { useState } from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import Footer from "../Footer";
import Header from "../Header";
import "./style.css";

function Club() {
  const { kind } = useParams();
  const [title, setTitle] = useState([]);

  const getTitle = async () => {
    const tit = await axios.get("http://localhost:5000/club", { kind: kind });
    console.log("kind is", kind);
    console.log("title of club", tit);
  };
  useEffect(() => {
    getTitle();
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
