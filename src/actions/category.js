
  // export function fetchCategories() {
  //   return (dispatch) => {
  //     fetch('http://localhost:3001/api/v1/categories')
  //     .then(resp => resp.json())
  //     .then(categories => 
  //       // console.log("fetch", categories)
  //       dispatch({
  //       type: 'FETCH_CATEGORIES',
  //       categories
  //     })
  //     )
  //   }
  // }


  export const setMyCategories = categories => {
    return {
      type: "FETCH_CATEGORIES",
      categories
    }
  }

  export const fetchCategories = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/categories", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setMyCategories(response.data))
          }
        })
        .catch(console.log)
    }
  }
  