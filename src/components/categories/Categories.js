import React from 'react';
import { Link } from 'react-router-dom'

const Categories = (props) => {
    
    // console.log("categories props", props)
    // console.log("categoriesList.categories is", props.categoriesList.categories)
    
    let categories = props.categoriesList.categories ? props.categoriesList.categories.map(category => 
        <div key={category.id}>
        <Link to={`/category/${category.id}/products` }>
            <br></br>
            <h2 className="categories-text">{ category.attributes.name } </h2>
            <li className="categories-image"> <img src={ category.attributes.image } alt="category"></img></li>
         </Link>
        </div>
        )
        : null
    
    return (
        <div className="categories">
            {categories}
       </div>
     )
}

export default Categories;

