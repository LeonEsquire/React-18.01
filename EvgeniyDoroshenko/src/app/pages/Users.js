import React from "react";
import UserList from "../components/user-list";

class Users extends React.Component {
  render() {
    return (
      <div>{!this.props.children ? <UserList /> : this.props.children}</div>
    );
  }
}

export default Users;
