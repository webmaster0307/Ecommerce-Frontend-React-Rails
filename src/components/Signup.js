import React, { Component } from 'react';
import {Form} from 'react-bootstrap'
import { Link, NavLink} from 'react-router-dom'

class Signup extends Component {
    constructor(props){
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
            <div className="">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                
                <Form onSubmit={this.handleSubmit}>
                <label for="username">Username:  </label>
                <input type="text" name="username" placeholder="Enter username" onChange={this.handleChange} required/>

                <label for="email">Email:  </label>
                <input type="text" name="email" placeholder="Enter email" onChange={this.handleChange} required/>

                <label for="password">Password:  </label>
                <input type="text" name="password" placeholder="Enter Password" onChange={this.handleChange} required/>
               
                <input type="submit" value="Register"></input>

                <div class="">
                    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
                </div>
                </Form>
            </div>
         );
    }
}
 
export default Signup;