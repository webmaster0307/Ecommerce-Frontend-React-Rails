import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchProducts } from "../actions/product.js"


class ProductsContainer extends Component {
   
    componentDidMount() {
        this.props.fetchProducts()
      }

    render() { 
        return ( 
            <div>Products Container</div>
         );
    }
}
 
export default connect(null, { fetchProducts})(ProductsContainer);

