import Reducer from 'reducers/reducer';

class CommentsReducer extends Reducer {

    static reducer(state = [], action){
        switch(action.type){
            case 'COMMENTS_GET_FULFILLED':
                return Reducer[Array.isArray(action.payload) ? 'merge' : 'push']([...state], action.payload);
            case 'COMMENTS_DELETE_FULFILLED':
                return Reducer.pop([...state], action.payload);
            case 'COMMENTS_ADD_FULFILLED':
            case 'COMMENTS_EDIT_FULFILLED':
                return Reducer.push([...state], action.payload);
            default:
                return [...state];
        }
    }

}

export default CommentsReducer.reducer;