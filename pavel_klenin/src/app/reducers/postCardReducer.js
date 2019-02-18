export default function reducer (state = {
    post: {},
    comments: [],
    author: null,
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch(action.type) {
        case 'FETCH_POSTCARD':
            return {...state, fetching: true};
        case 'FETCH_POSTCARD_FULFILLED':
            return {
                ...state,
                fetching: false, 
                fetched: true, 
                post: action.payload.post,
                comments: action.payload.comments,
                author: action.payload.userName,
            };
        case 'FETCH_POSTCARD_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload,
            };
    }

    return state;
}