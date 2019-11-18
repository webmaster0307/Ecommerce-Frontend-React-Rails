import React from 'react';
import { Link } from 'react-router-dom'
import CategoryProducts from './CategoryProducts.js'

const Categories = (props) => {
    
    // console.log("categories props", props)
    // console.log("categoriesList.categories.categories is", props.categoriesList.categories.categories)
    
    let sortedCategories = props.categoriesList ? props.categoriesList.categories.categories.sort(function(a, b) {
        var nameA = a.attributes.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.attributes.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }) : null 
    

    //   console.log("sortedCategories", sortedCategories)

    let categories = sortedCategories ? sortedCategories.map(category => 
        <div key={category.id}>
        <Link to={`/category/${category.id}/products` }>
            <li className="categories-text">{ category.attributes.name } </li>
            {/* <li className="categories-image"> <img src={ category.attributes.image } alt="category"></img></li> */}
         </Link>
        </div>
        )
        : null

        // console.log(categories)

    
    return (
        <div className="categories">
            {categories}
            <CategoryProducts categories={props} />
       </div>
    )
}

export default Categories;

