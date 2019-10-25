import React from 'react';
import ProductsContainer from '../../containers/ProductsContainer.js'

const CategoryProducts = (props) => {

    console.log("CategoryProducts" , props )
    return(
        <div>Category
            <ProductsContainer />
        </div>
        
    )
}

export default CategoryProducts;