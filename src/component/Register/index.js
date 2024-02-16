import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./logo2.PNG";
import "./style.css";
import env from "react-dotenv";

function Register() {
  const [users, setUsers] = useState([]);
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonNumber, setPhonNumber] = useState([]);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const getAllusers = async () => {
    const user = await axios.get(`${env.URL}/user`);
    setUsers(user.data);
  };

  const postuser = () => {
    let x = 0;
    // eslint-disable-next-line
    users.map((item) => {
      // eslint-disable-next-line
      if (item.email == email) {
        x = 1;
      }
    });
    // eslint-disable-next-line
    if (x == 1) {
      let myWindow = window.open("", "", "width=200,height=100");
      myWindow.document.write("<p>email existing</p>");
      myWindow.focus();
    } else if (x === 0) {
      axios.post(`${env.URL}/user`, {
        username: username,
        email: email,
        password: password,
        phonNumber: phonNumber,
        city: city,
        address: address,
      });
      navigate("/signin");
    }
  };

  //   const postuser = async ()=>{
  //     const user = await axios.get("http://localhost:5000/user")
  //     .then()
  //     {
  //         let myWindow = window.open("", "", "width=200,height=100");
  //         myWindow.document.write("<p> email existing</p>");
  //         myWindow.focus();
  //     }else{
  //         axios.post("http://localhost:5000/user", {username:username,email:email,password:password,phonNumber:phonNumber,city:city,address:address});
  //         navigate('/signin');
  //     }
  // }

  useEffect(() => {
    getAllusers();
  }, []);

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={logo} />
      </Link>
      <div className="login-container">
        <h1>Register</h1>
        <form>
          <h5>username</h5>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setUserame(e.target.value);
            }}
            required
          />
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
            onChange={(e) =>{ 
              e.preventDefault();
              setPassword(e.target.value);
            }}
            required
          />
          <h5>phonNumber</h5>
          <input
            type="number"
            onChange={(e) => {
              e.preventDefault();
              setPhonNumber(e.target.value);
            }}
            required
          />
          <h5>city</h5>
          <input
            type="text"
            onChange={(e) =>{
              e.preventDefault(); 
              setCity(e.target.value);
            }}
            required
          />
          <h5>address</h5>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setAddress(e.target.value);
            }}
            required
          />
          <button className="login-signInButton" onClick={postuser}>
            register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
