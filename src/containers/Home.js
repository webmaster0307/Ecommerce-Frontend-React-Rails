import React, { Component } from 'react';
import Search from '../components/Search';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "container">
                <Search />
                <h2>Will show Categories - carosel?</h2>
            </div> 
        );
    }
}
 
export default Home ;