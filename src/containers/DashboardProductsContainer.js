import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCategories } from "../actions/category.js"
import { fetchSubcategories } from "../actions/subcategory.js"
import { fetchProducts } from "../actions/product.js"
import Categories from '../components/categories/Categories.js'
import ControlledCarousel from '../components/dashboard/ControlledCarousel.js'

class DashboardProductsContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchProducts()
        this.props.fetchSubcategories()
   
      }
 
    render() { 
        // const { categories } = this.props
        // console.log("pass", categories)
        // debugger;
      
        return ( 
          <div className="main">
            <Categories categoriesList={this.props} />
            <ControlledCarousel/>
          </div>
         );
      }
  }

    const mapStateToProps = state => {
        // console.log("mapStateToProps", state);
          return {
            categories: state.categoryReducer,
            products: state.productReducer,
    
          };    
    }
 
export default connect(mapStateToProps, { fetchCategories, fetchSubcategories, fetchProducts })(DashboardProductsContainer);


