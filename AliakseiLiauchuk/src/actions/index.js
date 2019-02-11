export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export const requestUsers = () => ({
  type: REQUEST_USERS
})

export const receiveUsers = (json) => ({
  type: RECEIVE_USERS,
  users: json,
})

const fetchUsers = () => dispatch => {
  dispatch(requestUsers())
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(json => dispatch(receiveUsers(json)))
}

export const fetchUsersIfNeeded = () => (dispatch) => {
    return dispatch(fetchUsers())
}
