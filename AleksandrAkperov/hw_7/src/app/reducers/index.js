import {combineReducers} from 'redux';



import users from './userReducer';
import comments from './commentsReducer';
import posts from './postReducer';


export default combineReducers({
    users: users,
    comments:comments,
    posts:posts
})
