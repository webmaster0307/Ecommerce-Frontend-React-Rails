import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/currentUser.js'
import { Redirect } from 'react-router-dom'

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
        // console.log(this.state)
            this.props.login(this.state);
                this.setState({
                    username: "",
                    password: ""
                })
     }


    render() { 
        const { loggedIn } = this.props;
        if (loggedIn) return <Redirect to='/' />
        return (
            <div className="main">
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

 
export default connect(mapStateToProps, { login } )(Login);