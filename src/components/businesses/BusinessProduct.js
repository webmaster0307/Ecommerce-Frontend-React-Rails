import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../actions/product'
import { fetchProducts } from '../../actions/product'

class BusinessProduct extends Component {
    constructor(props){
        super(props);


    // console.log("BusinessProduct", this.props);
    }

    

    handleDelete = (productId) => {
        // console.log("productId", productId)
        this.props.deleteProduct(productId);
        this.props.history.push('/businesses');
    }


    
    render() { 

        let product = this.props.products.products.filter(product => product.id === this.props.match.params.id)[0]
        console.log("product", product)

        let productBusinessId = product ? product.attributes.business_id : null
        // console.log("businessId", productBusinessId)

        let productColors = product ? product.attributes.colors.map(color => 
            <div key={color.color_id}>
                <li className="product-text">{color.color_name}</li> 
            </div>
        ) : null
    
        let editLink =  product ? <Link to={`/businesses/${productBusinessId}/products/${product.attributes.id}/edit`} className="edit-link">Edit Product</Link> : null

        let linkBusiness =  product ? <Link to={`/businesses/${productBusinessId}`} className="edit-link">Link Back to Products</Link> : null
        return(
            <div className="product-main">
                <div className="product-flex">
                    <div className="product col-5">
                        <li className="product-image">{product ? <img src={ product.attributes.image } alt="product" ></img> : null}</li>
                    </div>
                </div>
    
                <div className="product-info col-7">

                    <li className="product-text"> <b className="titlespacing">Category Name:</b> {product ? product.attributes.category.name : null}</li>
                    <li className="product-text"> <b className="titlespacing">Subcategory Name:</b> {product ? product.attributes.subcategory.name : null}</li>
                    <li className="product-text"> <b className="titlespacing">Product Name:</b> {product ? product.attributes.name : null}</li>
                    <li className="product-text"><b className="titlespacing">Description:</b> {product ? product.attributes.description : null}</li>
                    <li className="product-text"><b className="titlespacing">Item Number:</b> {product ? product.attributes.item_number : null}</li>
    
                    <br></br>
                    <li className="product-text"><b className="titlespacing">Colors:</b> </li>
                    { productColors }
                    
                    <br></br>
                    <li className="product-text"><b className="titlespacing" >Price:</b> ${product ? product.attributes.price : null}</li>
    
                    <br></br>
                    <br></br>
                    {linkBusiness}

                    {editLink}
                    <br></br>

                    <button onClick={() => this.handleDelete(`${product.attributes.id}`)} className="product-delete-button">Delete Product</button>

                    
                </div>     
            </div>
        )
    
        }
}
 
const mapStateToProps = state => {
    return {
      products: state.productReducer,
    };    
}

export default connect(mapStateToProps, { deleteProduct})(BusinessProduct);