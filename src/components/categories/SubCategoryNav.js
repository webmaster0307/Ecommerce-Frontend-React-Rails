import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const SubCategoryNav = (props) => {

    console.log("subCategoryNav props",props);

    const categoryIdforLink = props.products.match.params.id[0]

    // let subcategoryName = props.categories.categories.filter(category => category.id === props.match.params.id)[0]
    console.log("subcategories", props.products.categories.categories.filter(category => category.id === props.products.match.params.id)[0])

    let currentCategory = props.products ? props.products.categories.categories.filter(category => category.id === props.products.match.params.id)[0] : null
    console.log("currentCategory is", currentCategory)


    let subcategoryList = currentCategory ? currentCategory.attributes.subcategories.map(subcategory => 
        <div>
            <li>{subcategory.subcategory_name}</li>
        </div>
        ) : null

    console.log("subcategoryList", subcategoryList)


    // console.log("subcateories", props.subcategories.subcategories)

    // let SubCategoryFilter = props.products ? props.products.subcategories.subcategories.filter(product => product.attributes.products.category_id == props.products.match.params.id)[0]
    // : null
    // console.log("SubCategoryFilter", SubCategoryFilter)

    // let subCategoryName = props.products ? props.products.subcategories.subcategories.map(product => 
    //     <li>{product.attributes.name}</li>
    //     ) : null
    // console.log("subCategoryName", subCategoryName)


            return (
        <div className="categoriesNav">
            <h2>SubCategories</h2>
            <br></br>
            {/* <Link to={`/category/${CategoryIdforLink}/subcategory` }> */}
                <div className="categoryNav">
                {subcategoryList }
                </div>
            {/* </Link> */}
        </div>
    )


}

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
      return {
        // categories: state.categoryReducer,
        subcategories: state.subcategoryReducer,
      };    
}

export default connect(mapStateToProps)(SubCategoryNav);