import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



const CategoryProducts = (props) => {

    console.log("categoryProducts", props)
    console.log(props.match ? props.match.params.id[0]: null)
    console.log("category props", props.categories.categories)

    let productList = props.match ? props.categories.categories.filter(category => category.id === props.match.params.id)[0] : null
    const CategoryId = props.match ? props.match.params.id[0] : null
    const CategoryName = productList ? productList.attributes.name : null
    
    // console.log("products", productList);
    // console.log("category is", CategoryName)


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
          <div className="wrapper, product">
            {sortedProducts}
          </div>
      </div>
    )
}

const mapStateToProps = state => {
      return {
        categories: state.categoryReducer,
      };    
}

export default connect(mapStateToProps)(CategoryProducts);