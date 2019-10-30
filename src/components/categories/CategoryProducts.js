import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SubCategoryNav from './SubCategoryNav.js'


const CategoryProducts = (props) => {

    // console.log("categoryProducts", props)
    // console.log(props.match.params.id[0])
    // console.log("category props", props.categories.categories)

    let productList = props.categories.categories.filter(category => category.id === props.match.params.id)[0]
    const CategoryId = props.match.params.id[0]
    const CategoryName= productList ? productList.attributes.name : null
    
    // console.log("products", productList);
    // console.log("category is", categoryName)


    let categoryProducts = productList ? productList.attributes.products.map(product => 
        <div key={product.id}>
            <Link to={`/category/${CategoryId}/product/${product.id}` }>
            <li className="product-image"> <img src={ product.image } alt="product" ></img></li>
            <li className="product-text"> { product.name } <br></br></li> 
            </Link>
            <li className="product-price"> ${ product.price }</li>
        </div>
        )
        : null

        // console.log(productList.attributes.products)


        // NOT SURE IF WORKING...ADD MORE PRODUCTS

      let sortedProducts = categoryProducts ? categoryProducts.sort(function(a,b){
        return a.Subcategory_id - b.Subcategory_id;
      })  
      : null
      // console.log("sortedProducts", sortedProducts)



    return (

        <div className="row">
            <h1 className="product">{CategoryName}</h1>
            <div className="col-3">
                {/* <SubCategoryNav products={props} /> */}
            </div>
            <div className="col-9">
                <div className="wrapper, product">
                    {sortedProducts}
                </div>
            </div>
       </div>
    
    )
}

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
      return {
        categories: state.categoryReducer,
        // subcategories: state.subcategoryReducer,
      };    
}

export default connect(mapStateToProps)(CategoryProducts);