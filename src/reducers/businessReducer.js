export default (state = { businesses: [], categories: [], subcategories: [], products: [] }, action) => {
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
            // debugger;

          //  let currentBusiness = state.businesses.filter(business => business.id === action.product.relationships.business.data.id)
          //  let currentBusinessProducts = currentBusiness[0].attributes.products 
          //  let newCurrentBusiness = [...currentBusinessProducts, action.product] 

          //     return {...state, businesses: newCurrentBusiness}

              let businessTwo = state.businesses.map(business => {
                if (business.id === action.business.id) {
                  return action.business
                } else {
                  return business
                }
              })
    
              return {...state, businesses: businessTwo}

            case "FETCH_CATEGORIES":
              return {...state, categories: action.categories }

            case "FETCH_SUBCATEGORIES":
              return {...state, subcategories: action.subcategories}

      
            case "FETCH_PRODUCTS":
              return {...state, products: action.products}
      
            default:
            return state
    }
  }