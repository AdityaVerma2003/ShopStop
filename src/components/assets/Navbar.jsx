import React from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarLogo'>
            <img src={logo} alt="image"/>
            <p>SHOPSTOP</p>
        </div>
    </div>
  )
}

export default Navbar