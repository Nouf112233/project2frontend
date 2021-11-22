import React from 'react'
import {HiDocumentSearch} from "react-icons/hi"
import {GiBasket} from "react-icons/gi"
import {Link} from "react-router-dom"
import "./style.css"


function Header() {
    return (
        <div className="header">
            <Link to="" ><img className="header-logo"src="" alt="logo" /></Link>
            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <HiDocumentSearch className="header-searchIcon" />
            </div>
            <div className="header-nav">
                {/* <Link to="/login" > */}
                <div className="header-option">
                <span className="header-optionLineOne">Hello</span>
                <span className="header-optionLineTwo">signIn</span>
                </div>
                {/* </Link> */}
                {/* <Link to="/order" > */}
                <div className="header-option">
                <span className="header-optionLineOne">Rerurn</span>
                <span className="header-optionLineTwo">& order</span>
                </div>
                {/* </Link> */}
                {/* <Link to="/prime" > */}
                <div className="header-option">
                <span className="header-optionLineOne">your</span>
                <span className="header-optionLineTwo">& prime</span>
                </div>
                {/* </Link> */}
                {/* <Link to="/basket" > */}
                <div className="header-optionBasket">
                 <GiBasket />
                <span className="header-optionLineTwo header-basketCount">
                    0
                    {/* {basket?.length} */}
                    </span>
                </div>
                {/* </Link> */}

            </div>
            
            
            
        </div>
    )
}

export default Header
