import axios from "axios";

export function fetchSingleUser(userId) {
    return function(dispatch) {
        dispatch({type: "FETCH_SINGLE_USER"});

        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => {
                dispatch({type: "FETCH_SINGLE_USER_FULFILLED", payload: response.data
                })
            })
            .catch((err) => {
                dispatch({type: "FETCH_SINGLE_USER_REJECTED", payload: err})
            })
    }
}
