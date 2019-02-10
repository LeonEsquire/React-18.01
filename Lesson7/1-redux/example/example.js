import {applyMiddleware, createStore} from 'redux';

const reducer = (initialState=0, action) => {
	if (action.type === 'INC') {
		return initialState + 1;
	} else if (action.type === "DEC") {
		return initialState - 1;
	}
	return initialState;
}

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log('store изменился', store.getState())
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})


/////////



import {applyMiddleware, createStore} from 'redux';

const reducer = (state={}, action) => {
	return state;
}

const middleware = applyMiddleware();
const store = createStore(reducer, middleware);


store.dispatch({type: "FOO"})








