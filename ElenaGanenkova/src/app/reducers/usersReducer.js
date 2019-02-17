export default function reducer(state={
    users: [],
    fetchingUser: false,
    fetchedUser: false,
    userFetchError: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USERS": {
        return {...state, fetchingUser: true}
      }
      case "FETCH_USERS_REJECTED": {
        return {...state, fetchingUser: false, userFetchError: action.payload}
      }
      case "FETCH_USERS_FULFILLED": {
        return {
          ...state,
          fetchingUser: false,
          fetchedUser: true,
          users: action.payload,
        }
      }
    }

    return state
}
