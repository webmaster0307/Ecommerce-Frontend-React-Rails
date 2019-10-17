import React, { Component } from 'react';

class Login extends Component {

    state = {
        username: '',
        password: '',
     }


    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }


    render() { 
        return (
            <div className="container">
                <h1>Login in</h1>

                <form onSubmit={this.handleSubmit}>
                    
                <label htmlFor="username">Username:  </label>
                <input type="username" name="username" id="username" placeholder="Enter username" onChange={this.handleChange} required/>

                <label htmlFor="password">Password:  </label>
                <input type="password" name="password" id="password" placeholder="Enter Password" onChange={this.handleChange} required/>
               
                <input type="submit" value="Login"></input>

                </form>

            </div>
          );
    }
}
 
export default Login;