import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CategoryNav from './CategoryNav.js'


const CategoryProducts = (props) => {

    // console.log("categoryProducts", props)
    // console.log(props.match.params.id[0])
    // console.log(props.categories.categories)

    let productList = props.categories.categories.filter(category => category.id == props.match.params.id)[0]
    const categoryId = props.match.params.id[0]
    const categoryName= productList ? productList.attributes.name : null
    
    // console.log("products", productList);
    // console.log("category is", categoryName)


    let categoryProducts = productList ? productList.attributes.products.map(product => 
        <div key={categoryId}>
            <Link to={`/category/${categoryId}/product/${product.id}` }>
            <li className="product-image"> <img src={ product.image } ></img></li>
            <li className="product-text"> { product.name } <br></br></li> 
            </Link>
            <li className="product-price"> ${ product.price }</li>
        </div>
        )
        : null

    return (
        
        <div className="row">
            <h1 className="product">{categoryName}</h1>
                <div className="col-3"><CategoryNav /> </div>
                    
                <div className="col-9">
                    <div className="wrapper, product">
                       {categoryProducts}
                    </div>
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