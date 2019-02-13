import React from 'react';
import {addUser, getUsers} from '../actions/userActions';
import UserStore from '../stores/userStore';
import UsersList from '../components/UsersList';

export default class Users extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      users: []
    }
    this.onUserChange = this.onUserChange.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  onUserChange()
  {
    this.setState({users: UserStore.users})
  }

  componentDidMount()
  {
    getUsers();
    UserStore.on('change', this.onUserChange);
  }


  newUser() {
    const username = 'user name';
    const name = 'name';
    const email = 'email';
    const phone = 'phone';
    const website = 'website';

    addUser(username, name, email, phone, website);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.newUser}>Добавить юзера</button>
        <UsersList users={this.state.users}/>
      </div>
    );
  }
}