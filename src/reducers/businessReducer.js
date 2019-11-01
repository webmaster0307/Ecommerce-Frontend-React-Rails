export default (state = {businesses: []}, action) => {
    switch (action.type) {
      case "FETCH_BUSINESSES":
        return {businesses: action.businesses}
        case 'ADD_BUSINESS':
          return {...state, businesses: [...state.businesses, action.businesses]}
        default:
            return state
    }
  }