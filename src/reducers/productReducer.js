export default (state = {products: []}, action) => {
  
  switch (action.type) {
    
    case "FETCH_PRODUCTS":
      return {products: action.products}

      case 'ADD_COLOR':
        let productTwo = state.products.map(product => {
          if (product.id === action.product.id) {
            return action.product
          } else {
            return product
          }
        })

        return {...state, products: productTwo}


      default:
          return state
  }

}










