import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


class BusinessProducts extends Component {
    constructor(props){
        super(props);


    // console.log("business", this.props);
    }


    render() { 
        const { loggedIn } = this.props;
        if (!loggedIn) return <Redirect to='/' />
 
        let currentBusinessProducts = this.props.business ? this.props.business.attributes.products.map(product =>
            <div key={product.id} className="">
                
                <Link to={`/businesses/${product.business_id}/products/${product.id}`}>
                    <li className="products-image"><img src={ product.image } alt="product" ></img></li>
                </Link>
                <li className="products-text"> <b className="titlespacing">Product Name:</b> {product.name}</li>
                <li className="products-text"><b className="titlespacing">Item Number:</b> {product.item_number}</li>     
            </div>
            ) : null
    

            return (
                <div>
                    <div className="businesses">
                        <li className="business-name"><b className="titlespacing">Business Name:</b> {this.props.business ? this.props.business.attributes.name :null}</li>       
                        <li className="business-id"><b className="titlespacing">Business Tax ID:</b>  {this.props.business ? this.props.business.attributes.tax_id: null}</li>
                        <br></br>
                        <br></br>
                        <h2>Products</h2>
                        <br></br>
                     </div>

                    <div className="products">
                        { currentBusinessProducts }
                    </div>
                </div>
            )
        
    }
}
 
const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps)(BusinessProducts);