import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import About from './components/About'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import NewNavbar from './components/NewNavbar'


class App extends Component {


  componentDidMount() {
    fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() { 
    return ( 
      <Router>
        <Switch>
          <div className="App">
            <NewNavbar />
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/logout' component={Logout} />
            <Route path='/about' component={About} />
            <Route path='/wishlist' component={Wishlist} />
            <Route path='/cart' component={Cart} />
          </div>
        </Switch>
      </Router>
    );
  }
}
 
export default App;

