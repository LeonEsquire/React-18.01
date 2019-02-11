import React from 'react'
import PropTypes from 'prop-types'
var _this = this;

const Users = ({users}) => (

  <ul>
    {Array.prototype.map.call(users, function (user, index) {
      return <li>
          <p>{user.username}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
      </li>;
    }, _this)}
  </ul>
)

Users.propTypes = {
  users: PropTypes.array.isRequired
}

export default Users
