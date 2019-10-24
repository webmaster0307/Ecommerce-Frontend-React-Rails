import React from 'react';
import { Link } from 'react-router-dom'
import CategoryProducts from './CategoryProducts.js'

const Categories = (props) => {
    
    console.log("categories props", props)
    // console.log("categories list", props.categoriesList.categories.data)
    
        return (
        <div>
            {props.categoriesList.categories.map(category => 
            <div key={category.id}>
                <Link to={`/category/${category.id}` }>
                    { category.attributes.name } </Link>
                </div>
            )}
    </div>
    )
}






//     return (
//         <div>
//             {/* {props.categoriesList.categories.map(category => 
//             <div key={category.id}>
//                 <Link to={`/category/${category.id}` }>
//                     { category.name } </Link>
//                 </div>
//             )} */}
//     </div>
//     )
// }

export default Categories;

// <div key={category.id}>
//             <Link to={`/category/${category.id}` }>
//                 { category.attributes.name } </Link>
//             </div>

// state.categoryReducer.categories.data.map(c => c.attributes.name)