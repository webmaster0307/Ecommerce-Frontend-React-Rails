
  export function fetchCategories() {
    return (dispatch) => {
      fetch('http://localhost:3001/api/v1/categories')
      .then(resp => resp.json())
      .then(categories => 
        // console.log("fetch", categories)
        dispatch({
        type: 'FETCH_CATEGORIES',
        categories
      })
      )
    }
  }