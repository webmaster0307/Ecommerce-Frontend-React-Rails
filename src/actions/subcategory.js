export const setMySubcategories = subcategories => {
    return {
      type: "FETCH_SUBCATEGORIES",
      subcategories
    }
  }

  export const fetchSubcategories = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/subcategories", {
        // credentials: "include",
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
            dispatch(setMySubcategories(response.data))
          }
        })
        .catch(console.log)
    }
  }
  