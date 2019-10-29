import React, { Component } from 'react';
import {connect} from 'react-redux'
// import { fetchProducts } from "../actions/product.js"
import Categories from '../components/categories/Categories.js'


class ProductsContainer extends Component {
   
    componentDidMount() {
        // this.props.fetchProducts()
      }

    render() { 
        return ( 
            <div>
                <Categories productsList={this.props.products} />
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

