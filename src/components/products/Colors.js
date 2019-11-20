import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteColor } from '../../actions/product'


class Colors extends Component {
    constructor(props){
        super(props);

    console.log("Colors", this.props);

   
    }

        handleColorDelete = (colorId) => {
        console.log("colorId", colorId)
        let productId = this.props.product.match.params.id
        let businessId = this.props.product.product.business_id
        console.log("productId", productId)
        console.log("businessId" ,businessId)
        this.props.deleteColor(productId, colorId);
        this.props.product.history.push(`/businesses/${businessId}/products/${productId}`);
    }



    render() { 

    let currentProductId = this.props.product.match.params.id
    let filteredProduct = this.props.products ? this.props.products.products.filter(product => product.id === currentProductId )[0] : null
    console.log("filteredProduct", filteredProduct)

    let linkColorNew = this.props.product ?  <Link to={`/products/${currentProductId}/colors/new`} className="edit-link">Add New Color</Link> : null


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
                { linkColorNew }
                <br></br>
                { productColors }
            </div> 
        );
    }
}

const mapStateToProps = state => {
    return {
      loggedIn: !!state.currentUser,
      businesses: state.businessReducer,
      products: state.productReducer,
    };    
}

 
export default connect(mapStateToProps, { deleteColor })(Colors);