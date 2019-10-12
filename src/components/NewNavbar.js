import React from 'react';
import { Link, NavLink} from 'react-router-dom'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewNavbar = () =>  { 
    return (
        <nav class="navbar">
            <span class="navbar-toggle" id="js-navbar-toggle">
                 <FontAwesomeIcon icon={faBars} />
            </span>
            <Link to="/" class="logo">Company Logo</Link>
            <ul class="main-nav" id="js-main">
                <li><Link to="/About" class="nav-links">About</Link></li>
                <li><Link to="/Categories" class="nav-links">Categories</Link></li>
                <li>
                <Link to="#!" class="nav-links">My Account</Link>
                    <ul class="nav-dropdown">
                        <li><Link to="/Signup" class="nav-links">Signup</Link></li>
                        <li><Link to="/Login" class="nav-links">Login</Link></li>
                        <li><Link to="/Logout" class="nav-links">Login</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default NewNavbar