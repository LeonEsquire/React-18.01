import React from 'react'
var _this = this;

const Users = ({users}) => (

  <ul>
    {Array.prototype.map.call(users, function (user, index) {
      return <li key={index}>
          <p>{user.username}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
      </li>;
    }, _this)}
  </ul>
)

export default Users
