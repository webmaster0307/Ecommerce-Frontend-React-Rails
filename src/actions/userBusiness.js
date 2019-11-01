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
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/businesses', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: "include",
      method: 'POST',
      body: JSON.stringify(data)
    })

    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(addBusiness(response.data))
      }
    })
    .catch(console.log)
  }
}
  