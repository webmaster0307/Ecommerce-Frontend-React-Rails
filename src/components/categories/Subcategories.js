import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
// import SubcategoryProducts from './CategoryProducts.js'

const Subcategories = (props) => {
    
    console.log("subcategories props", props)
    // console.log("subcategories.subcategories is", props.subcategories.subcategories)
    

    let subcategories = props.subcategories.subcategories ? props.subcategories.subcategories.map(subcategory => 
        <div key={subcategory.id}>
        <Link to={`/subcategory/${subcategory.id}/products` }>
            <li className="categories-text">{ subcategory.attributes.name } </li>
         </Link>
        </div>
        )
        : null

        // console.log(categories)
        // let subcategories = categories ? categories.attributes.subcategories.map(subcategory => subcategory.subcategory_name) : null
        // console.log("subcategories is", subcategories)
    
    return (
        <div className="categories">
            {subcategories}
            {/* <SubcategoryProducts subcategories={props} /> */}
       </div>
    )
}

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
      return {
        subcategories: state.subcategoryReducer,
      };    
}


export default connect(mapStateToProps)(Subcategories);
