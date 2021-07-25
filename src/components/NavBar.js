import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = ()=>{
	return (
 	<nav>
    	<div className="nav-wrapper">
      		<Link to="/" className="logo">Home</Link>
      		<ul id="nav-mobile" className="right hide-on-med-and-down">
        	<li><Link to="/signup">SignUp</Link></li>
        	<li><Link to="/login">LogIn</Link></li>
        	<li><Link to="/about">About Us</Link></li>
        	<li><Link to="/contact">Contact Us</Link></li>
      		</ul>
    	</div>
  	</nav>
        
	)
}

export default NavBar