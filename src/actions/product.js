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

  export const editMyProduct = business => {
    // console.log("returned business is", business);
    return {
      type: "EDIT_PRODUCT",
      business
    }
  }

  export const deleteMyProduct = business => {
    // console.log("action business" , business)
    return {
      type: "DELETE_PRODUCT",
      business
    }
  }

  export const addColor = product => {
    return {
      type: "ADD_PRODUCT",
      product
    }
  }

  export const editMyColor = product => {
    console.log("ACTION returned product is", product);
    return {
      type: "EDIT_COLOR",
      product
    }
  }

  export const deleteMyColor = product => {
    // console.log("action product" , product)
    return {
      type: "DELETE_COLOR",
      product
    }
  }


  export const fetchProducts = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/products", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
            console.log(response);
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

  export const deleteProduct = (productId, businessId) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/businesses/${businessId}/products/${productId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(business => {
          // console.log("Response" , business);
          if (business.error) {
            alert(business.error)
          } else {
            dispatch(deleteMyProduct(business.data))
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

  export const editColor = (data) => {
    // console.log("create action data" , data)
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/products/${data.product_id}/colors/${data.color_id}`, {
        credentials: "include",
        method: "PATCH",
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
            dispatch(editMyColor(response.data))
          }
        })
        .catch(console.log)
    }
  }


  export const deleteColor = (productId, colorId) => {

    console.log("action", colorId)
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/products/${productId}/colors/${colorId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(product => {
          console.log("Response" , product);
          if (product.error) {
            alert(product.error)
          } else {
            dispatch(deleteMyColor(product.data))
          }
        })
        .catch(console.log)
    }
  }
