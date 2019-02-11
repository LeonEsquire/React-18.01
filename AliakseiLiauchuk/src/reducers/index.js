import { combineReducers } from 'redux'
import { RECEIVE_USERS } from '../actions'


let users = (state = {
  items: []
}, action) => {
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

const usersBySubreddit = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
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
