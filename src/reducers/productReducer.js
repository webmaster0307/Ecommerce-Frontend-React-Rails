export default (state = {products: []}, action) => {
  
  switch (action.type) {
    
    case "FETCH_PRODUCTS":
      return {products: action.products}

      case "EDIT_PRODUCT":
          let product = state.products.map(product => {
            if (product.id === action.product.id) {
            return action.product 
          } else {
            return product
          }
      })

      return {...state, products: product}


      default:
          return state
  }

}







