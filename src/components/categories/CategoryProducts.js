import React from 'react';

const CategoryProducts = (props) => {


    console.log("categoryProducts", props)
    // console.log(props.products.match.params.id[0])
    // console.log(props.products.categories.categories.products)

    let productList = props.products.categories.categories.filter(category => category.id == props.products.match.params.id)[0]

    console.log("products", productList);

    return (
        <div className="">
            {productList ? productList.attributes.products.map(product => 
            <div>
                <li> { product.name } </li>
            </div>
            )
            : null}
        
       </div>
    )
}

export default CategoryProducts;