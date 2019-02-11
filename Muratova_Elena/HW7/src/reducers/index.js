console.log("V reducer");

export default function( state={
    users: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    console.log("Я прошел экшен и тип: " + action.type)
    switch (action.type) {
      case "FETCH_USERS": {
        return {...state, fetching: true}
      }
      case "FETCH_USERS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USERS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          users: action.payload,
        }
      }
    }

    return state
}
