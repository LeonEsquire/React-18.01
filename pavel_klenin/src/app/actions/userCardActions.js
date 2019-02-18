import axios from 'axios';

export const fetchUserCard = (userID) => {
    return(dispatch) => {
        dispatch({type: 'FETCH_USERCARD'});

        axios.all([
            axios.get(`http://jsonplaceholder.typicode.com/users/${userID}`),
            axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${userID}`)
        ])
        .then(axios.spread((user, posts) => dispatch({
            type: 'FETCH_USERCARD_FULFILLED',
            payload: {user: user.data, posts: posts.data},
        })))
        .catch(error => dispatch({
            type: 'FETCH_USERCARD_REJECTED',
            payload: error,
        }))
    }
}