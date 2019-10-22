import React from 'react';
import Carosel from '../Carosel'
import CategoryContainer from '../../containers/CategoryContainer'



const Home = () => {
        return ( 
            <div className = "wrapper">
                <br></br>
                <Carosel />
                <br></br>
                <CategoryContainer />  
            </div> 
        );
}



export default Home;