import React from 'react'
import Product from '../Product'

import "./style.css"

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-img" src="" alt="image" />
                <div className="home-row">
                    <Product />
                    <Product />
                </div>
                <div className="home-row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home-row">
                    <Product />
                </div>
            </div>
            
        </div>
    )
}

export default Home
