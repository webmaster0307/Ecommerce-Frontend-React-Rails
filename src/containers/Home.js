import React from 'react';
import { connect } from 'react-redux'
import Search from '../components/Search';
import Categories from '../components/Categories'
import Carosel from '../components/Carosel'
import Logout from '../components/Logout'


const Home = ({ currentUser, loggedIn }) => {
        return ( 
            <div className = "container">
            { loggedIn ? <><p>Logged in as {currentUser.username}</p><Logout/></> : null}

                <br></br>
                <Search />
                <br></br>
                <Carosel />
                <br></br>
                <Categories />    
            </div> 
        );
}


const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default (connect(mapStateToProps)(Home));