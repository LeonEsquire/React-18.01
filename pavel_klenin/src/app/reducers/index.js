import {combineReducers} from 'redux';

import users from './usersReducer';
import userCard from './userCardReducer';
import posts from './postsReducer';
import postCard from './postCardReducer';
import comments from './commentsReducer';

export default combineReducers({
    users,
    userCard,
    posts,
    postCard,
    comments,
});