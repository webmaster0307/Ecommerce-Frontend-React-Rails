export default (state = {products: []}, action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS":
        return {products: action.products}
      // case 'ADD_PRODUCT':
      //   return {...state, products: [...state.products, action.product]}

        default:
            return state
    }
  }