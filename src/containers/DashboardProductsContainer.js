import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCategories } from "../actions/category.js"
import { fetchSubcategories } from "../actions/subcategory.js"
import Categories from '../components/categories/Categories.js'


class DashboardProductsContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchSubcategories()
      }
 
    render() { 
        // const { categories } = this.props
        // console.log("pass", categories)
        // debugger;
      
        return ( 
          <div className="main">
            <Categories categoriesList={this.props} />
            <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Smiley face" height="400" width="400"></img>
            <img src="https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Smiley face" height="400" width="400"></img>
            <img src="https://images.pexels.com/photos/1785138/pexels-photo-1785138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Smiley face" height="400" width="400"></img>
          </div>
         );
      }
  }

    const mapStateToProps = state => {
        // console.log("mapStateToProps", state);
          return {
            categories: state.categoryReducer,
            // subcategories: state.subcategoryReducer,
          };    
    }
 
export default connect(mapStateToProps, { fetchCategories, fetchSubcategories })(DashboardProductsContainer);


