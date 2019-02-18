export default function reducer (state = {
    user: {},
    posts: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch(action.type) {
        case 'FETCH_USERCARD':
            return {...state, fetching: true};
        case 'FETCH_USERCARD_FULFILLED':
            return {
                ...state,
                fetching: false, 
                fetched: true, 
                user: action.payload.user,
                posts: action.payload.posts,
            };
        case 'FETCH_USERCARD_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload,
            };
    }

    return state;
}