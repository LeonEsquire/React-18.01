import {applyMiddleware, createStore} from 'redux';


const reducer = (initialState = 0, action) => {
   if (action.type ==="INC") {
       return initialState + 1;
   } else if (action.type ==="DEC") {
    return initialState - 1;
   } else if (action.type ==="E") {
       throw new Error("AAAAAA!!!!!!")
   }
   
  return initialState;
}

const error = (store)=>(next)=>(action)=>{
    try {
      next(action)
    } catch (e) {
      console.log("AAAAAAAAA!", e);
        
    }
    
    
}

const logger = (store)=>(next)=>(action)=>{
    console.log("сработал action", action);
    next(action);
    
}

const middleware = applyMiddleware(logger, error);


const store = createStore(reducer, 1, middleware);


store.subscribe(() => {
    console.log('store изменился', store.getState());
});

store.dispatch({type:"E"});

