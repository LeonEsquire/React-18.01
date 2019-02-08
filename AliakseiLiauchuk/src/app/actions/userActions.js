import dispatcher from '../dispatcher';
import {ADD_USER, GET_USERS} from '../constants/userConstants';
import axios from 'axios';

export function addUser(username, name, email, phone, website)
{
  dispatcher.dispatch({
    type: ADD_USER,
    data: {username, name, email, phone, website}
  })
}

export function getUsers() {
  axios.get('https://jsonplaceholder.typicode.com/users/')
  .then(response => {
    dispatcher.dispatch({
      type: GET_USERS,
      data: response.data
    });
  });
}