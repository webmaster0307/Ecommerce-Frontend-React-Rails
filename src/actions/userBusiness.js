export const setMyBusinesses = businesses => {
    return {
      type: "FETCH_BUSINESSES",
      businesses
    }
  }

  export const addBusiness = business => {
    return {
      type: "ADD_BUSINESS",
      business
    }
  }

  export const editMyBusiness = business => {
    return {
      type: "EDIT_BUSINESS",
      business
    }
  }

  export const deleteMyBusiness = business => {
    return {
      type: "DELETE_BUSINESS",
      business
    }
  }

  export const fetchBusinesses = () => {
    // console.log("HERE")
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/businesses", {
        // Need to allow credientals to get current user businesses.
        credentials: "include",
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
            dispatch(setMyBusinesses(response.data))
          }
        })
        .catch(console.log)
    }
  }


export const createBusiness = (data) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/businesses", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(response => {
        // console.log("Response" , response);
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(addBusiness(response.data))
        }
      })
      .catch(console.log)
  }
}

export const editBusiness = (data) => {
  // console.log("HERE")
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/businesses/${data.id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(response => {
        console.log("Response" , response);
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(editMyBusiness(response.data))
        }
      })
      .catch(console.log)
  }
}

export const deleteBusiness = (data) => {
  console.log("HERE")
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/businesses/${data.id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(response => {
        console.log("Response" , response);
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(deleteMyBusiness(response.data))
        }
      })
      .catch(console.log)
  }
}
