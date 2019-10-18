import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SignOutLinks = () => {
    return (

        <nav className="navbar">
        <ul className="main-nav" id="js-menu">
        
            <div className="dropdown">
                <button className="dropbtn">My Account <FontAwesomeIcon icon={faCaretDown}/></button>
                <div className="dropdown-content">
                <li><Link to="/Signup" className="nav-links">Signup</Link></li>
                <li><Link to="/Login" className="nav-links">Login</Link></li>
                    
                </div>
            </div>
        </ul>
     </nav>



    )
}

export default SignOutLinks
