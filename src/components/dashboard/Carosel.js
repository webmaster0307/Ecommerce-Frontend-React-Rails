import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


class Carosel extends Component {
    constructor(props){
    super(props);

    this.state = { 
        image1: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        image2: "https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        image3: "https://images.pexels.com/photos/1785138/pexels-photo-1785138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
}


    handleClickOne = (e) => {
        e.preventDefault();
        // this.setState({
        //     name: "",
        //     tax_id: "",
        // })
    }

    handleClickTwo = (e) => {
        e.preventDefault();
        // this.setState({
        //     name: "",
        //     tax_id: "",
        // })
    }

    handleClickThree = (e) => {
        e.preventDefault();
        // this.setState({
        //     name: "",
        //     tax_id: "",
        // })
    }
    render() { 
        return (
            <div className="main">
                <div className="carosel-image">
                    <img className=""src={this.state.image1} alt="Photo" ></img>
                </div>
                <div className="carosel-dot">
                    <FontAwesomeIcon className="dots" icon={faCircle} handleClick={this.handleClickOne} />
                    <FontAwesomeIcon className="dots" icon={faCircle} handleClick={this.handleClickTwo} />
                    <FontAwesomeIcon className="dots" icon={faCircle} handleClick={this.handleClickThree} />
                </div>  
            </div>
        )
    
    }
}
 
export default Carosel;




