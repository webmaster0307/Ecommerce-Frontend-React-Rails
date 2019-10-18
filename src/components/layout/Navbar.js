import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";


class NavBar extends Component {

    handleOnClick = (e) => {
        e.preventDefault();
        let mainNav= document.getElementById('js-menu')
        mainNav.classList.toggle('active')
    }

    render() { 
        return ( 
            <nav className="navbar">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <FontAwesomeIcon icon={faBars} onClick={this.handleOnClick} />
                </span>
                <Link to="/" className="logo">E-Comm Site</Link>
                <SignInLinks />
                <SignOutLinks />

                <ul className="main-nav" id="js-menu">
                    <li><Link to="/About" className="nav-links">About</Link></li>
                </ul>
             </nav>

         );
    }
}



export default NavBar;
