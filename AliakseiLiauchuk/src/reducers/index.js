import { combineReducers } from 'redux'
import {
  REQUEST_USERS, RECEIVE_USERS
} from '../actions'


let users = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_USERS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.users,
        lastUpdated: action.receivedAt
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
