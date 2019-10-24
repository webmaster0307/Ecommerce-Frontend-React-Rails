import React from 'react';
import { Link} from 'react-router-dom'

const Categories = (props) => {
    console.log("categories props", props)
    return (
    <div>
        {props.categoriesList.categories.map(category => 
            <Link to={`/category/${category.id}`}><div key={category.id}>
                { category.name }
            </div></Link>
        )}
    </div>
    )
}

export default Categories;