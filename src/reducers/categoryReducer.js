export default (state = {categories: []}, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {categories: action.categories}
      default:
          return state
  }
}