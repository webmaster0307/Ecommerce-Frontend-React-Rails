import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const CategoriesNav = (props) => {

    return (
        <div className="col-3">
            Category Nav Bar
        </div>
    )


}

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
      return {
        categories: state.categoryReducer
      };    
}

export default connect(mapStateToProps)(CategoriesNav);