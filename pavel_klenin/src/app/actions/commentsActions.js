import axios from 'axios';

export const fetchComments = () => {
    return (dispatch) => {
        dispatch({type: 'FETCH_COMMENTS'});

        axios.get('http://jsonplaceholder.typicode.com/comments/')
            .then(response => dispatch({
                type: 'FETCH_COMMENTS_FULFILLED',
                payload: response.data,
            }))
            .catch(error => dispatch({
                type: 'FETCH_COMMENTS_REJECTED',
                payload: error,
            }))
    }
}