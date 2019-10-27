import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const CategoryProducts = (props) => {

    // console.log("categoryProducts", props)
    // console.log(props.match.params.id[0])
    // console.log(props.categories.categories)

    let productList = props.categories.categories.filter(category => category.id == props.match.params.id)[0]
    const categoryId = props.match.params.id[0]
    const categoryName= productList ? productList.attributes.name : null
    
    console.log("products", productList);
    // console.log("category is", categoryName)

    return (
        <div className="wrapper">
            <h1 className="product">{categoryName}</h1>
            <div className="product">
                {productList ? productList.attributes.products.map(product => 
                <div key={categoryId}>
                    <Link to={`/category/${categoryId}/product/${product.id}` }>
                    <li className="product-image"> <img src={ product.image } ></img></li>
                    <li className="product-text"> { product.name } <br></br></li> 
                    </Link>
                    <li className="product-price"> ${ product.price }</li>
                </div>
                )
                : null}
            </div>
       </div>
    )
}

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
      return {
        categories: state.categoryReducer
      };    
}

export default connect(mapStateToProps)(CategoryProducts);