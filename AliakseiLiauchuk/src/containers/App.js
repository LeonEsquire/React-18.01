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
    return (<>
              <Users users={users} />
            </>
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
