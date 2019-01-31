import React, {Component} from "react";
import Login from "./Login";
import Password from "./Password";
import LoginButton from './LoginButton'

class LoginForm extends Component {
    render() {
        return (
            <div>
                <Login>Введите логин (только латинские символы)</Login>
                <Password>Введите пароль (латинские символы и цифры)</Password>
                <LoginButton logining={this.props.logining}>Login</LoginButton>
            </div>

        )
    }
}


export default LoginForm;