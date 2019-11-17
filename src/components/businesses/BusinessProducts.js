import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const BusinessProducts = (props) => {

    // console.log("BusinessProducts", props)
 
    // const { loggedIn } = this.props;
    // if (!loggedIn) return <Redirect to='/' />

    const businessId =  props.business ? props.business.attributes.id : null

    let currentBusinessProducts = props.business ? props.business.attributes.products.map(product =>
        <div key={product.id} className="">
            <Link to={`/businesses/${product.business_id}/products/${product.id}`}>
                <li className="products-image"><img src={ product.image } alt="product" ></img></li>
            </Link>
            <li className="products-text"> <b className="titlespacing"></b> {product.name}</li>
            <li className="products-text item-no"><b className="titlespacing">Item:</b> {product.item_number}</li>     
            <br></br>
            <br></br>
        </div>
        ) : null


        return (
            <div className="main">
                <div className="businesses">
                    <li className="business-name"><b className="titlespacing">Business Name:</b> {props.business ? props.business.attributes.name :null}</li>       
                    <li className="business-id"><b className="titlespacing">Business Tax ID:</b>  {props.business ? props.business.attributes.tax_id: null}</li>
                    <br></br>
                    <br></br>
                    <h2>Products</h2>
                    <br></br>
                    <Link to={`/businesses/${businessId}/products/new`} className="edit-link">Add New Product</Link>
                    <br></br>
                    <br></br>
                 </div>

                <div className="products">
                    { currentBusinessProducts }
                </div>
            </div>
        )
    
}


const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(BusinessProducts);
