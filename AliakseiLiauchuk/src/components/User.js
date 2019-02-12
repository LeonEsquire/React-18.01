import React from 'react'

const User = (props) => (
    <div className="card border-secondary mb-3">
        <div className="card-header">
          {props.user.username}
        </div>
        <div className="card-body text-secondary">
          <p>{props.user.name}</p>
          <p>{props.user.email}</p>
          <p>{props.user.phone}</p>
        </div>
    </div>  
  )
  
export default User