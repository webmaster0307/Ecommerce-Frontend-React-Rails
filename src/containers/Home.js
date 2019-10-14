import React, { Component } from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories'
import Carosel from '../components/Carosel'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "container">
                <Search />
                <Carosel />
                <Categories />    
            </div> 
        );
    }
}
 
export default Home ;