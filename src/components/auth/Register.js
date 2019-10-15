import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            registrationErrors: ""
        }
    }

    handleSubmit = (e) => {
        console.log("form submitted")
        e.preventDefault()
    }
   
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        return ( 
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account</p>

                <form onSubmit={this.handleSubmit}>
                    
                    <label htmlFor="username">Username:  </label>
                    <input type="text" name="username" id="username" placeholder="Enter username" onChange={this.handleChange} required/>
    
                    <label htmlFor="email">Email:  </label>
                    <input type="text" name="email" id="email"placeholder="Enter Email" onChange={this.handleChange} required/>

                    <label htmlFor="password">Password:  </label>
                    <input type="text" name="password" id="password" placeholder="Enter Password" onChange={this.handleChange} required/>
                   
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
