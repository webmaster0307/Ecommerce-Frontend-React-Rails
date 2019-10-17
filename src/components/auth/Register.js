import React, { Component } from 'react';
import {Link} from 'react-router-dom'

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
        return ( 
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account</p>

                <form onSubmit={this.handleSubmit}>
                    
                    <label htmlFor="username">Username:  </label>
                    <input type="username" name="username" id="username" placeholder="Enter username" onChange={this.handleChange} required/>
    
                    <label htmlFor="email">Email:  </label>
                    <input type="email" name="email" id="email"placeholder="Enter Email" onChange={this.handleChange} required/>

                    <label htmlFor="password">Password:  </label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" onChange={this.handleChange} required/>
                   
                    <input type="submit" value="Register"></input>

                    <div className="">
                        <p>Already have an account? <Link to="/login">Sign in</Link> </p>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Register;
