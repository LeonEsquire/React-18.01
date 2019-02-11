import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import Users from '../components/Users'

class App extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUsers())
  }

  render() {
    const { users, isFetching, } = this.props
    const isEmpty = users.length === 0
    return (
      <div>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div>
              <Users users={users} />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { usersBySubreddit } = state
  const {isFetching, items: users} = usersBySubreddit[undefined] || {
    isFetching: true,
    items: []
  }

  return {
    undefined,
    users,
    isFetching,
  }
}

export default connect(mapStateToProps)(App)
