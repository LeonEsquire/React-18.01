import axios from "axios";

export function fetchPosts () {
    return function (dispatch) {
        dispatch ({type:"FETCH_POSTS"});
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            dispatch({type:"FETCH_POSTS_FULLFILLED", payload:response.data})
        })
        .catch((err) => {
            dispatch({type:"FETCH_POSTS_REJECTED", payload:err})
        })
    }
        
    
}

export function deletePost(posts) {
    return function (dispatch) {
        posts.splice(arguments[0],1);
        dispatch({type:"DELETE_POST", payload:posts})
};
}