export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const requestUsers = subreddit => ({
  type: REQUEST_USERS,
  subreddit
})

export const receiveUsers = (subreddit, json) => ({
  type: RECEIVE_USERS,
  subreddit,
  users: json,
  receivedAt: Date.now()
})

const fetchUsers = subreddit => dispatch => {
  dispatch(requestUsers(subreddit))
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
