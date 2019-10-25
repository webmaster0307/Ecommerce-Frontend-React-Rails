export const setMyProducts = products => {
    return {
      type: "FETCH_PRODUCTS",
      products
    }
  }

  export const fetchProducts = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/products", {
        // credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
            // console.log(response);
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setMyProducts(response.data))
          }
        })
        .catch(console.log)
    }
  }