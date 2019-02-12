import axios from 'axios'

export function fetchComments(id = null) {
    return (dispatch => {
        dispatch({type: 'FETCH_COMMENTS'})

        const url = `https://jsonplaceholder.typicode.com/comments${id ? `/${id}` : ''}`
        axios.get(url)
        .then(response => {
            dispatch({
                type: 'FETCH_COMMENTS_FULFILLED',
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_COMMENTS_REJECTED',
                payload: err
            })
        })
    })
}