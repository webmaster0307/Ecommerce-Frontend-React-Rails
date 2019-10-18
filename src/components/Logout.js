import React from 'react';
import { connect } from 'react-redux'

const Logout = ({loggedIn, currentUser}) => {
  
        return (
            <div className="container subheader">
            { loggedIn ? <><p>Logged in as {currentUser.username}</p></> : null}
            <button>Logout</button>
            </div>
          );
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }
  
 
export default (connect(mapStateToProps)(Logout));