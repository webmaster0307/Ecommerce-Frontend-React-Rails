import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


class Carosel extends Component {
    state = {  }

    handleClick = (e) => {
        e.preventDefault();
    }
    render() { 
        return (
            <div className="main">
                <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Smiley face" height="400" width="400"></img>
                <img src="https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Smiley face" height="400" width="400"></img>
                <img src="https://images.pexels.com/photos/1785138/pexels-photo-1785138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Smiley face" height="400" width="400"></img>
                <FontAwesomeIcon className="dots" icon={faCircle} handleClick={this.handleClick} />
                <FontAwesomeIcon className="dots" icon={faCircle} handleClick={this.handleClick} />
                <FontAwesomeIcon className="dots" icon={faCircle} handleClick={this.handleClick} />
            </div>
        )
    
    }
}
 
export default Carosel;




