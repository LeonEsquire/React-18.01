import Reducer from 'reducers/reducer';

class DBsReducer extends Reducer {

    static reducer(state = [], action){
        switch(action.type){
            case 'DBS_GET_FULFILLED':
                return Reducer[Array.isArray(action.payload) ? 'merge' : 'push']([...state], action.payload);
            case 'DBS_DELETE_FULFILLED':
                return Reducer.pop([...state], action.payload);
            case 'DBS_ADD_FULFILLED':
            case 'DBS_EDIT_FULFILLED':
            case 'DBS_OPEN_FULFILLED':
            case 'DBS_CLOSE_FULFILLED':
            case 'DBS_INIT_FULFILLED':
            case 'DBS_DROP_FULFILLED':
            case 'DBS_FILL_FULFILLED':
            case 'DBS_CLEAR_FULFILLED':
                return Reducer.push([...state], action.payload);
            default:
                return [...state];
        }
    }

}

export default DBsReducer.reducer;