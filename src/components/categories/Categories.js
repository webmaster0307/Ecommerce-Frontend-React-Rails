import React from 'react';
import { Link } from 'react-router-dom'
import CategoryProducts from './CategoryProducts.js'

const Categories = (props) => {
    
    // console.log("categories props", props)
    // console.log("categoriesList.categories.categories is", props.categoriesList.categories.categories)
    
    let categories = props.categoriesList.categories.categories ? props.categoriesList.categories.categories.map(category => 
        <div key={category.id}>
        <Link to={`/category/${category.id}/products` }>
            <li className="categories-text">{ category.attributes.name } </li>
            <li className="categories-image"> <img src={ category.attributes.image } alt="category"></img></li>
         </Link>
        </div>
        )
        : null
    
    return (
        <div className="categories">
            {categories}
            <CategoryProducts categories={props} />
       </div>
     )
}

export default Categories;

