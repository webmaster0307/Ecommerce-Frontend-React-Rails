import React from 'react';
import { connect } from 'react-redux'

const Product = (props) => {

    // console.log("product props", props);
    // console.log(props.match.params.id[0])

    let product = props.products.products.filter(product => product.id === props.match.params.id)[0]
    // console.log("product is", product)

    return(
        <div className="product-container">
            <div className="product-flex">
                <div className="col-6">
                    <li className="product-image">{product ? <img src={ product.attributes.image } alt="product" ></img> : null}</li>
                </div>
            </div>

            <div className="col-6">
                <h3 className="product-text">Style#: {product ? product.attributes.item_number : null}</h3>
                <h3 className="product-text">Name: {product ? product.attributes.name : null}</h3>
                <h3 className="product-text">Description: {product ? product.attributes.description : null}</h3>
                <h3 className="product-text">Price: ${product ? product.attributes.price : null}</h3>
            </div>            
        </div>
    )
}

const mapStateToProps = state => {
    return {
      products: state.productReducer,
    };    
}

export default connect(mapStateToProps)(Product);