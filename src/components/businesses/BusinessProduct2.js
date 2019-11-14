import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../actions/product'
import { Redirect } from 'react-router-dom'


class BusinessProduct extends Component {
    constructor(props){
        super(props);


    console.log("BusinessProduct2", this.props);
    }

    

    handleDelete = (productId) => {
        // console.log("productId", productId)
        this.props.deleteProduct(productId);
        this.props.history.push('/businesses');
    }


    
    render() { 

        const { loggedIn } = this.props;
        // console.log("loggedIn", loggedIn)
        if (!loggedIn) return <Redirect to='/' />

 
            let businessId = this.props.match.url[12] + this.props.match.url[13]
            console.log("businessId", businessId)
    
            let businessIdInt = parseInt(businessId)
    
            let currentBusiness = this.props.businesses.businesses.filter(business => business.attributes.id === businessIdInt)[0]
            console.log("business", currentBusiness)
    
            let productId = this.props.match.params.id
            console.log("productId", productId)
    
            let productIdInt = parseInt(productId)
    
            let currentProduct = currentBusiness.attributes.products
            console.log("currentProduct", currentProduct)
    
            let product = currentProduct.filter(product => product.id === productIdInt)[0]
            console.log("product", product)
    
    
     

                // debugger;

     

        let productForColor = this.props.products.products.filter(product => product.id === this.props.match.params.id)[0]
        console.log("product", productForColor)

        // let productBusinessId = product ? product.attributes.business_id : null
        // // console.log("businessId", productBusinessId)

        let productColors = productForColor ? productForColor.attributes.colors.map(color => 
            <div key={color.color_id}>
                <li className="product-text">Color Name:  {color.color_name} - Available Qty: {color.available_qty}</li> 
            </div>
        ) : null
    
        let editLink =  product ? <Link to={`/businesses/${businessIdInt}/products/${product.id}/edit`} className="edit-link">Edit Product</Link> : null

        let linkBusiness =  product ? <Link to={`/businesses/${businessIdInt}`} className="edit-link">Link Back to Products</Link> : null
        return(
            <div className="main">
                <div className="product-main">
                    <div className="product-flex">
                        <div className="product col-5">
                            <li className="product-image">{product ? <img src={ product.image } alt="product" ></img> : null}</li>
                        </div>
                    </div>
        
                    <div className="product-info col-7">

                        <li className="product-text"> <b className="titlespacing">Category Name:</b> {product ? product.category_name : null}</li>
                        <li className="product-text"> <b className="titlespacing">Subcategory Name:</b> {product ? product.subcategory_name : null}</li>
                        <li className="product-text"> <b className="titlespacing">Product Name:</b> {product ? product.name : null}</li>
                        <li className="product-text"><b className="titlespacing">Description:</b> {product ? product.description : null}</li>
                        <li className="product-text"><b className="titlespacing">Item Number:</b> {product ? product.item_number : null}</li>
        
                        <br></br>
                        <li className="product-text"><b className="titlespacing">Colors:</b> </li>
                        { productColors }
                        <Link to={`/products/${product.id}/colors/new`} className="edit-link">Add New Color</Link>

                        
                        <br></br>
                        <li className="product-text"><b className="titlespacing" >Price:</b> ${product ? product.price : null}</li>
        
                        <br></br>
                        <br></br>
                        {linkBusiness}

                        {editLink}
                        <br></br>

                        <button onClick={() => this.handleDelete(`${product.id}`)} className="product-delete-button">Delete Product</button>

                        
                    </div>     
                </div>
            </div>
        )
    
        }
}
 
const mapStateToProps = state => {
    return {
      businesses: state.businessReducer,
      products: state.productReducer,
      loggedIn: !!state.currentUser,
    };    
}

export default connect(mapStateToProps, { deleteProduct})(BusinessProduct);