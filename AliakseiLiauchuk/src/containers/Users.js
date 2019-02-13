import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, fetchUser } from '../actions'
import { UsersList } from '../components/UsersList'

class Users extends Component {
  fetchUser() {
    this.props.dispatch(fetchUser());
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUsers())
  }

  render() {
    const { users } = this.props
    return (<>
              <button type="submit" onClick={this.fetchUser.bind(this)}>add user</button>
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
