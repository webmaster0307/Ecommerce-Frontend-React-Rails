import React from 'react';
import { Link } from 'react-router-dom'
import CategoryProducts from './CategoryProducts.js'

const Categories = (props) => {
    
    console.log("categories props", props)
    // console.log("categories list", props.categoriesList.categories.data)
    
    console.log("categoriesList.categories is", props.categoriesList.categories)
        return (
        <div className="categories">
            {props.categoriesList.categories.map(category => 
            <div key={category.id}>
                <Link to={`/category/${category.id}` }>
                    <li className="categories-text">{ category.attributes.name } </li>
                    <li className="categories-image">image</li>
                    </Link>
                </div>
            )}
    </div>
    )
}

export default Categories;

