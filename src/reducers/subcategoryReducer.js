export default (state = {subcategories: []}, action) => {
    switch (action.type) {
      case "FETCH_SUBCATEGORIES":
        return {subcategories: action.subcategories}
        default:
            return state
    }
  }