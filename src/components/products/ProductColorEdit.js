import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { editColor } from '../../actions/product'

class ProductColorEdit extends Component {
    constructor(props){
        super(props);

        console.log("color edit", props)

        this.state = { 
            color_name: `${this.props.color ? this.props.color.color_name : ""}` ,
            available_qty: `${this.props.color ? this.props.color.available_qty : ""}` ,
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

        console.log("submit", this.props)
        debugger;
        let paramsId = parseInt(this.props.match.params.id)
        let currentColor = this.props.colors ? this.props.colors.colors.filter(color => color.id === paramsId)[0] : null
        console.log("currentColor", currentColor)
        let product_id = currentColor.product_id
        let color_id = this.props.color.color_id
        console.log("product_id" , product_id)
        console.log("color_id", color_id)

        let product = this.props.products ? this.props.products.products.filter(product => product.id == product_id)[0] : null
        console.log("product" , product)
        let businessId = product.attributes.business_id
        console.log("businessId", businessId)

        let color = {...this.state, color_id, product_id}
        console.log("color" , color)

        this.props.editColor(color);
 
        this.props.history.push(`/businesses/${businessId}/products/${product_id}`);
        // this.props.history.push(`/businesses`);
        this.setState({
            color_name: "",
            available_qty: "",
        })
    }



    render() { 

        const { loggedIn } = this.props;
        if (!loggedIn) return <Redirect to='/' />

        return ( 
            <div className="container-form">
                <div className="middle-container">
                    <h1>Edit Color Form</h1>
        
                    <form onSubmit={this.handleSubmit}>

                    <div className="row"> 
                        <div className="label">    
                            <label htmlFor="color_name">Color name:  </label>
                        </div>  
                            <input type="text" name="color_name" id="color_name" placeholder="Enter Color Name" value={this.state.color_name} onChange={this.handleChange} required/>
                    </div>

                    <div className="row"> 
                        <div className="label">  
                            <label htmlFor="available_qty">Available Quantity:  </label>
                        </div>  
                            <input type="text" name="available_qty" id="available_qty" placeholder="available qty" value={this.state.available_qty} onChange={this.handleChange} required/>
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

const mapStateToProps = state => {
    return {
      loggedIn: !!state.currentUser,
      businesses: state.businessReducer,
      products: state.productReducer,
      colors: state.colorReducer
    };    
}

 
export default connect(mapStateToProps, { editColor })(ProductColorEdit);