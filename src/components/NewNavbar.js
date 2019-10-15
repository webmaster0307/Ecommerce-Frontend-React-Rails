import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";



class NewNavBar extends Component {
    state = {  }


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
                <ul className="main-nav" id="js-menu">
                    

                    <div className="dropdown">
                        <button className="dropbtn">My Account <FontAwesomeIcon icon={faCaretDown}/></button>
                        <div className="dropdown-content">
                            <li><Link to="/Signup" className="nav-links">Signup</Link></li>
                            <li><Link to="/Login" className="nav-links">Login</Link></li>
                            <li><Link to="/Logout" className="nav-links">Logout</Link></li>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="dropbtn">Sell <FontAwesomeIcon icon={faCaretDown}/></button>
                        <div className="dropdown-content">
                            <li><Link to="/Business/new" className="nav-links">New Business</Link></li>
                            <li><Link to="/Business" className="nav-links">Existing Business</Link></li>
                            
                        </div>
                    </div>
                    <li><Link to="/About" className="nav-links">About</Link></li>
                    <li><Link to="/Wishlist" className="nav-links">Wish List</Link></li>
                    <li><Link to="/Cart" className="nav-links">Cart</Link></li>
                </ul>
             </nav>

         );
    }
}



export default NewNavBar;

