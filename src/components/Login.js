import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
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
            <div>
                <h1>Login in</h1>

                <form onSubmit={this.handleSubmit}>
                    
                <label for="username">Username:  </label>
                <input type="text" name="username" placeholder="Enter username" onChange={this.handleChange} required/>

                <label for="password">Password:  </label>
                <input type="text" name="password" placeholder="Enter Password" onChange={this.handleChange} required/>
               
                <input type="submit" value="Login"></input>

                </form>

            </div>
          );
    }
}
 
export default Login;