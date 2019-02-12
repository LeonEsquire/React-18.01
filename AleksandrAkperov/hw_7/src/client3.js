import { applyMiddleware, createStore } from "redux";
import {createLogger} from "redux-logger";
import thunk from 'redux-thunk';
import axios from "axios";

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_START":{
            return {...state, fetching: true}
            break;
        }
        case "FETCH_USER_ERROR":{
            return {...state, fetching: false, error: action.payload}
            break;
        }
        case "FETCH_USERS":{
            return {
                ...state, 
                fetching: false, 
                fetched:true, 
                ser: action.payload
            };
            break;
        }    
        
    }
    return state;
}

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
    dispatch({type:"FETCH_USERS_START"});
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            dispatch({type:"RECEIVE_USERS", payload: response.data})
        })
        .catch(err => {
            dispatch({type:"FETCH_USERS_ERROR", payload: err}); 
        })
}); 

