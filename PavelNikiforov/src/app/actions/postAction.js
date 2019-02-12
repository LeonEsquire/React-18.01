import axios from 'axios'

export function fetchPosts(id = null) {
    return (dispatch => {
        dispatch({type: 'FETCH_POSTS'})

        const url = `https://jsonplaceholder.typicode.com/posts${id ? `/${id}` : ''}`
        axios.get(url)
        .then(response => {
            dispatch({
                type: 'FETCH_POSTS_FULFILLED',
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_POSTS_REJECTED',
                payload: err
            })
        })
    })
}