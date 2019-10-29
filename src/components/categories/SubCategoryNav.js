import React from 'react';
import { Link } from 'react-router-dom'


const SubCategoryNav = (props) => {

    console.log("subCategoryNav props",props);

    // let productCategoryList = props.products.categories.categories.filter(category => category.id == props.products.match.params.id)[0]
    // // console.log("product category list is", productCategoryList)

    // let productCategoryListProducts =  productCategoryList ? productCategoryList.attributes.products : null
    // // console.log("productCategoryListProducts", productCategoryListProducts)

    // let subCategoryName = productCategoryListProducts ? productCategoryListProducts.map(product => 
    // <li>{product.subcategory_name}</li>
    // ) : null
    // // console.log("subCategoryName", subCategoryName)

    // let subCategoryId = productCategoryListProducts ? productCategoryListProducts.map(product => 
    //     <li>{product.subcategory_id}</li>
    //     ) : null
    //     // console.log("subCategoryId", subCategoryId)

        
    // const CategoryIdforLink = productCategoryList ? productCategoryList.attributes.id : null
    // // console.log("CategoryIdforLink", CategoryIdforLink)



            return (
        <div className="categoriesNav">
            <h2>SubCategories</h2>
            <br></br>
            {/* <Link to={`/category/${CategoryIdforLink}/subcategory` }> */}
                <div className="categoryNav">
                {/* {subCategoryName } */}
                </div>
            {/* </Link> */}
        </div>
    )


}

export default SubCategoryNav;