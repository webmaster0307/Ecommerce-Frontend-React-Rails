export const setMyProducts = products => {
    return {
      type: "FETCH_PRODUCTS",
      products
    }
  }

  export const addProduct = product => {
    return {
      type: "ADD_PRODUCT",
      product
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

  export const createProduct = (data) => {
    console.log("create action data" , data)
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/businesses/${data.business_id}/products`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(r => r.json())
        .then(response => {
            // console.log(response);
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(addProduct(response.data))
          }
        })
        .catch(console.log)
    }
  }