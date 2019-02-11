import { combineReducers } from 'redux'
import { RECEIVE_USERS } from '../actions'


const usersAll = (state = { items: []}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        items: action.users,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  usersAll,
})

export default rootReducer
