import React, { Component } from 'react';


class App extends Component {
  state = {  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() { 
    return ( 

      <div className="App">

        My APP
      
      </div>
     );
  }
}
 
export default App;

