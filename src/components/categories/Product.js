import React from 'react';
import { connect } from 'react-redux'

const Product = (props) => {

    console.log("product props", props);
    console.log(props.match.params.id[0])

    let product = props.products.products.filter(product => product.id === props.match.params.id)[0]
    console.log("product is", product)

    return(
        <div>
            {product ? <img src={ product.attributes.image } alt="product" ></img> : null}
            {product ? product.attributes.name : null}
            {product ? product.attributes.description : null}
            {product ? product.attributes.price : null}
        </div>
    )

}

const mapStateToProps = state => {
    return {
      products: state.productReducer,
    };    
}

export default connect(mapStateToProps)(Product);