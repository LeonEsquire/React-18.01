import { combineReducers } from 'redux'
import { RECEIVE_USERS, ADD_USER } from '../actions/UserActions'


const userReducer = (state = { items: []}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        items: action.users,
      }
    case ADD_USER:
      return {
        ...state,
        items: [action.user, ...state.items]
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  userReducer,
})

export default rootReducer
