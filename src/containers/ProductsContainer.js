import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchProducts } from "../actions/product.js"
import Products from '../components/products/Products.js'


class ProductsContainer extends Component {
   
    componentDidMount() {
        this.props.fetchProducts()
      }

    render() { 
        return ( 
            <div>
                <Products products={this.props.products} />
            </div>
            
         );
    } 
}

const mapStateToProps = state => {
    console.log("mapStateToProps products", state);
      return {
        products: state.productReducer
      };    
}
 
export default connect(mapStateToProps, { fetchProducts})(ProductsContainer);

