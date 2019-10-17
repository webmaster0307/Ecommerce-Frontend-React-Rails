import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Home from './containers/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Logout from './components/auth/Logout'
import About from './components/About'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import NewNavbar from './components/NewNavbar'
import NewBusiness from './components/NewBusiness'
import Businesses from './components/Businesses'


class App extends Component {

  


  componentDidMount() {
    fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() { 
    return ( 
      <Router>
          <div className="App">
            <NewNavbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Register} />
              <Route path='/logout' component={Logout} />
              <Route path='/about' component={About} />
              <Route path='/wishlist' component={Wishlist} />
              <Route path='/cart' component={Cart} />
              <Route exact path='/business/new' component={NewBusiness} />
              <Route exact path='/business' component={Businesses} />
            </Switch>
          </div>
        
      </Router>
    );
  }
}
 
export default (connect(null)(App));

