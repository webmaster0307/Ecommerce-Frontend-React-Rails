export default (state = {businesses: []}, action) => {
    switch (action.type) {
      case "FETCH_BUSINESSES":
        return {businesses: action.businesses}
        case 'ADD_BUSINESS':
          return {...state, businesses: [...state.businesses, action.business]}
        case 'EDIT_BUSINESS':
          let business = state.businesses.map(business => {
              if (business.id === action.business.id) {
              return action.business
               } else {
                return business
              }
            })
           return {...state, businesses: business}
        
          default:
            return state
    }
  }