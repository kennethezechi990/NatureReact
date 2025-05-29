import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
     <nav className="nav-div">
        <div className="img-div">
            <img className='nav-pix' src="./images/logo web pix.png"/>
        </div>
        <ul className="ul-div">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li><button>202-555-0188</button></li>
        </ul>
    </nav> 
    </div>
  )
}

export default Navbar
