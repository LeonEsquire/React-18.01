export default function reducer(state={
    singleUser: {},
    fetchingUser: false,
    fetchedUser: false,
    userFetchError: null,
}, action) {

    switch (action.type) {
        case "FETCH_SINGLE_USER": {
            return {...state, fetchingUser: true}
        }
        case "FETCH_SINGLE_USER_REJECTED": {
            return {...state, fetchingUser: false, userFetchError: action.payload}
        }
        case "FETCH_SINGLE_USER_FULFILLED": {
            return {
                ...state,
                fetchingUser: false,
                fetchedUser: true,
                singleUser: action.payload,
            }
        }
    }

    return state
}
