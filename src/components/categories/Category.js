import React from 'react';
import { connect } from 'react-redux'
import CategoryProducts from './CategoryProducts.js'

const Category = (props) => {

    // const { categories } = this.props
    // console.log("CategoryProducts" , props )

    let category = props.categories.categories.filter(category => category.id == props.match.params.id)[0]
    
    return (
        <div className="">
            <h2>
                {category ? category.attributes.name : null} 
            </h2>
            <CategoryProducts products={props}/>
         </div>
     )
}

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
      return {
        categories: state.categoryReducer
      };    
}


export default connect(mapStateToProps)(Category);