import Reducer from 'reducers/reducer';

class UsersReducer extends Reducer {

    static reducer(state = [], action){
        switch(action.type){
            case 'USERS_GET_FULFILLED':
                return Reducer[Array.isArray(action.payload) ? 'merge' : 'push']([...state], action.payload);
            case 'USERS_DELETE_FULFILLED':
                return Reducer.pop([...state], action.payload);
            case 'USERS_ADD_FULFILLED':
            case 'USERS_EDIT_FULFILLED':
                return Reducer.push([...state], action.payload);
            default:
                return [...state];
        }
    }

}

export default UsersReducer.reducer;