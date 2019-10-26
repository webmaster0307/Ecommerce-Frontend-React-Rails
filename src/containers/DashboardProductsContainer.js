import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCategories } from "../actions/category.js"
import Carosel from '../components/Carosel'
import Categories from '../components/categories/Categories.js'


class DashboardProductsContainer extends Component {

    componentDidMount() {
        // this.props.fetchCategories()
      }
 
    render() { 
        // const { categories } = this.props
        // console.log("pass", categories)
        // debugger;
      
        return ( 
          <div className="main">
            <div className="carosel">
               <Carosel />
            </div>
              <div className = "wrapper">
                <Categories categoriesList={this.props.categories} />
              </div> 
            </div>
         );
      }
  }

    const mapStateToProps = state => {
        // console.log("mapStateToProps", state);
          return {
            categories: state.categoryReducer
          };    
    }
 
export default connect(mapStateToProps, { fetchCategories })(DashboardProductsContainer);


