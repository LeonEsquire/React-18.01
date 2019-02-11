import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import Users from '../components/Users'

class App extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUsers())
  }

  render() {
    const { users } = this.props
    return (<>
              <Users users={users} />
            </>
    )
  }
}

const mapStateToProps = state => {
  const { usersBySubreddit } = state
  const { items: users } = usersBySubreddit[undefined] || { items: [] }

  return {
    users
  }
}

export default connect(mapStateToProps)(App)
