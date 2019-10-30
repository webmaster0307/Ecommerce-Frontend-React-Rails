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
                <li className="product-text bold">Style#: {product ? product.attributes.item_number : null}</li>
                <li className="product-text bold">Name: {product ? product.attributes.name : null}</li>
                <li className="product-text">Description: {product ? product.attributes.description : null}</li>
                <li className="product-text">Price: ${product ? product.attributes.price : null}</li>
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