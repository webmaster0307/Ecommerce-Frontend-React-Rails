export const setMyProducts = products => {
    return {
      type: "FETCH_PRODUCTS",
      products
    }
  }


  export const addProduct = business => {
    return {
      type: "ADD_PRODUCT",
      business
    }
  }

  export const editMyProduct = product => {
    console.log("returned product is", product);
    return {
      type: "EDIT_PRODUCT",
      product
    }
  }

  export const deleteMyProduct = productId => {
    // console.log("returned product is", product);
    return {
      type: "DELETE_PRODUCT",
      productId
    }
  }

  export const addColor = product => {
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
    // console.log("create action data" , data)
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

  export const editProduct = (data) => {
    console.log("edit action data" , data)
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/businesses/${data.business_id}/products/${data.product_id}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(r => r.json())
        .then(response => {
            console.log("response", response);
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(editMyProduct(response.data))
          }
        })
        .catch(console.log)
    }
  }

  export const deleteProduct = (productId) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/products/${productId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          // console.log("Response" , response);
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(deleteMyProduct(productId))
          }
        })
        .catch(console.log)
    }
  }
  

  export const createColor = (data) => {
    // console.log("create action data" , data)
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/products/${data.product_id}/colors`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(r => r.json())
        .then(response => {
            console.log(response);
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(addColor(response.data))
          }
        })
        .catch(console.log)
    }
  }
