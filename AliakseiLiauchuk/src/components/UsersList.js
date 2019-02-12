import React from 'react'

const UsersList = ({users}) => (
  <>
    {users.map((user, index) => {
      return <div className="card border-secondary mb-3">
      <div className="card-header">
        {user.username}
      </div>
      <div className="card-body text-secondary">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </div>
    })}
  </>

)

export default UsersList
