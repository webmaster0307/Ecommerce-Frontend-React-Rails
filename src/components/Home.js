import React from 'react';
import Categories from './Categories'
import Carosel from './Carosel'



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