import {createStore} from 'redux';


const reducer = function (state, action) {
      return state;
}


const store = createStore(reducer,0);


store.subscribe(() => {
    console.log('store изменился', store.getState());
})

store.dispatch({type:"INC", payload: 1})