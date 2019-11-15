import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct, fetchProducts } from '../../actions/product'
import { fetchColors} from '../../actions/color'
import { Redirect } from 'react-router-dom'


class BusinessProduct extends Component {
    constructor(props){
        super(props);

    console.log("BusinessProduct", this.props);
    }

    componentDidMount() {
        this.props.fetchProducts()
        // this.props.fetchColors()
      }

    handleDelete = (productId) => {
        let businessId = this.props.business.id;
        this.props.deleteProduct(productId, businessId);
        this.props.history.push(`/businesses/${businessId}`);
    }


    
    render() { 

        const { loggedIn } = this.props;
        // console.log("loggedIn", loggedIn)
        if (!loggedIn) return <Redirect to='/' />

        let productForColor = this.props.products.products.filter(product => product.id === this.props.match.params.id)[0]
        console.log("product", productForColor)


        let productColors = productForColor ? productForColor.attributes.colors.map(color => 
            <div key={color.color_id}>
                <li className="product-text">Color Name:  {color.color_name} - Available Qty: {color.available_qty}</li> 
                <Link to={`/products/${productForColor.attributes.id}/colors/${color.color_id}/edit`} className="edit-link">Edit Color</Link>
            </div>
        ) : null
    
        let editLink =  this.props.product ? <Link to={`/businesses/${this.props.business.id}/products/${this.props.product.id}/edit`} className="edit-link">Edit Product</Link> : null

        let linkBusiness =  this.props.product ? <Link to={`/businesses/${this.props.business.id}`} className="edit-link">Link Back to Products</Link> : null
        
        let linkColorNew = this.props.product ?  <Link to={`/products/${this.props.product.id}/colors/new`} className="edit-link">Add New Color</Link> : null

        return(
            <div className="main">
                <div className="product-main">
                    <div className="product-flex">
                        <div className="product col-5">
                            <li className="product-image">{this.props.product ? <img src={ this.props.product.image } alt="product" ></img> : null}</li>
                        </div>
                    </div>
        
                    <div className="product-info col-7">

                        <li className="product-text"> <b className="titlespacing">Category Name:</b> {this.props.product ? this.props.product.category_name : null}</li>
                        <li className="product-text"> <b className="titlespacing">Subcategory Name:</b> {this.props.product ? this.props.product.subcategory_name : null}</li>
                        <li className="product-text"> <b className="titlespacing">Product Name:</b> {this.props.product ? this.props.product.name : null}</li>
                        <li className="product-text"><b className="titlespacing">Description:</b> {this.props.product ? this.props.product.description : null}</li>
                        <li className="product-text"><b className="titlespacing">Item Number:</b> {this.props.product ? this.props.product.item_number : null}</li>
        
                        <br></br>
                        <li className="product-text"><b className="titlespacing">Colors:</b> </li>
                        { productColors }
                        {linkColorNew}
                        
                        <br></br>
                        <li className="product-text"><b className="titlespacing" >Price:</b> ${this.props.product ? this.props.product.price : null}</li>
        
                        <br></br>
                        <br></br>
                        {linkBusiness}

                        {editLink}
                        <br></br>

                        <button onClick={() => this.handleDelete(`${this.props.product.id}`)} className="product-delete-button">Delete Product</button>

                        
                    </div>     
                </div>
            </div>
        )
    
        }
}
 
const mapStateToProps = state => {
    return {
      loggedIn: !!state.currentUser,
      products: state.productReducer,
    };    
}

export default connect(mapStateToProps, { deleteProduct, fetchProducts })(BusinessProduct);