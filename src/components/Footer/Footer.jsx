import React from 'react'
import "./Footer.css"
import footer_logo from"../assets/logo_big.png"
import instagram_icon from "../assets/instagram_icon.png"
import pinterest_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="footer"/>
            <p>SHOPSTOP</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="insta" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="pinterset" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="whatsapp" />
            </div>
        </div>
        <div className="footer-copywright">
            <hr />
            <p>Coyright @ 2024 - All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer