export default (state = {businesses: []}, action) => {
    switch (action.type) {
      case "FETCH_BUSINESSES":
        return {businesses: action.businesses}
        default:
            return state
    }
  }