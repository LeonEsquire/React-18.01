import React from 'react'
import { User } from './User'

export const UsersList = ({users}) => (
  <>
    {users.map((user) => {
      return <User user={user}/>
    })}
  </>
)
