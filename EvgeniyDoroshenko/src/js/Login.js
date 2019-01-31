import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <form method="GET" action="#" class="form">
        <label htmlFor="login">Логин:</label>
        <br />
        <input type="text" id="login" />
        <label htmlFor="password">Пароль:</label>
        <br />
        <input type="password" id="password" />
        <input type="submit" value="Войти" />
      </form>
    );
  }
}
