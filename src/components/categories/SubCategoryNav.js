import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const SubCategoryNav = (props) => {

    // console.log("subCategoryNav props",props);

    const CategoryIdforLink = props.products.match.params.id[0]
    // console.log("categoryIdforLink", categoryIdforLink)

    // let subcategoryName = props.categories.categories.filter(category => category.id === props.match.params.id)[0]
    // console.log("subcategories", props.products.categories.categories.filter(category => category.id === props.products.match.params.id)[0])

    let currentCategory = props.products ? props.products.categories.categories.filter(category => category.id === props.products.match.params.id)[0] : null
    // console.log("currentCategory is", currentCategory)
  
    let subcategoryIdforLink = currentCategory ? currentCategory.attributes.subcategories.map(subcategory => 
        <div>
            <li>{subcategory.subcategory_id}</li>
        </div>
        ) : null

// let subcat = props.subcategories.subcategories
// console.log("subcat is", subcat)

//     let subcatProducts = props.subcategories.subcategories.map(products => 
//         products)
//          console.log("subcatProducts", subcatProducts)
    
//     let subcatMap = subcatProducts.map(product => product)
//     console.log("subcatMap", subcatMap)



    let subcategoryList = currentCategory ? currentCategory.attributes.subcategories.map(subcategory => 
        <div>
        <Link to={`/category/${CategoryIdforLink}/subcategory/${subcategoryIdforLink}` }>
            <li>{subcategory.subcategory_name}</li>
         </Link>
        </div>
        ) : null

    // console.log("subcategoryList", subcategoryList)

        

    // console.log("SubcategoryIdforLink", SubcategoryIdforLink)

        return (
            <div className="">
                <h2>SubCategories</h2>
                <br></br>
                    <div className="">
                    {subcategoryList}
                    </div> 
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