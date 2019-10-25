import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Switch } from 'react-router-dom' 
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import About from './components/About'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import Navbar from './components/layout/Navbar'
import NewBusiness from './components/NewBusiness'
import Businesses from './components/Businesses'
import CategoryProducts from './components/products/CategoryProducts'
import Search from './components/dashboard/Search'
import Footer from './components/layout/Footer'
import { getCurrentUser } from "./actions/currentUser.js"

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {

    return ( 
      <div className="App">
        <Navbar />
        {/* <Search /> */} 
        {/* <Footer /> */}
        
        <Switch>           
          <Route exact path='/' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Register} />
          <Route path='/about' component={About} />
          <Route path='/wishlist' component={Wishlist} />
          <Route path='/cart' component={Cart} />
          <Route exact path='/business/new' component={NewBusiness} />
          <Route exact path='/business' component={Businesses} />
          <Route exact path='/category/:id' component={CategoryProducts} />
        </Switch>
      </div>
    );
  }

}
 
export default connect(null, { getCurrentUser } )(App);

