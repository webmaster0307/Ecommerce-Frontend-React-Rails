import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


class Carosel extends Component {
    constructor(props){
    super(props);

    this.state = { 
        default: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }
}

    handleClickOne = (e) => {
        e.preventDefault();
        this.setState({
            default: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        })
    }

    handleClickTwo = (e) => {
        e.preventDefault();
        this.setState({
            default: "https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        })
    }

    handleClickThree = (e) => {
        e.preventDefault();
        this.setState({
            default: "https://images.pexels.com/photos/1785138/pexels-photo-1785138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        })
    }

    render() { 
        return (
            <div className="">
                <div className="carosel-image">
                    <img className=""src={this.state.default} alt="feature" ></img>
                </div>
                <div className="carosel-dot">
                    <FontAwesomeIcon className="dots" icon={faCircle} onClick={this.handleClickOne} />
                    <FontAwesomeIcon className="dots" icon={faCircle} onClick={this.handleClickTwo} />
                    <FontAwesomeIcon className="dots" icon={faCircle} onClick={this.handleClickThree} />
                </div>  
            </div>
        )
    
    }
}
 
export default Carosel;




