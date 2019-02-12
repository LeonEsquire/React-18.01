import React from 'react'
import User from './User'

const UsersList = ({users}) => (
  <>
    {users.map((user) => {
      return <User user={user}/>
    })}
  </>
)

export default UsersList
