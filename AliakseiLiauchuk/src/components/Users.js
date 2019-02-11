import React from 'react'

const Users = ({users}) => (

  <ul>
    {Array.prototype.map.call(users, (user, index) => {
      return <li key={index}>
          <p>{user.username}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
      </li>;
    }, this)}
  </ul>
)

export default Users
