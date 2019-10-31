import React from 'react';
import { connect } from 'react-redux'

const Product = (props) => {

    // console.log("product props", props);
    // console.log(props.match.params.id[0])

    let product = props.products.products.filter(product => product.id === props.match.params.id)[0]
    console.log("product is", product)

    let productColors = product ? product.attributes.colors.map(color => 
        <div key={color.id}>
            <li className="product-text">{color.color_name}</li> 
        </div>
    ) : null
        

    return(
        <div className="product-main">
            <div className="product-flex">
                <div className="product col-5">
                    <li className="product-image">{product ? <img src={ product.attributes.image } alt="product" ></img> : null}</li>
                </div>
            </div>

            <div className="product-info col-7">
                <li className="product-text">Product Name: {product ? product.attributes.name : null}</li>
                <li className="product-text">Description: {product ? product.attributes.description : null}</li>
                <li className="product-text">Item Number: {product ? product.attributes.item_number : null}</li>

                <br></br>
                <li className="product-text">Colors: </li>
                { productColors }
                
                <br></br>
                <li className="product-text">Price: ${product ? product.attributes.price : null}</li>

                <br></br>

                {/* <li className="product-qty">Select Qty: </li>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select> */}
  
                <button>Add to Cart</button>
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