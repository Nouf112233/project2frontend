import React from 'react';
import { Link} from "react-router-dom";
import logo from "./logo.PNG";
import './style.css'

function Signin() {
    return (
        <div className="login">
            <Link to="/" >
                <img className="login-logo" src={logo} />
            </Link>
            <div className="login-container">
                <h1>Signin</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>
                    <h5>password</h5>
                    <input type="password"/>
                    <button className="login-signInButton">signin</button>
                </form>
                <button className="login-registerButton">
                    Create your 3brood account
                </button>
            </div>
            
        </div>
    )
}

export default Signin
