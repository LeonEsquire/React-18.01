export default (state = {users: [], fetching: false, fetched: false, error: null}, action) => {
    const {type, payload} = action

    switch (type) {
        case 'FETCH_USERS': {
            return {...state, fetching: true}
        }
        case 'FETCH_USERS_REJECTED': {
            return {
                ...state,
                fetching: false,
                error: payload
            }
        }
        case 'FETCH_USERS_FULFILLED': {
            return {
              ...state,
              fetching: false,
              fetched: true,
              users: payload,
            }
        }
        case 'ADD_USER': {
            return {
                ...state,
                users: [payload, ...state.users]
            }
        }
    }

    return state
}