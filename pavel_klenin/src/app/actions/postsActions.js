import axios from 'axios';

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({type: 'FETCH_POSTS'});
        
        axios.get('http://jsonplaceholder.typicode.com/posts/')
            .then(response => dispatch({
                type: 'FETCH_POSTS_FULFILLED',
                payload: response.data,
            }))
            .catch(error => dispatch({
                type: 'FETCH_POSTS_ReJECTED',
                payload: error,
            }));
    }
}