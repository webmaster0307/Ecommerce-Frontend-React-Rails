import React from 'react';

const Categories = (props) => {
    console.log("categories props", props)
    return (
        <div>
            {props.categoriesList.categories.map(category => 
                <div key={category.id}>
                    { category.name }
                </div>
                )}
        </div>
    )
}

export default Categories;