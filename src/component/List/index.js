import React,{useState} from 'react'
import {BiCategoryAlt} from 'react-icons/bi'
// import "bootstrap/dist/bootstrap.min.css";
// import Navbar from 'react-bootstrap/Navbar';
import './style.css'

function List() {
    const [list,setList]=useState(false)
    return (
    <div className="sidebar">
        <div className="logo-details">
            <BiCategoryAlt className="logo"/>
            <span className="logo-name">Product Categories</span>
        </div>

        <ul className="nav-links">
            <li>
            <BiCategoryAlt className="logoItem"/>
                <p className="link-name">Camping gear</p>
            </li>
            <li>
            <BiCategoryAlt className="logoItem"/>
                <p className="link-name">Hiking</p>
            </li>
            <li>
            <BiCategoryAlt className="logoItem"/>
                <p className="link-name">Weapsons</p>
            </li>
            <li>
            <BiCategoryAlt className="logoItem"/>
                <p className="link-name">Light and guides</p>
            </li>
            <li>
            <BiCategoryAlt className="logoItem"/>
                <p className="link-name">Jackets</p>
            </li>
            <li>
            <BiCategoryAlt className="logoItem"/>
                <p className="link-name">Outdoor trip</p>
            </li>
            <li>
            <BiCategoryAlt className="logoItem"/>
                <p className="link-name">Fishing and diving</p>
            </li>
            <li>
            <BiCategoryAlt className="logoItem"/>
                <p className="link-name">Knives</p>
            </li>
            <li>
            <BiCategoryAlt className="logoItem"/>
                <p className="link-name">Footwear</p>
            </li>
            <li>
            <BiCategoryAlt className="logoItem"/>
                <p className="link-name">Fishing and diving</p>
            </li>

        </ul>

    </div>
    )
}

export default List
