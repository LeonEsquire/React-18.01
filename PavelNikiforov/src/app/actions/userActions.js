import axios from 'axios'

export function fetchUsers(id = null) {
    return (dispatch => {
        dispatch({type: 'FETCH_USERS'})
        
        const url = `https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ''}`
        axios.get(url)
        .then(response => {
            dispatch({
                type: 'FETCH_USERS_FULFILLED',
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_USERS_REJECTED',
                payload: err
            })
        })
    })
}

export function addUser(id, username, name, email, phone, website) {
    return (dispatch => {
        dispatch({
            type: 'ADD_USER',
            payload: {id, username, name, email, phone, website}
        })
    })
}