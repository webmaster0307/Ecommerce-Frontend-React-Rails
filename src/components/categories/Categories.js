import React from 'react';
import { Link } from 'react-router-dom'

const Categories = (props) => {
    
    // console.log("categories props", props)
    // console.log("categoriesList.categories is", props.categoriesList.categories)
       
    return (
        <div className="categories">
            {props.categoriesList.categories ? props.categoriesList.categories.map(category => 
            <div key={category.id}>
           
            <Link to={`/category/${category.id}` }>
                <br></br>
                {/* <li className="categories-image">{ category.attributes.image }</li> */}
                <h2 className="categories-text">{ category.attributes.name } </h2>
                <li className="categories-image"> <img src={ category.attributes.image } ></img></li>
             </Link>
            </div>
            )
            : null
        }
       </div>
     )
}

export default Categories;

