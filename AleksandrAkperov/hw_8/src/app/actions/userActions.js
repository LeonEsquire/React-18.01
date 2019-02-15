import axios from "axios";

export function fetchUser () {
    return function (dispatch) {
        dispatch ({type:"FETCH_USER"});
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            dispatch({type:"FETCH_USER_FULLFILLED", payload:response.data})
        })
        .catch((err) => {
            dispatch({type:"FETCH_USER_FULLFILLED", payload:err})
        })
    }
        
    
}