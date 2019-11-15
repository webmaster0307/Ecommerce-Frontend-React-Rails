import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createColor } from '../../actions/product'



class ProductColorNew extends Component {
    constructor(props){
        super(props);

        console.log("color new", props)
        this.state = { 
            color_name: "",
            available_qty: "",
         }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let product_id = this.props.match.params.id
        let businessId = this.props.product.attributes.business_id
        // console.log(business_id)
        // console.log(product_id)
        let color = {...this.state, product_id}
        // console.log("color" , color)
        this.props.createColor(color)
        this.props.history.push(`/businesses/${businessId}/products/${product_id}`);
        this.setState({
            color_name: "",
            available_qty: "",
        })

    }

    render() { 
        return ( 
            <div className="container-form">
                <div className="middle-container">
                    <h1>New Color Form</h1>
        
                    <form onSubmit={this.handleSubmit}>

                    <div className="row"> 
                        <div className="label">    
                            <label htmlFor="color_name">Color name:  </label>
                        </div>  
                            <input type="text" name="color_name" id="color_name" placeholder="Enter Color Name" onChange={this.handleChange} required/>
                    </div>

                    <div className="row"> 
                        <div className="label">  
                            <label htmlFor="available_qty">Available Quantity:  </label>
                        </div>  
                            <input type="text" name="available_qty" id="available_qty" placeholder="available qty" onChange={this.handleChange} required/>
                    </div>

                    <div className="row">
                         <input type="submit" value="Submit"></input>
                    </div>
                    </form>
                    
                </div>
            </div>

         );

    }
}
 
export default connect(null, { createColor })(ProductColorNew);