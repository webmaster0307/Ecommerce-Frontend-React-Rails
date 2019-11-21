import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchProducts } from "../actions/product.js"
import ProductColors from '../components/products/ProductColors.js'


class ProductsContainer extends Component {
    state = {  }

    componentDidMount() {
        this.props.fetchProducts()
      }

     
    render() { 

      console.log("productsContainer", this.props)
        return ( 
            <div> 
              <ProductColors products={this.props} />
            </div>
         );
    }
}

const mapStateToProps = state => {
      return {
        products: state.productReducer
      };    
}
 
export default connect(mapStateToProps, { fetchProducts })(ProductsContainer);