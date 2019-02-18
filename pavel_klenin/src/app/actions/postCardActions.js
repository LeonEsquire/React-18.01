import axios from 'axios';

export const fetchPostCard = (postID) => {
    return (dispatch) => {
        dispatch({type: 'FETCH_POSTCARD'});

        axios.all([
            axios.get(`http://jsonplaceholder.typicode.com/posts/${postID}`),
            axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${postID}`)
        ])
        .then(axios.spread((post, comments) => {
            axios.get(`http://jsonplaceholder.typicode.com/users/${post.data.userId}`)
                .then((user) => dispatch({
                    type: 'FETCH_POSTCARD_FULFILLED',
                    payload: {post: post.data, comments: comments.data, userName: user.data.name},
                }))
        }))
        .catch(error => dispatch({
            type: 'FETCH_POSTCARD_REJECTED',
            payload: error,
        }))
    }
}



