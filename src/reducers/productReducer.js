export default (state = {products: []}, action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS":
        return {products: action.products}
        default:
            return state
    }
  }