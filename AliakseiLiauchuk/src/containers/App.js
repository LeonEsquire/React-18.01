import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsersIfNeeded } from '../actions'
import Users from '../components/Users'

class App extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUsersIfNeeded())
  }

  render() {
    const { users, isFetching, } = this.props
    const isEmpty = users.length === 0
    return (
      <div>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Users users={users} />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, usersBySubreddit } = state
  const {
    isFetching,
    items: users
  } = usersBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    users,
    isFetching,
  }
}

export default connect(mapStateToProps)(App)
