export default (state = {comments: [], fetching: false, fetched: false, error: null}, action) => {
    const {type, payload} = action

    switch (type) {
        case 'FETCH_COMMENTS': {
            return {...state, fetching: true}
        }
        case 'FETCH_COMMENTS_REJECTED': {
            return {
                ...state,
                fetching: false,
                error: payload
            }
        }
        case 'FETCH_COMMENTS_FULFILLED': {
            return {
              ...state,
              fetching: false,
              fetched: true,
              comments: payload,
            }
        }
        case 'ADD_COMMENT': {
            return {
                ...state,
                comments: [...state.comments, payload]
            }
        }
    }

    return state
}