import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import UsersList from '../components/Users'

class Users extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUsers())
  }

  render() {
    const { users } = this.props
    return (<>
              <UsersList users={users} />
            </>
    )
  }
}

const mapStateToProps = state => {
  const { usersAll } = state

  return {
    users: usersAll.items
  }
}

export default connect(mapStateToProps)(Users)
