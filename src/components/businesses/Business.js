import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const Business = (props) => {
    console.log("business", props)

    let currentBusiness = props.businesses.businesses.filter(business => business.id === props.match.params.id)[0]
    console.log("currentBusiness", currentBusiness)

    // const currentBusinessID = props.businesses.businesses ? currentBusiness.id : null
    // console.log(currentBusinessID ? currentBusinessID : null )

    let currentBusinessProducts = currentBusiness ? currentBusiness.attributes.products.map(product =>
        <div key={product.id}>
            <Link to={`/businesses/${product.business_id}/products/${product.id}`}>
            
            <br></br>
            <li className="product-text"> <b className="titlespacing">Product Name:</b> {product.name}</li>
            </Link>
            <li className="product-text"><b className="titlespacing">Description:</b> {product.description}</li>
            <li className="product-text"><b className="titlespacing">Item Number:</b> {product.item_number}</li>
            
        
        </div>
        ) : null
        
    // handleOnClick() {
    //     this.props.deleteRestaurant(this.props.restaurant.id);
    //   }

    return (
        <div className="businesses">
            {/* NEED TO REDIRECT IF NOT CURRENT BUSINESS */}
          
            <li className="business-name"><b className="titlespacing">Business Name:</b> {currentBusiness ? currentBusiness.attributes.name :null}</li>       
            <li className="business-id"><b className="titlespacing">Business Tax ID:</b>  {currentBusiness ? currentBusiness.attributes.tax_id: null}</li>

             {/* <button onClick={() => this.handleOnClick()}> X </button>  */}
            
            <br></br>
            { currentBusinessProducts }
            
        </div>
    )
}

const mapStateToProps = state => {
      return {
        businesses: state.businessReducer
      };    
}

export default connect(mapStateToProps)(Business);