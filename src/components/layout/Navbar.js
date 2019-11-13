import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


class NavBar extends Component {

    handleOnClick = (e) => {
        e.preventDefault();
        let mainNav= document.getElementById('js-menu')
        mainNav.classList.toggle('active')
    }

    render() { 
        const { loggedIn } = this.props
        const links = loggedIn ? <SignInLinks /> : <SignOutLinks />;
        
        return ( 
            <nav className="navbar">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <FontAwesomeIcon icon={faBars} onClick={this.handleOnClick} />
                </span>
                <Link to="/" className="logo">E-Comm Site</Link>
                <Link to="/" className="nav-links products">Products</Link>
                { links }
                
             </nav>
         );
    }
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }
   
  export default (connect(mapStateToProps)(NavBar));
  

