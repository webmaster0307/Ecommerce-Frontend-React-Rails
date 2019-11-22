import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CategoryProduct from './CategoryProduct'


class CategoryProducts extends Component {
  constructor(props){
    super(props);
    
    this.state = { 

     } 
}
   



  render() { 

        // console.log("categoryProducts", props)
    // console.log("category props", props.categories.categories)

    let productList = this.props.match ? this.props.categories.categories.filter(category => category.id === this.props.match.params.id)[0] : null
    const CategoryId = this.props.match ? this.props.match.params.id[0] : null
    const CategoryName = productList ? <li className="category-name">{productList.attributes.name}</li> : null
    
    // console.log("products", productList);
    
    let sortedProducts = productList ? productList.attributes.products.sort(function(a,b){
      return a.subcategory_id - b.subcategory_id;
    })   
    : null
     console.log("sortedProducts", sortedProducts)
    
    

    let categoryProducts = sortedProducts ? sortedProducts.map(product => (
       <CategoryProduct
          key={product.id}
          id={product.id}
          image={product.image}
          price={product.price}
          name={product.name}
          votes={product.votes}
          description={product.description}
          item_number={product.item_number}
       />
        ))
        : null

  
        return (
      
          <div className="products">
              <h1 className="products">{CategoryName}</h1>
              <div className="">
                {categoryProducts}
    
              </div>     
          </div>
        )
    
  }
}
 
const mapStateToProps = state => {
  return {
    categories: state.categoryReducer,
    subcategories: state.subcategoryReducer,
  };    
}

export default connect(mapStateToProps)(CategoryProducts);




