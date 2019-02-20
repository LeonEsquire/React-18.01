import React from 'react'
import { User } from './User'

export const UsersList = ({users}) => (
  <>
    {users.map((user, index) => {
      return <User key={index} user={user}/>
    })}
  </>
)
