export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = (json) => ({
  type: RECEIVE_USERS,
  users: json,
})

export const fetchUsers = () => dispatch => {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(json => dispatch(receiveUsers(json)))
}
