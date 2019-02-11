import Reducer from 'reducers/reducer';

class PostsReducer extends Reducer {

    static reducer(state = [], action){
        switch(action.type){
            case 'POSTS_GET_FULFILLED':
                return Reducer[Array.isArray(action.payload) ? 'merge' : 'push']([...state], action.payload);
            case 'POSTS_DELETE_FULFILLED':
                return Reducer.pop([...state], action.payload);
            case 'POSTS_ADD_FULFILLED':
            case 'POSTS_EDIT_FULFILLED':
                return Reducer.push([...state], action.payload);
            default:
                return [...state];
        }
    }

}

export default PostsReducer.reducer;