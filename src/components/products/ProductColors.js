import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteColor } from '../../actions/product'


class ProductColors extends Component {
    constructor(props){
        super(props);

    console.log("Colors props", this.props);
    }

        handleColorDelete = (colorId) => {
        // console.log("colorId", colorId)
        let productId = this.props.products.product.match.params.id
        let businessId = this.props.products.product.product.business_id
        // console.log("productId", productId)
        // console.log("businessId" ,businessId)
        this.props.deleteColor(productId, colorId);
        // debugger;
        this.props.products.product.history.push(`/businesses/${businessId}/products/${productId}`);
    }



    render() { 

    let currentProductId = this.props.products.product.match.params.id
    let filteredProduct = this.props.products ? this.props.products.products.products.filter(product => product.id === currentProductId )[0] : null
    // console.log("filteredProduct", filteredProduct)

    let linkColorNew = this.props.products.product ?  <Link to={`/products/${currentProductId}/colors/new`} className="edit-link">Add New Color</Link> : null


    let productColors =  filteredProduct ? filteredProduct.attributes.colors.map(color => 
            <div key={color.color_id}>
                <br></br>
                <li className="product-text">Color Name:  {color.color_name} - Available Qty: {color.available_qty}</li> 
                <Link to={`/products/${currentProductId}/colors/${color.color_id}/edit`} className="edit-link">Edit Color</Link>
                <br></br>
                <button onClick={() => this.handleColorDelete(`${color.color_id}`)} className="button">X</button>
            </div>
        ) : null

        return ( 
            <div>
                {linkColorNew}
                { productColors }
            </div> 
        );
    }
}

const mapStateToProps = state => {
    return {
      loggedIn: !!state.currentUser,
    };    
}

 
export default connect(mapStateToProps, { deleteColor })(ProductColors);