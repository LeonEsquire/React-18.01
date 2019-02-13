import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers, addUser } from '../actions'
import { UsersList } from '../components/UsersList'

class Users extends Component {
  addUser() {
    this.props.dispatch(addUser());
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getUsers())
  }

  render() {
    const { users } = this.props
    return (<>
              <button type="submit" onClick={this.addUser.bind(this)}>add user</button>
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
