import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
     }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            username: '',
            email: '',
            password: ''
          })
    }
   
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() { 
        const { loggedIn } = this.props;
        if (loggedIn) return <Redirect to='/' />
        
        return ( 
            <div className="container-form">
                <h1>Register</h1>
                <p>Please fill in this form to create an account</p>

                <form onSubmit={this.handleSubmit}>
                    
                <div class="row"> 
                    <div class="col-3">    
                        <label htmlFor="username">Username:  </label>
                    </div>  
                    <div class="col-9"> 
                        <input type="username" name="username" id="username" placeholder="Enter username" onChange={this.handleChange} required/>
                    </div>  
                </div>  

                    <div class="row"> 
                    <div class="col-3">    
                        <label htmlFor="email">Email:  </label>
                    </div>  
                    <div class="col-9"> 
                        <input type="password" name="password" id="password" placeholder="Enter Password" onChange={this.handleChange} required/>
                    </div>  
                </div>  

                <div class="row"> 
                    <div class="col-3">  
                        <label htmlFor="password">Password:  </label>
                    </div>  
                    <div class="col-9"> 
                        <input type="password" name="password" id="password" placeholder="Enter Password" onChange={this.handleChange} required/>
                    </div>  
                </div>

                   
                <div class="row">
                  <input type="submit" value="Login"></input>
                </div>

                <div className="">
                    <p>Already have an account? <Link to="/login">Sign in</Link> </p>
                </div>
                </form>
            </div>
         );
    }
}
 

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }
  export default connect(mapStateToProps)(Register);
