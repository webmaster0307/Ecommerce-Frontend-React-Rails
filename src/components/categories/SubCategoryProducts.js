import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const SubCategoryProducts = (props) => {
    return (
        <div>Products by Selected Subcategory</div>
    )

}

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
      return {
        categories: state.categoryReducer
      };    
}

export default connect(mapStateToProps)(SubCategoryProducts);