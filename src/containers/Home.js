import React, { Component } from 'react';
import Signup from '../components/Signup'
import Login from '../components/Login'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "container">
                <h1>Home Page</h1>
                <Signup />
                <Login />
            </div> 
        );
    }
}
 
export default Home ;