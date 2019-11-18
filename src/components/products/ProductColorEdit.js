import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { editColor } from '../../actions/product'

class ProductColorEdit extends Component {
    constructor(props){
        super(props);

        // console.log("color edit", props)
        let colorId = props ? props.match.params.id : null
        let colorIdInt = parseInt(colorId)
        // console.log("colorId", colorId)
        let product_color = props.productId ? props.productId.attributes.colors.filter(color => colorIdInt === color.color_id)[0] : null
        // console.log("product_color", product_color)

        this.state = { 
            color_name: `${this.props.productId ? product_color.color_name : ""}` ,
            available_qty: `${this.props.productId ? product_color.available_qty : ""}` ,
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
        let product_id = this.props.productId.attributes.id
        let businessId = this.props.productId.attributes.business_id
        let color_id = parseInt(this.props.match.params.id)

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
    };    
}

 
export default connect(mapStateToProps, { editColor })(ProductColorEdit);