import React from 'react'

const UsersList = ({users}) => (

  <ul>
    {users.map((user, index) => {
      return <li key={index}>
        <p>{user.username}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </li>
    })}
  </ul>
)

export default UsersList
