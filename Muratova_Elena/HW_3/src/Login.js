import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Форма авторизации</h2>
        <form>
          <label> Имя: <input type="text" name="text" className = "name" /> </label>
          <label> Пароль: <input type="password" name="password" className = "password"/> </label>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }  
}


export default Login;