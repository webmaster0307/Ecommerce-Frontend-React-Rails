import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCategories } from "../actions/category.js"
import Categories from '../components/categories/Categories.js'


class DashboardProductsContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
      }
 
    render() { 
        // const { categories } = this.props
        // console.log("pass", categories)
        // debugger;
      
        return ( 
          <div className="main">
             <Categories categoriesList={this.props} />
          </div>
         );
      }
  }

    const mapStateToProps = state => {
        // console.log("mapStateToProps", state);
          return {
            categories: state.categoryReducer,
            subcategories: state.subcategoryReducer,
          };    
    }
 
export default connect(mapStateToProps, { fetchCategories })(DashboardProductsContainer);


