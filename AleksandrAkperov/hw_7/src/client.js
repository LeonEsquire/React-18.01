import {combineReducers, createStore} from 'redux';


const userReducer = (state ={}, action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            state = {...state, name: action.payload};
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age: action.payload};
            break;
        }                     
    }
    return state;
}

const tweetReducer = (state = [], action) => {
    return state;
}

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetReducer
})


const store = createStore(reducers);


store.subscribe(() => {
    console.log('store изменился', store.getState());
});

store.dispatch({type:"CHANGE_NAME", payload:"Max"});
store.dispatch({type:"CHANGE_AGE", payload: 35});
store.dispatch({type:"CHANGE_AGE", payload: 36});
