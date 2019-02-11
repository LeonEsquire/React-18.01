import axios from "axios";

export const fetchUsers = () => {
 
  return function(dispatch) {
    //dispatch({type: "FETCH_USERS"});
    
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({type: "FETCH_USERS_FULFILLED", 
        payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({type: "FETCH_USERS_REJECTED", 
        payload: error,
      })
      })
  }
}
