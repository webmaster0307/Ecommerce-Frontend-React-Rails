import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'
import { logout } from "../../actions/currentUser.js"
import { Redirect } from 'react-router-dom'


    class SignInLinks extends Component {

        handleOnClick = (e) => {
            e.preventDefault()
            this.props.logout()
        }

        render() { 
            const { loggedIn, currentUser } = this.props
            // if (!loggedIn) return <Redirect to="." />
            return (
                <nav className="navbar">
                    <ul className="main-nav" id="js-menu">
                        <div className="dropdown">
                            <button className="dropbtn">hello {currentUser.attributes.username}! <FontAwesomeIcon icon={faCaretDown}/></button>
                            <div className="dropdown-content">
                                <li><NavLink to="/Business/new" className="nav-links">New Business</NavLink></li>
                                <li><NavLink to="/Business" className="nav-links">Existing Business</NavLink></li> 
                                <li><NavLink to="/Logout" onClick={this.handleOnClick} className="nav-links">Logout</NavLink></li>
                            </div>
                        </div>
                        <li><NavLink to="/Wishlist" className="nav-links">Wish List</NavLink></li>
                        <li><NavLink to="/Cart" className="nav-links">Cart</NavLink></li>
                    </ul>
              </nav>
            )
        
        }
    }
     
    const mapStateToProps = ({ currentUser }) => {
        // console.log("current user is", currentUser)
        return {
          currentUser,
          loggedIn: !!currentUser
        }
      }
    

export default (connect(mapStateToProps, { logout })(SignInLinks));

