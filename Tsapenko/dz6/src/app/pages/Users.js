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
		this.setState({users: UserStore.users});
	}

	componentDidMount()
	{
		getUsers();
		UserStore.on('change', this.onUserChange);
	}

	newUser() {
		const body = 'Данные пользователя';
		const userId = 1;
		const title = 'Новый пользователь';

		addUser(title, userId, body);
	}

	render() {
		return(
			<div>
				
				<UsersList users={this.state.users}/>
		  </div>
		);
	}
}
