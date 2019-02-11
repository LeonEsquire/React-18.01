export const RECEIVE_USERS = 'RECEIVE_USERS'
import axios from 'axios'

export const receiveUsers = (json) => ({
  type: RECEIVE_USERS,
  users: json,
})

export const fetchUsers = () => dispatch => {
  return axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.data)
    .then(json => dispatch(receiveUsers(json)))
}
