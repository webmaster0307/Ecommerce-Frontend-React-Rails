export default (state = { businesses: [] }, action) => {
    switch (action.type) {
     
      case "FETCH_BUSINESSES":
        return {...state, businesses: action.businesses}
        case 'ADD_BUSINESS':
          return {...state, businesses: [...state.businesses, action.business]}
     
          case 'EDIT_BUSINESS':
            // console.log(state.businesses)
            // debugger;
             let businessFive = state.businesses.map(business => {
              if (business.id === action.business.id) {
              return action.business
               } else {
                return business
              }
            })
            console.log("businessFive", businessFive)
           return {...state, businesses: businessFive}


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
    
              return {...state, businesses: businessTwo } 
              
          case 'EDIT_PRODUCT':
              let businessThree = state.businesses.map(business => {
                if (business.id === action.business.id) {
                  return action.business
                } else {
                  return business
                }
              })
    
              return {...state, businesses: businessThree}

            case 'DELETE_PRODUCT':
                let businessFour = state.businesses.map(business => {
                  if (business.id === action.business.id) {
                    return action.business
                  } else {
                    return business
                  }
                })
      
                return {...state, businesses: businessFour}

            default:
            return state
    }
  }