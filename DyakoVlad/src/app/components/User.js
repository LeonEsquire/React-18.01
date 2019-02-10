import React from 'react';
import {Link} from 'react-router';

export default class User extends React.Component {
  render() {
      const {id, username, name, email, phone, website} = this.props;

    return (

        <div className="card border-secondary mb-3">
          <div className="card-header">
              <Link to={`/users/${id}`}>
                  {username}
              </Link>
          </div>
          <div className="card-body text-secondary">
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
          </div>
        </div>
    );
  }
}