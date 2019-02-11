import { combineReducers } from 'redux';

import messages from 'reducers/messages-reducer';
import dbs from 'reducers/dbs-reducer';
import users from 'reducers/users-reducer';
import posts from 'reducers/posts-reducer';
import comments from 'reducers/comments-reducer';

export default combineReducers({messages, dbs, users, posts, comments});