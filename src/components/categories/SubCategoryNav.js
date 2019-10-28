import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const SubCategoryNav = (props) => {

    console.log(props);

    return (
        <div className="">
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

export default connect(mapStateToProps)(SubCategoryNav);