import axios from "axios";

export function fetchComments () {
    return function (dispatch) {
        dispatch ({type:"FETCH_COMMENTS"});
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            dispatch({type:"FETCH_COMMENTS_FULLFILLED", payload:response.data})
        })
        .catch((err) => {
            dispatch({type:"FETCH_COMMENTS_REJECTED", payload:err})
        })
    }
        
    
}