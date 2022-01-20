import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./logo2.PNG";
import "./style.css";

function Signin() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const getAllusers = async () => {
    const user = await axios.get("https://project2-3brood.herokuapp.com/user");
    setUsers(user.data);
  };

  const loginuser = () => {
    let x = 0;
    // eslint-disable-next-line
    users.map((user) => {
      // eslint-disable-next-line
      if (user.email == email && user.password == password) {
        x = 1;
        sessionStorage.setItem("user", JSON.stringify(user));
      }
    });
    if (x === 1) {
      navigate(`/`);
    } else if (x === 0) {
      let myWindow = window.open("", "", "width=200,height=100");
      myWindow.document.write("<p>wrong email/passward compination</p>");
      myWindow.focus();
    }
  };

  const goRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    getAllusers();
  }, []);

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={logo} />
      </Link>
      <div className="login-container">
        <h1>Signin</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            onChange={(e) =>{ 
              e.preventDefault();
              setEmail(e.target.value);
            }}
            required
          />
          <h5>password</h5>
          <input
            type="password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            required
          />
          <button className="login-signInButton" onClick={loginuser}>signin</button>
        </form>
        <button className="login-registerButton" onClick={goRegister}>
          Create your 3brood account
        </button>
      </div>
    </div>
  );
}

export default Signin;
