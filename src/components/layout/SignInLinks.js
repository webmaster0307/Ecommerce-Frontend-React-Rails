import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SignInLinks = () => {
    return (

        <nav className="navbar">
        <ul className="main-nav" id="js-menu">
        
            <div className="dropdown">
                <button className="dropbtn">Sell <FontAwesomeIcon icon={faCaretDown}/></button>
                <div className="dropdown-content">
                    <li><Link to="/Business/new" className="nav-links">New Business</Link></li>
                    <li><Link to="/Business" className="nav-links">Existing Business</Link></li>
                    
                </div>
            </div>
            
            <li><Link to="/Wishlist" className="nav-links">Wish List</Link></li>
            <li><Link to="/Cart" className="nav-links">Cart</Link></li>
        </ul>
     </nav>



    )
}

export default SignInLinks
