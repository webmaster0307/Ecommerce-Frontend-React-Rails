import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchProducts } from "../actions/product.js"
import Product from '../components/categories/Product.js'


class ProductsContainer extends Component {
   
    componentDidMount() {
        // this.props.fetchProducts()
      }

    render() { 
        return ( 
            <div>
                <Product products={this.props} />
            </div>
            
         );
    } 
}

const mapStateToProps = state => {
    // console.log("mapStateToProps products", state);
      return {
        products: state.productReducer
      };    
}
 
export default connect(mapStateToProps)(ProductsContainer);

