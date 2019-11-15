export default (state = {colors: []}, action) => {
  
    switch (action.type) {
  
      case "FETCH_COLORS":
        return {colors: action.colors}

      default:
       return state
    }
  
  }