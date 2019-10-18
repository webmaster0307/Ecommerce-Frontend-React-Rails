import React from 'react';
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import Carosel from '../components/Carosel'


const Home = () => {
        return ( 
            <div className = "wrapper">
                <br></br>
                <Carosel />
                <br></br>
                <Categories />    
            </div> 
        );
}



export default Home;