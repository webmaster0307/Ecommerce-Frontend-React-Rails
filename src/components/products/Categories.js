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
                    <li>{ category.attributes.name } </li>
                    </Link>
                </div>
            )}
    </div>
    )
}

export default Categories;

