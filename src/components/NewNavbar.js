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
                <Link to="/" class="logo">Company Logo</Link>
                <ul class="main-nav" id="js-menu">
                    <li><Link to="/About" class="nav-links">About</Link></li>
                    <li><Link to="/Categories" class="nav-links">Categories</Link></li>

                    <div class="dropdown">
                        <li>My Account <FontAwesomeIcon icon={faCaretDown}/></li>
                        <div class="dropdown-content">
                            <li><Link to="/Signup" class="nav-links">Signup</Link></li>
                            <li><Link to="/Login" class="nav-links">Login</Link></li>
                            <li><Link to="/Logout" class="nav-links">Logout</Link></li>
                        </div>
                    </div>

                    <li><Link to="#" class="nav-links">Wish List</Link></li>
                    <li><Link to="#" class="nav-links">Cart</Link></li>
                </ul>
             </nav>

         );
    }
}



export default NewNavBar;

