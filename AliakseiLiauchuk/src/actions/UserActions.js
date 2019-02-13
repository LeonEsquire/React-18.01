export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'
import axios from 'axios'


export const getUsers = () => dispatch => {
  return axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.data)
    .then(json => dispatch(
      {
        type: RECEIVE_USERS,
        users: json,
      }
      ))
}

export const addUser = () => (dispatch, getState) => {
  const users = getState()
  return dispatch(
    {
      type: ADD_USER,
      user: {
        username: "newUsername",
        name: "newName",
        email: "newEmail",
        phone: "newPhone"
      },
      users: users
    }
  )
}
