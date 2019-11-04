import React from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'
import { logout } from '../../actions/currentUser'
import { withRouter } from 'react-router'


    const SignInLinks = (props) => {

        // console.log(props);

            return (
                <nav className="navbar">
                    <ul className="main-nav" id="js-menu">
                        <div className="dropdown">
                            <button className="dropbtn">hello {props.currentUser.attributes.username}! <FontAwesomeIcon icon={faCaretDown}/></button>
                            <div className="dropdown-content">
                                <li><NavLink to="/businesses/new" className="nav-links">New Business</NavLink></li>
                                <li><NavLink to="/businesses/home" className="nav-links">Existing Business</NavLink></li> 
                                <li><a onClick={props.logOut}  className="nav-links">Logout</a></li>
                            </div>
                        </div>
                        <li><NavLink to="/Wishlist" className="nav-links">Wish List</NavLink></li>
                        <li><NavLink to="/Cart" className="nav-links">Cart</NavLink></li>
                    </ul>
              </nav>
            )
    }

    const mapStateToProps = ({ currentUser }) => {
        return {
          currentUser,
          loggedIn: !!currentUser
        }
      }
     
    const mapDispatchToProps = (dispatch, props) => {
        return {
            logOut: () => { dispatch(logout()) 
            props.history.push('/');
            }
        }
    }

    

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInLinks));

