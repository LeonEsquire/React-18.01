import {combineReducers} from 'redux';



import user from './userReduser';
import tweets from './tweetsReducer';

export default combineReducers({
    user: user,
    tweets:tweets
})
