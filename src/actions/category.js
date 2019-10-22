// synchronous actions
export const setCategories = categories => {
    console.log(categories)
    return {
      type: "SET_CATEGORIES",
      categories
    }
  }

// asynchronous actions
  export const getCategories = () => {
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
            console.log(response)
          dispatch(setCategories(response))
        }
      })
      .catch(console.log)
    }
  }
  