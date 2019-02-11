export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export const requestUsers = () => ({
  type: REQUEST_USERS
})

export const receiveUsers = (subreddit, json) => ({
  type: RECEIVE_USERS,
  subreddit,
  users: json,
})

const fetchUsers = subreddit => dispatch => {
  dispatch(requestUsers())
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(json => dispatch(receiveUsers(subreddit, json)))
}

const shouldFetchUsers = (state, subreddit) => {
  const users = state.usersBySubreddit[subreddit]
  if (!users) {
    return true
  }
  if (users.isFetching) {
    return false
  }
  return users.didInvalidate
}

export const fetchUsersIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchUsers(getState(), subreddit)) {
    return dispatch(fetchUsers(subreddit))
  }
}
