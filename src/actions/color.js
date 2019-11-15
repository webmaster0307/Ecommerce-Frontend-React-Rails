export const setMyColors = colors => {
    // console.log("colors", colors);
    return {
      type: "FETCH_COLORS",
      colors
    }
  }

  export const fetchColors = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/colors", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
            // console.log("color", response);
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setMyColors(response))
          }
        })
        .catch(console.log)
    }
  }
