// const initialState = []

// export default (state = initialState, action) => {
//     switch (action.type) {
//       case "FETCH_CATEGORIES":
//         return action.categories
//         default:
//             return state
//     }
//  }


 export default (state = {categories: []}, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {categories: action.categories}
      default:
          return state
  }
}