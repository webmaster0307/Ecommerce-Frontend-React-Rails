export default (state = { businesses: [] }, action) => {
    switch (action.type) {
     
      case "FETCH_BUSINESSES":
        return {...state, businesses: action.businesses}
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

         case 'DELETE_BUSINESS':
            const businesses = state.businesses.filter(business => business.id !== action.businessId);
            return {...state, businesses }  

          case 'ADD_PRODUCT':
              let businessTwo = state.businesses.map(business => {
                if (business.id === action.business.id) {
                  return action.business
                } else {
                  return business
                }
              })
    
              return {...state, businesses: businessTwo}

          case 'EDIT_PRODUCT':
              let businessThree = state.businesses.map(business => {
                if (business.id === action.business.id) {
                  return action.business
                } else {
                  return business
                }
              })
    
              return {...state, businesses: businessThree}

            default:
            return state
    }
  }