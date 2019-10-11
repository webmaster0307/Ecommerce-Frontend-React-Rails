import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Home from './containers/Home'
import CustomNavbar from './components/CustomNavbar'




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
         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div className="App">
            <CustomNavbar />
            <Route path='/' component={Home} />
          </div>
        </Switch>
      </Router>
    );
  }
}
 
export default App;

