import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
         }
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
        const headers = {
            method: 'POST',
            credientals: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: this.state
            })
        }
        fetch("http://localhost:3001/api/v1/login", headers)
        .then(r => r.json())
        .then(resp => {
            // console.log(resp)
            console.log(resp.user)
            if (resp.error) {
                alert("invalid credentials")
            }
            else {

                this.setState({
                    // currentUser: resp.user,
                    username: "",
                    password: ""
                })
            }
        })
        .catch(console.log)
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

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}
 
export default connect(mapStateToProps)(Login);