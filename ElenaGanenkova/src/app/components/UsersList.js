import React from 'react';
import User from './User';

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      users: this.props.users
    };

  }

  render() {
    if (!this.state.users.length) {
      return null;
    }

    const users = this.state.users.map((user, index) => {
      return <User key={index} {...user} />
    });

    return (
      <div>
        <h1>Пользователи</h1>
        {users}
      </div>
    );
  }
}