import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import Users from '../components/Users'

class App extends Component {

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
  const { usersAll } = state
  const { items: users } = usersAll

  return {
    users
  }
}

export default connect(mapStateToProps)(App)
