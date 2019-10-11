import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

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
            <div className="container">
                <Form onSubmit={this.handleSubmit}>

                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" onChange={this.handleChange} required/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handleChange} required/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                </Form>
            </div>
         );
    }
}
 
export default Signup;