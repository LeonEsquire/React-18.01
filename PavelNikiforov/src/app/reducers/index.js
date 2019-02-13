import {combineReducers} from 'redux'
import users from './userReducer'
import posts from './postReducer'
import comments from './commentReducer'

export default combineReducers({
    users: users,
    posts: posts,
    comments: comments
})