import React from 'react';
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"

const Logout = ({loggedIn, currentUser, logout}) => {

        return (
            <div className="container subheader">
            
            <button onClick={(event) => {
              event.preventDefault()
              logout()
            }}>Logout
            </button>
            </div>
          );
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }
  
 
export default (connect(mapStateToProps, { logout })(Logout));