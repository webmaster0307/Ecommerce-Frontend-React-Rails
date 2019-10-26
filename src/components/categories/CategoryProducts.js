import React from 'react';
import { Link } from 'react-router-dom'


const CategoryProducts = (props) => {

    console.log("categoryProducts", props)
    // console.log(props.products.match.params.id[0])
    // console.log(props.products.categories.categories.products)

    let productList = props.products.categories.categories.filter(category => category.id == props.products.match.params.id)[0]
    const categoryId = props.products.match.params.id[0]
    console.log("products", productList);

    return (
        <div className="wrapper">
            <div className="product-list">
                {productList ? productList.attributes.products.map(product => 
                <div>
                    <Link to={`/category/${categoryId}/product/${product.id}` }>
                    <li className="product"> { product.name } </li>
                    </Link>
                </div>
                )
                : null}
            </div>
       </div>
    )
}

export default CategoryProducts;