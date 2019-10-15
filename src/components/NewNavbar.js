import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom'
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
            <nav class="navbar">
                <span class="navbar-toggle" id="js-navbar-toggle">
                    <FontAwesomeIcon icon={faBars} onClick={this.handleOnClick} />
                </span>
                <Link to="/" class="logo">E-Comm Site</Link>
                <ul class="main-nav" id="js-menu">
                    

                    <div class="dropdown">
                        <button class="dropbtn">My Account <FontAwesomeIcon icon={faCaretDown}/></button>
                        <div class="dropdown-content">
                            <li><Link to="/Signup" class="nav-links">Signup</Link></li>
                            <li><Link to="/Login" class="nav-links">Login</Link></li>
                            <li><Link to="/Logout" class="nav-links">Logout</Link></li>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Sell <FontAwesomeIcon icon={faCaretDown}/></button>
                        <div class="dropdown-content">
                            <li><Link to="/Business/new" class="nav-links">New Business</Link></li>
                            <li><Link to="/Business" class="nav-links">Existing Business</Link></li>
                            
                        </div>
                    </div>
                    <li><Link to="/About" class="nav-links">About</Link></li>
                    <li><Link to="/Wishlist" class="nav-links">Wish List</Link></li>
                    <li><Link to="/Cart" class="nav-links">Cart</Link></li>
                </ul>
             </nav>

         );
    }
}



export default NewNavBar;

