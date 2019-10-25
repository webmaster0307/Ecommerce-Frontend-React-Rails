import React from 'react';
import { connect } from 'react-redux'
import ProductsContainer from '../../containers/ProductsContainer.js'

const CategoryProducts = (props) => {

    // const { categories } = this.props
    console.log("CategoryProducts" , props )

    let category = props.categories.categories.filter(category => category.id == props.match.params.id)[0]

    console.log(category)
    
    return (
        <div className="">
            <h2>
                {category ? category.attributes.name : null} 
            </h2>
         </div>
     )
}

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
      return {
        categories: state.categoryReducer
      };    
}


export default connect(mapStateToProps)(CategoryProducts);