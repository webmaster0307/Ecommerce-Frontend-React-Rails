import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
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
        const { loggedIn, currentUser } = this.props
        // console.log(loggedIn)
        const links = loggedIn ? <SignInLinks currentUser={currentUser}/> : <SignOutLinks />;
        
        return ( 
            <nav className="navbar">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <FontAwesomeIcon icon={faBars} onClick={this.handleOnClick} />
                </span>
                <NavLink to="/" className="logo">E-Comm Site</NavLink>
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
  

