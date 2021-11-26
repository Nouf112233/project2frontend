import React from 'react'
import {GiHiking} from 'react-icons/gi';
import {GiForestCamp} from 'react-icons/gi'
import {GiCargoShip} from 'react-icons/gi'
import {GiAntiAircraftGun} from 'react-icons/gi';
import {FaTwitter} from 'react-icons/fa';
import {ImYoutube2} from 'react-icons/im';
import {MdOutgoingMail} from 'react-icons/md';
import {BsSnapchat} from 'react-icons/bs'
import logo from "./logo.PNG";
import './style.css'

function Footer() {
    return (
        <div className="footer">
            <div className="club">
                <div className="hiking">
                <GiHiking  className="clup-logo"/>
                <h6>Hiking Club</h6>
                </div>
                <div className="hiking">
                <GiForestCamp className="clup-logo" />
                <h6>Wilderness Club</h6>
                </div>
                <div className="hiking">
                <GiCargoShip className="clup-logo"/>
                <h6>Cruise Club</h6>
                </div>
                <div className="hiking">
                <GiAntiAircraftGun className="clup-logo"/>
                <h6>أunting Club</h6>
                </div>
                
                
            </div>
            <div className="footer-info">
                <div className="footer-logo">
                <img className="footer-logo" src={logo} alt="logo" />
                </div>
                <div className="accounts">
                    <div className="title-account">
                         <h1>Our accounts</h1>
                    </div>
                    <div className="logo-account">
                        <FaTwitter className="acc tw" />
                        <ImYoutube2 className="acc yo"/>
                        <MdOutgoingMail className="acc ma"/>
                        <BsSnapchat className="acc sn"/>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Footer
