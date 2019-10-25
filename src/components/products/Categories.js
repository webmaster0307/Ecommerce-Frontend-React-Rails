import React from 'react';
import { Link } from 'react-router-dom'

const Categories = (props) => {
    
    // console.log("categories props", props)
    // console.log("categoriesList.categories is", props.categoriesList.categories)
       
    return (
        <div className="categories">
            {props.categoriesList.categories.map(category => 
            <div key={category.id}>
             <Link to={`/category/${category.id}` }>
                <li className="categories-image">image</li>
                <li className="categories-text">{ category.attributes.name } </li>
             </Link>
            </div>
            )}
         </div>
     )
}

export default Categories;

