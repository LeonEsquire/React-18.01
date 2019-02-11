import { combineReducers } from 'redux'
import { REQUEST_USERS, RECEIVE_USERS } from '../actions'


let users = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_USERS:
      return {
        ...state,
        isFetching: false,
        items: action.users,
      }
    default:
      return state
  }
}

const usersBySubreddit = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
    case REQUEST_USERS:
      return {
        ...state,
        [action.subreddit]: users(state[action.subreddit], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  usersBySubreddit,
})

export default rootReducer
