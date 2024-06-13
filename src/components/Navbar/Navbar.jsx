import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [bottom, setbottom] = useState("")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="icon"/>
            <p>SHOPSTOP</p>
        </div>
        <ul className="nav-menu">
          <li className={bottom==="Shop"?'active':'unactive'} onClick={()=>setbottom("Shop")}> <Link to="/" style={{textDecoration:'none', color: '#626262'}}> Shop </Link> </li>
          <li className={bottom==="Mens"?'active':'unactive'} onClick={()=>setbottom("Mens")}> <Link to="/mens" style={{textDecoration:'none',color: '#626262'}}> Mens </Link></li>
          <li className={bottom==="Womens"?'active':'unactive'} onClick={()=>setbottom("Womens")}> <Link to="/womens" style={{textDecoration:'none',color: '#626262'}}> Womens</Link></li>
          <li className={bottom==="Kids"?'active':'unactive'} onClick={()=>setbottom("Kids")}> <Link to="/kids" style={{textDecoration:'none',color: '#626262'}}> Kids </Link></li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login"> <button> Login </button> </Link>
          <Link to="/cart"> <img src={cart_icon} alt="cartIcon" /> </Link>
          <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar