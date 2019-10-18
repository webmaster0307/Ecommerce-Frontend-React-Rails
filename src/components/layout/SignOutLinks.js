import React from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SignOutLinks = () => {
    return (
        <nav className="navbar">
            <ul className="main-nav" id="js-menu">
                <div className="dropdown">
                    <button className="dropbtn">My Account <FontAwesomeIcon icon={faCaretDown}/></button>
                    <div className="dropdown-content">
                    <li><NavLink to="/Signup" className="nav-links">Signup</NavLink></li>
                    <li><NavLink to="/Login" className="nav-links">Login</NavLink></li>     
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default SignOutLinks
