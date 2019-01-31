import React, {Component, Fragment} from 'react';

class Login extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<form>
				<input type='text'>Имя пользователя</input>
				<input type='password'>Пароль</input>
				<input type='button'>Войти</input>
			</form>
			);
	}
}

export default Login;