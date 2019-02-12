export default (state = {posts: [], fetching: false, fetched: false, error: null}, action) => {
    const {type, payload} = action

    switch (type) {
        case 'FETCH_POSTS': {
            return {...state, fetching: true}
        }
        case 'FETCH_POSTS_REJECTED': {
            return {
                ...state,
                fetching: false,
                error: payload
            }
        }
        case 'FETCH_POSTS_FULFILLED': {
            return {
              ...state,
              fetching: false,
              fetched: true,
              posts: payload,
            }
        }
        case 'ADD_POST': {
            return {
                ...state,
                posts: [...state.posts, payload]
            }
        }
    }

    return state
}